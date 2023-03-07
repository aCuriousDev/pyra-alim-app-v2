import { useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { easeIn, motion } from 'framer-motion';
import './App.css';
import aliments from './data.js';

function App() {
  const [cards, setCards] = useState([]);
  const [started, setStarted] = useState(false);
  const [topCard, setTopCard] = useState([]);
  const [sortedCards, setSortedCards] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  // Card Components
  function Card({ card, cards, sortedCards }) {
    const [isVisible, setIsVisible] = useState(true);
    const [swipingDir, setSwipingDir] = useState(null);
    const [dirColor, setDirColor] = useState(null);

    const remove = () => {
      setTimeout(() => {
        setIsVisible(false);
        // console.log(sortedCards);
      }, 350);
    };

    // Swipe gesture recognition
    const escapeVelocity = 0.8;
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
        // setTimeout(() => {
        //   setSwipingDir(null), setDirColor(null);
        // }, 2850);
      },
      onTouchEndOrOnMouseUp: ({ event }) => {
        setTimeout(() => {
          setSwipingDir(null);
          setDirColor(null);
        }, 450);
      },
      trackMouse: true,
      delta: { up: 180, down: 180, right: 80, left: 80 },
    });

    return (
      isVisible && (
        <motion.div
          drag
          dragTransition={{ bounceStiffness: 99, bounceDamping: 23 }}
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          // dragSnapToOrigin={true}
          dragElastic={0.5}
          whileTap={{ scale: 0.9 }}
          className="card unselectable"
          style={{ background: card.color01 }}
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

  // start evaluation
  const startTest = () => {
    const shuffledCards = [...aliments]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, set_freq: 0, sorted: false }));

    setCards(shuffledCards);
    setStarted(true);
    // setTop();
  };

  // reset evaluation
  const resetTest = () => {
    setCards([]);
    setStarted(false);
    setSortedCards([]);
    setShowDetails(false);
    setShowResults(false);
  };

  const compareCardsAndSorted = () => {
    const cardsLength = cards.length;
    const sortedLength = sortedCards.length;
    if (cardsLength == sortedLength) {
      // console.log('true', cardsLength, sortedLength);
      return true;
    } else {
      // console.log('false', cardsLength, sortedLength);
      return false;
    }
  };

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

      {started && !showResults && (
        <div className="cards-container">
          {cards.map(
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
      )}

      {showResults && (
        <motion.div
          className="results"
          layout="position"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h2>Résultats</h2>
          <p>Cliquez sur les catégories pour voir plus de détails.</p>
          <div className="result-indiv-wrap">
            <h3>Score Global</h3>
            <div className="result-percent-bar-bg global-score">
              <motion.div
                initial={{ x: -120 }}
                animate={{ x: 0 }}
                transition={{ type: easeIn, duration: 0.65 }}
                className="result-percent-bar-front "
              >
                <p>{Math.floor((1 / cards.length) * 100) + '%'}</p>
              </motion.div>
            </div>
          </div>
          <div className="result-indiv-wrap">
            <h4>Rarement / Jamais</h4>
            <div
              className="result-percent-bar-bg"
              onClick={() =>
                !showDetails ? setShowDetails(true) : setShowDetails(false)
              }
            >
              <motion.div
                initial={{ x: -120 }}
                animate={{ x: 0 }}
                transition={{ type: easeIn, duration: 0.65, delay: 0.15 }}
                className="result-percent-bar-front bg-rarely"
              >
                <p>{Math.floor((1 / cards.length) * 100) + '%'}</p>
              </motion.div>
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
          </div>
          <div className="result-indiv-wrap">
            <h4>Quelques fois par mois</h4>
            <div
              className="result-percent-bar-bg"
              onClick={() =>
                !showDetails ? setShowDetails(true) : setShowDetails(false)
              }
            >
              <motion.div
                initial={{ x: -120 }}
                animate={{ x: 0 }}
                transition={{ type: easeIn, duration: 0.65, delay: 0.25 }}
                className="result-percent-bar-front bg-monthly"
              >
                <p>{Math.floor((1 / cards.length) * 100) + '%'}</p>
              </motion.div>
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
          </div>
          <div className="result-indiv-wrap">
            <h4>Quelques fois par semaine</h4>
            <div
              className="result-percent-bar-bg"
              onClick={() =>
                !showDetails ? setShowDetails(true) : setShowDetails(false)
              }
            >
              <motion.div
                initial={{ x: -120 }}
                animate={{ x: 0 }}
                transition={{ type: easeIn, duration: 0.65, delay: 0.35 }}
                className="result-percent-bar-front bg-weekly"
              >
                <p>{Math.floor((1 / cards.length) * 100) + '%'}</p>
              </motion.div>
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
          </div>
          <div className="result-indiv-wrap">
            <h4>Tous les jours</h4>
            <div
              className="result-percent-bar-bg"
              onClick={() =>
                !showDetails ? setShowDetails(true) : setShowDetails(false)
              }
            >
              <motion.div
                initial={{ x: -120 }}
                animate={{ x: 0 }}
                transition={{ type: easeIn, duration: 0.65, delay: 0.45 }}
                className="result-percent-bar-front bg-daily"
              >
                <p>{Math.floor((1 / cards.length) * 100) + '%'}</p>
              </motion.div>
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
          </div>
        </motion.div>
      )}

      {started && (
        <button
          className={
            !showResults ? 'button-show-results' : 'button-show-results showing'
          }
          onClick={() =>
            !showResults ? setShowResults(true) : setShowResults(false)
          }
          // onClick={compareCardsAndSorted}
        >
          {!showResults ? 'Voir les résultats' : 'Masquer les résultats'}
        </button>
      )}
    </div>
  );
}

export default App;
