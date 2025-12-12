import editButton from '../assets/Edit_Button.svg';
import addIcon from '../assets/Add_Icon.svg';
import Card from './components/Card/Card';
import Popup from './components/Popup/Popup';
import EditAvatar from './components/EditAvatar/EditAvatar';
import EditProfile from './components/EditProfile/EditProfile';
import NewCard from './components/NewCard/NewCard';
import { api } from './components/Utils/Api.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import { useState, useEffect, useContext } from 'react';


export default function Main(props) {
  const { onOpenPopup, onClosePopup, popup } = props;
  const [cards, setCards] = useState([]);
  const { currentUser } = useContext(CurrentUserContext);

  const editAvatarPopup = { children: <EditAvatar title="Cambiar Foto de Perfil" onClose={onClosePopup} /> };
  const editProfilePopup = { children: <EditProfile title="Editar Perfil" onClose={onClosePopup} /> };
  const newCardPopup = { children: <NewCard title="Nuevo lugar" onClose={onClosePopup} /> };

  useEffect(() => {
      api.getCards()
      .then(res => setCards(res))
      .catch(err => console.log(err));
  }, [])

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

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__image-box" onClick={() => onOpenPopup(editAvatarPopup)}>
          <img src={currentUser.avatar} alt="" className="profile__image" />
          <div className="profile__edit-image"></div>
        </div>
        <div className="profile__info">
          <div className="profile__info-group">
            <h1 className="profile__name">{currentUser.name}</h1>
            <img src={editButton} alt="Icono para editar la información del perfil" className="profile__edit-button" onClick={() => onOpenPopup(editProfilePopup)} />
          </div>
          <p className="profile__description">{currentUser.about}</p>
        </div>
        <div className="profile__add-button" onClick={() => onOpenPopup(newCardPopup)}>
          <img src={addIcon} alt="Icono para agregar elementos a la galería" className="profile__add-button-icon" />
        </div>
      </section>

      <ul className="elements">
        {cards.map((card) => (
          <Card key={card._id} card={card} openFull={onOpenPopup} onClose={onClosePopup} onCardLike={handleCardLike} onCardDelete={handleCardDelete}/>
        ))}
      </ul>

      {popup && (
        <Popup>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}