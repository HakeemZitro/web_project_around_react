import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import { api } from '../utils/Api.js';
import { useState, useEffect } from 'react';


function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [popup, setPopup] = useState(null);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    (async () => {
      api.getUser()
      .then(res => setCurrentUser(res))
      .catch(err => console.log(err));
    })();
  }, []);

  useEffect(() => {
      api.getCards()
      .then(res => setCards(res))
      .catch(err => console.log(err));
  }, [])

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  const handleUpdateUser = (data) => {
    (async () => {
      api.editUser(data)
      .then(res => setCurrentUser(res))
      .catch(err => console.log(err))
      .finally(() => handleClosePopup())
    })();
  };

  const handleUpdateAvatar = (data) => {
    (async () => {
      api.updateAvatar(data)
      .then(res => setCurrentUser(res))
      .catch(err => console.log(err))
      .finally(() => handleClosePopup())
    })();
  };

  async function handleCardLike(card) {
    await api.changeCardLikeStatus(card.isLiked, card._id)
    .then(newCard => {setCards((cards) => cards.map((currentCard) => currentCard._id === card._id ? newCard : currentCard));})
    .catch(err => console.log(err));
  }

  async function handleCardDelete(card) {
    await api.deleteCard(card._id)
    .then(() => {setCards((cards) => cards.filter((currentCard) => currentCard._id !== card._id));})
    .catch(err => console.log(err));
  }

  const handleAddCard = (data) => {
    (async () => {
      api.addCard(data)
      .then(res => setCards([res, ...cards]))
      .catch(err => console.log(err))
      .finally(() => handleClosePopup())
    })();
  };

  return (
    <div className="page">
      <div className="page__content">
        <CurrentUserContext.Provider value={{currentUser, handleUpdateUser, handleUpdateAvatar, handleAddCard}}>
          <Header />
          <Main onOpenPopup={handleOpenPopup} onClosePopup={handleClosePopup} popup={popup} onCardLike={handleCardLike} onCardDelete={handleCardDelete} cards={cards}/>
          <Footer />
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;