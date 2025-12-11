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


export default function Main() {
  const [popup, setPopup] = useState(null);
  const [cards, setCards] = useState([]);
  const currentUser = useContext(CurrentUserContext);

  const editAvatarPopup = { children: <EditAvatar title="Cambiar Foto de Perfil" onClose={handleClosePopup} /> };
  const editProfilePopup = { children: <EditProfile title="Editar Perfil" onClose={handleClosePopup} /> };
  const newCardPopup = { children: <NewCard title="Nuevo lugar" onClose={handleClosePopup} /> };

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  useEffect(() => {
      api.getCards()
      .then(res => setCards(res))
      .catch(err => console.log(err));
  }, [])

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__image-box" onClick={() => handleOpenPopup(editAvatarPopup)}>
          <img src={currentUser.avatar} alt="" className="profile__image" />
          <div className="profile__edit-image"></div>
        </div>
        <div className="profile__info">
          <div className="profile__info-group">
            <h1 className="profile__name">{currentUser.name}</h1>
            <img src={editButton} alt="Icono para editar la información del perfil" className="profile__edit-button" onClick={() => handleOpenPopup(editProfilePopup)} />
          </div>
          <p className="profile__description">{currentUser.about}</p>
        </div>
        <div className="profile__add-button" onClick={() => handleOpenPopup(newCardPopup)}>
          <img src={addIcon} alt="Icono para agregar elementos a la galería" className="profile__add-button-icon" />
        </div>
      </section>

      <ul className="elements">
        {cards.map((card) => (
          <Card key={card._id} card={card} openFull={handleOpenPopup} onClose={handleClosePopup} />
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