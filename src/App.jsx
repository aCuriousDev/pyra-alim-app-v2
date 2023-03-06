import { useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { motion } from 'framer-motion';
import './App.css';
import aliments from './data.js';

function App() {
  const [cards, setCards] = useState([]);
  const [started, setStarted] = useState(false);
  const [topCard, setTopCard] = useState([]);
  const [sortedCards, setSortedCards] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  function Card({ card, cards, sortedCards }) {
    const [isVisible, setIsVisible] = useState(true);
    const [swipingDir, setSwipingDir] = useState(null);
    const [dirColor, setDirColor] = useState(null);

    const remove = () => {
      setTimeout(() => {
        setIsVisible(false);
      }, 150);
    };

    // Swipe gesture recognition
    const handlers = useSwipeable({
      onSwipedLeft: (eventData) => {
        console.log('User Swiped :', eventData.dir),
          remove(),
          ((card.set_freq = 2), (card.sorted = true)),
          setSortedCards([...sortedCards, card]),
          console.log(sortedCards),
          console.log(card);
      },
      onSwipedRight: (eventData) => {
        console.log('User Swiped :', eventData.dir),
          remove(),
          ((card.set_freq = 4), (card.sorted = true)),
          console.log(card);
      },
      onSwipedUp: (eventData) => {
        console.log('User Swiped :', eventData.dir),
          remove(),
          ((card.set_freq = 3), (card.sorted = true)),
          console.log(card);
      },
      onSwipedDown: (eventData) => {
        console.log('User Swiped :', eventData.dir),
          remove(),
          ((card.set_freq = 1), (card.sorted = true)),
          console.log(card);
      },
      onSwiping: (eventData) => {
        const getDir = eventData.dir;
        let freq = '';
        switch (getDir) {
          case 'Left':
            freq = 'Quelques fois par mois';
            setDirColor('rgb(235, 173, 30)');
            break;
          case 'Right':
            freq = 'Tous les jours';
            setDirColor('rgb(37, 109, 224)');
            break;
          case 'Up':
            freq = 'Quelques fois par semaine';
            setDirColor('rgb(16, 178, 46)');
            break;
          case 'Down':
            freq = 'Rarement / Jamais';
            setDirColor('rgb(224, 46, 37)');
            break;
        }
        setSwipingDir(freq),
          setTimeout(() => {
            setSwipingDir(null), setDirColor(null);
          }, 2850);
      },
      onTouchEndOrOnMouseUp: ({ event }) => {
        setSwipingDir(null);
        setDirColor(null);
      },
      trackMouse: true,
      delta: 180,
      swipeDuration: 2850,
    });

    return (
      isVisible && (
        <motion.div
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          transition={{ ease: [0.6, 0.05, -0.01, 0.9] }}
          whileTap={{ scale: 0.9 }}
          className="card unselectable"
          style={{ background: card.color01 }}
          {...handlers}
          isVisible={isVisible}
        >
          <div
            className="direction-display"
            style={{ backgroundColor: dirColor }}
          >
            {swipingDir}
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
      console.log('true', cardsLength, sortedLength);
      return true;
    } else {
      console.log('false', cardsLength, sortedLength);
      return false;
    }
  };


  return (
    <div className="App">
      <motion.h1
        className={started ? 'title started drop-shadow' : 'title drop-shadow'}
        layout
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{ duration: 0.5 }}
      >
        Pyra'Alim
      </motion.h1>
      {started && (
        <motion.button
          animate={{ opacity: 1 }}
          transition={{ ease: 'easeIn', duration: 1.6 }}
          className="button-reset"
          onClick={resetTest}
        >
          <svg
            id="reset-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M126.9 142.9c62.2-62.2 162.7-62.5 225.3-1L311 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H447.5c0 0 0 0 0 0H456c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L397.4 96.6c-87.6-86.5-228.7-86.2-315.8 1C57.2 122 39.6 150.7 28.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5c7.7-21.8 20.2-42.3 37.8-59.8zM0 312v7.6 .7V440c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l41.6-41.6c87.6 86.5 228.7 86.2 315.8-1c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.2 62.2-162.7 62.5-225.3 1L169 329c6.9-6.9 8.9-17.2 5.2-26.2s-12.5-14.8-22.2-14.8H32.4h-.7H24c-13.3 0-24 10.7-24 24z"
            />
          </svg>
        </motion.button>
      )}
      {!started && (
        <motion.p
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{ duration: 0.5 }}
         className="subtitle">
          L'outil simple pour auto-évaluer la qualité de mon alimentation et
          équilibrer ma pyramide alimentaire.
        </motion.p>
      )}
      {!started && (
        <motion.button
          className="button-start"
          onClick={startTest}
          initial={{ x: '-9000px' }}
          animate={{ x: 0 }}
          transition={{duration: 0.35}}
          whileTap={{ scale: 0.9 }}
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
        <motion.div className="results" layout="position">
          <h2>Résultats</h2>
          <h3>Score Global</h3>
          <div className="result-percent-bar-bg">
            <div className="result-percent-bar-front">
              {Math.floor((12 / 42) * 100) + '%'}
            </div>
          </div>
          <h3>Rarement / Jamais</h3>
          <div
            className="result-percent-bar-bg"
            onClick={() =>
              !showDetails ? setShowDetails(true) : setShowDetails(false)
            }
          >
            <div className="result-percent-bar-front bg-rarely">
              {Math.floor((12 / 42) * 100) + '%'}
            </div>
          </div>
          {showDetails &&
            cards.map(
              (card) => card.set_freq === 1 && <p key={card.id}>{card.name}</p>
            )}
          <h3>Quelques fois par mois</h3>
          <div
            className="result-percent-bar-bg"
            onClick={() =>
              !showDetails ? setShowDetails(true) : setShowDetails(false)
            }
          >
            <div className="result-percent-bar-front bg-monthly">
              {Math.floor((12 / 42) * 100) + '%'}
            </div>
          </div>
          {showDetails &&
            cards.map(
              (card) => card.set_freq === 2 && <p key={card.id}>{card.name}</p>
            )}
          <h3>Quelques fois par semaine</h3>
          <div
            className="result-percent-bar-bg"
            onClick={() =>
              !showDetails ? setShowDetails(true) : setShowDetails(false)
            }
          >
            <div className="result-percent-bar-front bg-weekly">
              {Math.floor((12 / 42) * 100) + '%'}
            </div>
          </div>
          {showDetails &&
            cards.map(
              (card) => card.set_freq === 3 && <p key={card.id}>{card.name}</p>
            )}
          <h3>Tous les jours</h3>
          <div
            className="result-percent-bar-bg"
            onClick={() =>
              !showDetails ? setShowDetails(true) : setShowDetails(false)
            }
          >
            <div className="result-percent-bar-front bg-daily">
              {Math.floor((12 / 42) * 100) + '%'}
            </div>
          </div>
          {showDetails &&
            cards.map(
              (card) => card.set_freq === 4 && <p key={card.id}>{card.name}</p>
            )}
        </motion.div>
      )}

      {started && (
        <button
          className="button-show-results button-start"
          onClick={() =>
            !showResults ? setShowResults(true) : setShowResults(false)
          }
          // onClick={compareCardsAndSorted}
        >
          {!showResults ? 'Voir les résultats' : 'Masquer les résultats'}
        </button>
      )}

      {/* {started && (
        <div className="btn-rate-container">
          <button className="btn-daily">
            <span>tous les</span> jours
          </button>
          <button className="btn-weekly">
            <span>quelques fois par</span> semaine
          </button>
          <button className="btn-monthly">
            <span>quelques fois par</span> mois
          </button>
          <button className="btn-rarely">rarement / jamais</button>
        </div>
      )} */}
    </div>
  );
}

export default App;
