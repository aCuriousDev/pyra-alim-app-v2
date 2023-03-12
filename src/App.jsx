import { useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import {
  easeIn,
  motion,
  AnimatePresence,
  useMotionValue,
  animate,
  useTransform,
} from 'framer-motion';
import './App.css';
import aliments from './data.js';

let initialScore = [
  { id: 0, ref_freq: 1, name: 'rarement / jamais', score: 0 },
  { id: 1, ref_freq: 2, name: 'quelques fois par mois', score: 0 },
  { id: 2, ref_freq: 3, name: 'quelques fois par semaine', score: 0 },
  { id: 3, ref_freq: 4, name: 'tous les jours', score: 0 },
];

function App() {
  const [cards, setCards] = useState([]);
  const [started, setStarted] = useState(false);
  const [index, setIndex] = useState(2);
  const [sortedCards, setSortedCards] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [globalSuccessScore, setGlobalSuccessScore] = useState(null);
  const [singleSuccessScore, setSingleSuccessScore] = useState(initialScore);

  // Card Components
  function Card({ card, cards }) {
    const [isVisible, setIsVisible] = useState(true);
    const [swipingDir, setSwipingDir] = useState(null);
    const [dirColor, setDirColor] = useState(null);

    // Toggle selected card visibilty and save cardss state to localStorage
    const remove = () => {
      setTimeout(() => {
        setIsVisible(false);
        setIndex((prevIndex) => prevIndex + 1);
        saveCardsToLocal();
        console.log('cards length: ' + cards.length);
        console.log(index);
      }, 75);
    };

    // Swipe gesture recognition
    const escapeVelocity = 0.15;
    const handlers = useSwipeable({
      onSwipedLeft: (eventData) => {
        if (eventData.velocity >= escapeVelocity) {
          // console.log('User Swiped :', eventData.dir),
          remove(), ((card.set_freq = 2), (card.sorted = true));
          // setSortedCards([...sortedCards, card]),
          // console.log(sortedCards),
          //console.log(card)
        }
      },
      onSwipedRight: (eventData) => {
        if (eventData.velocity >= escapeVelocity) {
          // console.log('User Swiped :', eventData.dir),
          remove(), ((card.set_freq = 4), (card.sorted = true));
          // console.log(card)
        }
      },
      onSwipedUp: (eventData) => {
        if (eventData.velocity >= escapeVelocity) {
          // console.log('User Swiped :', eventData.dir),
          remove(), ((card.set_freq = 3), (card.sorted = true));
          // console.log(card)
        }
      },
      onSwipedDown: (eventData) => {
        if (eventData.velocity >= escapeVelocity) {
          // console.log('User Swiped :', eventData.dir),
          remove(), ((card.set_freq = 1), (card.sorted = true));
          // console.log(card)
        }
      },
      onSwiping: (eventData) => {
        const getDir = eventData.dir;
        let freq = '';
        switch (getDir) {
          case 'Left':
            freq = 'Quelques fois par mois';
            setDirColor('#ebad1e');
            break;
          case 'Right':
            freq = 'Tous les jours';
            setDirColor('#256de0');
            break;
          case 'Up':
            freq = 'Quelques fois par semaine';
            setDirColor('#10b22e');
            break;
          case 'Down':
            freq = 'Rarement / Jamais';
            setDirColor('#e02e25');
            break;
        }
        setSwipingDir('Consommation : ' + freq);
      },
      onTouchEndOrOnMouseUp: ({ event }) => {
        setTimeout(() => {
          setSwipingDir(null);
          setDirColor(null);
        }, 80);
      },
      trackMouse: true,
      delta: { up: 100, down: 100, right: 60, left: 60 },
    });

    return (
      isVisible && (
        <motion.div
          drag
          dragTransition={{
            bounceStiffness: 99,
            bounceDamping: 23,
            timeConstant: 500,
            power: 0.1,
          }}
          transition={{
            type: 'spring',
            damping: 3,
            stiffness: 50,
            restDelta: 0.001,
          }}
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragElastic={0.5}
          whileTap={{ scale: 0.9 }}
          className="card unselectable"
          style={{
            backgroundColor: card.color01,
            backgroundImage: `linear-gradient(to top right, ${card.color02}, ${card.color01})`,
            backgroundBlendMode: 'soft-light',
          }}
          {...handlers}
          isVisible={isVisible}
        >
          <div
            className="direction-display unselectable"
            style={
              swipingDir && {
                backgroundColor: dirColor + 'B3',
                boxShadow: `0px 0px 12px 6px ${dirColor + 'B3'}`,
              }
            }
          >
            <p>{swipingDir}</p>
          </div>
          <div className="front">
            <img
              className="drop-shadow"
              src={card.img}
              alt={card.name + ' illustration de la carte'}
              draggable="false"
            />
            <h2 className="card-title">{card.name}</h2>
          </div>
          <div className="back"></div>
        </motion.div>
      )
    );
  }

  // Mesure success rate
  const globalSuccessRate = () => {
    const globalSuccess = cards.filter(
      (card) => card.set_freq === card.ref_freq
    ).length;
    const globalSuccessRate = Math.floor((globalSuccess / cards.length) * 100);
    setGlobalSuccessScore(globalSuccessRate);
  };

  const singleSuccessRate = (refFreq) => {
    const filteredSingle = cards.filter((card) => {
      if (refFreq === card.ref_freq && card.set_freq === card.ref_freq) {
        return true;
      }
    });

    const refFreqLength = cards.filter(
      (card) => card.ref_freq === refFreq
    ).length;

    const scorePercentCalc = Math.floor(
      (filteredSingle.length / refFreqLength) * 100
    );

    const singleScore = singleSuccessScore.map((score) => {
      if (score.ref_freq === refFreq) {
        return {
          ...score,
          score: (score.score = filteredSingle.length),
          ref_score: (score.ref_score = refFreqLength),
          score_percent: (score.score_percent = scorePercentCalc),
        };
      }
      return score;
    });
    setSingleSuccessScore(singleScore);
    console.log(singleSuccessScore);
  };

  useEffect(() => {
    globalSuccessRate();
    // Cycle through the scores and update them
    for (let i = 1; i < 5; i++) {
      singleSuccessRate(i);
    }
  }, [showResults]);

  // start evaluation
  const startTest = () => {
    const shuffledCards = [...aliments]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, set_freq: 0, sorted: false }));

    setCards(shuffledCards);
    setStarted(true);
  };

  // reset evaluation & clear local storage
  const resetTest = () => {
    setCards([]);
    setStarted(false);
    setSortedCards([]);
    setShowDetails(false);
    setShowResults(false);
    setIndex(2);
    localStorage.clear();
  };

  const saveCardsToLocal = () => {
    localStorage.setItem('cards', JSON.stringify(cards));
    localStorage.setItem('index', JSON.stringify(index));
  };

  // load cards and index from localstorage on first render if it exists
  useEffect(() => {
    const localCards = JSON.parse(localStorage.getItem('cards'));
    const localIndex = JSON.parse(localStorage.getItem('index'));
    if (localCards) {
      setCards(localCards);
      // add +1 to index in order to retrieve previous state
      setIndex(localIndex + 1);
      setStarted(true);
    }
  }, []);

  return (
    <div className="App unselectable">
      <motion.h1
        className={started ? 'title started drop-shadow' : 'title drop-shadow'}
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Pyra'Alim
      </motion.h1>
      {started && (
        <motion.button
          animate={{
            opacity: 1,
            transition: { ease: 'easeIn', duration: 1.6 },
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.85 }}
          className="button-reset"
          onClick={resetTest}
        >
          <motion.svg
            whileHover={{ rotate: 360 }}
            whileTap={{ rotate: 180 }}
            id="reset-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M126.9 142.9c62.2-62.2 162.7-62.5 225.3-1L311 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H447.5c0 0 0 0 0 0H456c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L397.4 96.6c-87.6-86.5-228.7-86.2-315.8 1C57.2 122 39.6 150.7 28.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5c7.7-21.8 20.2-42.3 37.8-59.8zM0 312v7.6 .7V440c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l41.6-41.6c87.6 86.5 228.7 86.2 315.8-1c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.2 62.2-162.7 62.5-225.3 1L169 329c6.9-6.9 8.9-17.2 5.2-26.2s-12.5-14.8-22.2-14.8H32.4h-.7H24c-13.3 0-24 10.7-24 24z"
            />
          </motion.svg>
        </motion.button>
      )}
      {!started && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="subtitle"
        >
          L'outil simple pour auto-évaluer la qualité de mon alimentation et
          équilibrer ma pyramide alimentaire.
        </motion.p>
      )}
      {!started && (
        <motion.button
          className="button-start"
          onClick={startTest}
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          whileTap={{ scale: 0.85 }}
          whileHover={{ scale: 1.05 }}
        >
          Commencer le test
        </motion.button>
      )}

      {started && !showResults && index - 2 === cards.length && (
        <motion.div
          className="finished"
          initial={{ x: '-100vw' }}
          animate={{ x: 0, y: [0, -12, 0] }}
          transition={{
            y: { repeat: Infinity, type: 'srping', duration: 0.75 },
          }}
        >
          <h3>Terminé !</h3>
        </motion.div>
      )}

      {started && !showResults && (
        <>
          <div className="progression-container">
            <div
              className="progression-bar"
              style={{ width: `${(index / 45) * 100}%` }}
            ></div>
            <div className="progress-number">
              {index - 2} / {cards.length}
            </div>
          </div>
          <div className="cards-container">
            {cards
              .slice(0, index)
              .reverse()
              .map(
                (card) =>
                  card.set_freq === 0 && (
                    <Card
                      key={card.id}
                      card={card}
                      cards={cards}
                      sortedCards={sortedCards}
                    />
                  )
              )}
          </div>
        </>
      )}

      {showResults && (
        <motion.div
          className="results"
          layout="position"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h2>Résultats</h2>
          <p>
            Vous avez obtenu un score de{' '}
            <span className="accent">
              {cards.filter((card) => card.set_freq === card.ref_freq).length}{' '}
              sur {cards.length}.
            </span>
          </p>
          <p>
            En adaptant vos habitudes de consommation de{' '}
            <span className="accent">
              {cards.length -
                cards.filter((card) => card.set_freq === card.ref_freq)
                  .length}{' '}
              aliments
            </span>{' '}
            vous pourriez équilibrer votre pyramide alimentaire à 100%.
          </p>
          <p>
            Cliquez sur les catégories ci-dessous pour explorer votre pyramide
            alimentaire en détail.
          </p>
          <div className="result-indiv-wrap">
            <h3>Score Global</h3>
            <div className="result-percent-bar-bg global-score">
              <motion.div
                className="result-freq"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: easeIn, duration: 0.65, delay: 0.15 }}
              >
                <p>{globalSuccessScore + '%'}</p>
              </motion.div>
              <motion.div
                initial={{ x: -120 }}
                animate={{ x: 0 }}
                transition={{ type: easeIn, duration: 0.65 }}
                className="result-percent-bar-front "
                style={{
                  width: `${globalSuccessScore}%`,
                }}
              ></motion.div>
            </div>
          </div>
          <div className="pyramide-results">
            <motion.div
              className="result-indiv-wrap result-rarely"
              initial={{ x: '-100vw' }}
              animate={{ x: 0 }}
              transition={{ type: easeIn, duration: 0.65, delay: 0.35 }}
            >
              <div
                onClick={() =>
                  !showDetails ? setShowDetails(true) : setShowDetails(false)
                }
                className="result-percent-bar-bg"
              >
                <motion.div
                  className="result-freq"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ type: easeIn, duration: 0.65, delay: 0.15 }}
                >
                  <p>{singleSuccessScore[0].score_percent + '%'}</p>
                  <h4>Rarement / Jamais</h4>
                </motion.div>
                <motion.div
                  initial={{ x: -120 }}
                  animate={{ x: 0 }}
                  transition={{ type: easeIn, duration: 0.65, delay: 0.15 }}
                  className="result-percent-bar-front bg-rarely"
                  style={{
                    width: `${singleSuccessScore[0].score_percent}%`,
                  }}
                ></motion.div>
              </div>
              <div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="result-alims-container"
              >
                {showDetails &&
                  cards
                    .sort((a, b) => a.ref_freq - b.ref_freq)
                    .map(
                      (card) =>
                        card.set_freq === 1 && (
                          <motion.span
                            className={
                              card.set_freq !== card.ref_freq
                                ? 'result-single-alim incorrect'
                                : 'result-single-alim correct'
                            }
                            key={card.id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                          >
                            <img
                              draggable="false"
                              className="mini-img-results"
                              src={card.img}
                              alt=""
                            />
                          </motion.span>
                        )
                    )}
              </div>
            </motion.div>
            <motion.div
              className="result-indiv-wrap result-monthly"
              initial={{ x: '-100vw' }}
              animate={{ x: 0 }}
              transition={{ type: easeIn, duration: 0.65, delay: 0.25 }}
            >
              <div
                onClick={() =>
                  !showDetails ? setShowDetails(true) : setShowDetails(false)
                }
                className="result-percent-bar-bg"
              >
                <motion.div
                  className="result-freq"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ type: easeIn, duration: 0.65, delay: 0.15 }}
                >
                  <p>{singleSuccessScore[1].score_percent + '%'}</p>
                  <h4>Quelques fois par mois</h4>
                </motion.div>
                <motion.div
                  initial={{ x: -120 }}
                  animate={{ x: 0 }}
                  transition={{ type: easeIn, duration: 0.65, delay: 0.25 }}
                  className="result-percent-bar-front bg-monthly"
                  style={{
                    width: `${singleSuccessScore[1].score_percent}%`,
                  }}
                ></motion.div>
              </div>
              <div className="result-alims-container">
                {showDetails &&
                  cards
                    .sort((a, b) => a.ref_freq - b.ref_freq)
                    .map(
                      (card) =>
                        card.set_freq === 2 && (
                          <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className={
                              card.set_freq !== card.ref_freq
                                ? 'result-single-alim incorrect'
                                : 'result-single-alim correct'
                            }
                            key={card.id}
                          >
                            <img
                              draggable="false"
                              className="mini-img-results"
                              src={card.img}
                              alt=""
                            />
                          </motion.span>
                        )
                    )}
              </div>
            </motion.div>
            <motion.div
              className="result-indiv-wrap result-weekly"
              initial={{ x: '-100vw' }}
              animate={{ x: 0 }}
              transition={{ type: easeIn, duration: 0.65, delay: 0.15 }}
            >
              <div
                className="result-percent-bar-bg"
                onClick={() =>
                  !showDetails ? setShowDetails(true) : setShowDetails(false)
                }
              >
                <motion.div
                  className="result-freq"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ type: easeIn, duration: 0.65, delay: 0.15 }}
                >
                  <p>{singleSuccessScore[2].score_percent + '%'}</p>
                  <h4>Quelques fois par semaine</h4>
                </motion.div>
                <motion.div
                  initial={{ x: -120 }}
                  animate={{ x: 0 }}
                  transition={{ type: easeIn, duration: 0.65, delay: 0.35 }}
                  className="result-percent-bar-front bg-weekly"
                  style={{
                    width: `${singleSuccessScore[2].score_percent}%`,
                  }}
                ></motion.div>
              </div>
              <div className="result-alims-container">
                {showDetails &&
                  cards
                    .sort((a, b) => a.ref_freq - b.ref_freq)
                    .map(
                      (card) =>
                        card.set_freq === 3 && (
                          <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className={
                              card.set_freq !== card.ref_freq
                                ? 'result-single-alim incorrect'
                                : 'result-single-alim correct'
                            }
                            key={card.id}
                          >
                            <img
                              draggable="false"
                              className="mini-img-results"
                              src={card.img}
                              alt=""
                            />
                          </motion.span>
                        )
                    )}
              </div>
            </motion.div>
            <motion.div
              className="result-indiv-wrap result-daily"
              initial={{ x: '-100vw' }}
              animate={{ x: 0 }}
              transition={{ type: easeIn, duration: 0.65, delay: 0.05 }}
            >
              <div
                className="result-percent-bar-bg"
                onClick={() =>
                  !showDetails ? setShowDetails(true) : setShowDetails(false)
                }
              >
                <motion.div
                  className="result-freq"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ type: easeIn, duration: 0.65, delay: 0.15 }}
                >
                  <p>{singleSuccessScore[3].score_percent + '%'}</p>
                  <h4>Tous les jours</h4>
                </motion.div>
                <motion.div
                  initial={{ x: -120 }}
                  animate={{ x: 0 }}
                  transition={{ type: easeIn, duration: 0.65, delay: 0.45 }}
                  className="result-percent-bar-front bg-daily"
                  style={{
                    width: `${singleSuccessScore[3].score_percent}%`,
                  }}
                ></motion.div>
              </div>
              <div className="result-alims-container">
                {showDetails &&
                  cards
                    .sort((a, b) => a.ref_freq - b.ref_freq)
                    .map(
                      (card) =>
                        card.set_freq === 4 && (
                          <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className={
                              card.set_freq !== card.ref_freq
                                ? 'result-single-alim incorrect'
                                : 'result-single-alim correct'
                            }
                            key={card.id}
                          >
                            <img
                              draggable="false"
                              className="mini-img-results"
                              src={card.img}
                              alt=""
                            />
                          </motion.span>
                        )
                    )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}

      {started && index - 2 === cards.length && (
        <button
          className={
            !showResults ? 'button-show-results' : 'button-show-results showing'
          }
          onClick={() =>
            !showResults ? setShowResults(true) : setShowResults(false)
          }
        >
          {!showResults ? 'Voir les résultats' : 'Masquer les résultats'}
        </button>
      )}
    </div>
  );
}

export default App;
