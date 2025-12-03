import Popup from './components/Popup/Popup';
import EditAvatar from './components/EditAvatar/EditAvatar';
import EditProfile from './components/EditProfile/EditProfile';
import NewCard from './components/NewCard/NewCard';
import RemoveCard from './components/RemoveCard/RemoveCard';
import { useState } from 'react';

export default function Main() {
  const [popup, setPopup] = useState(null);

  const editAvatarPopup = { children: <EditAvatar title="Cambiar Foto de Perfil" onClose={handleClosePopup} /> };
  const editProfilePopup = { children: <EditProfile title="Editar Perfil" onClose={handleClosePopup} /> };
  const newCardPopup = { children: <NewCard title="Nuevo lugar" onClose={handleClosePopup} /> };
  const removeCardPopup = { children: <RemoveCard title="¿Estás seguro?" onClose={handleClosePopup} /> };

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__image-box" onClick={() => handleOpenPopup(editAvatarPopup)}>
          <img src="" alt="" className="profile__image" />
          <div className="profile__edit-image"></div>
        </div>
        <div className="profile__info">
          <div className="profile__info-group">
            <h1 className="profile__name">Hakeem Ortiz</h1>
            <img src="./images/Edit_Button.svg" alt="Icono para editar la información del perfil" className="profile__edit-button" onClick={() => handleOpenPopup(editProfilePopup)} />
          </div>
          <p className="profile__description">Aspirante a Desarrollador Web</p>
        </div>
        <div className="profile__add-button" onClick={() => handleOpenPopup(newCardPopup)}>
          <img src="./images/Add_Icon.svg" alt="Icono para agregar elementos a la galería" className="profile__add-button-icon" />
        </div>
      </section>

      <section className="elements"></section>

      {popup && (
        <Popup>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}