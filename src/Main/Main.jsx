import profilePicture from '../../images/Hakeem_Ortiz_profilePicture.avif';
import Card from './components/Card/Card';
import Popup from './components/Popup/Popup';
import EditAvatar from './components/EditAvatar/EditAvatar';
import EditProfile from './components/EditProfile/EditProfile';
import NewCard from './components/NewCard/NewCard';
import { useState } from 'react';

const cards = [
  {
    isLiked: false,
    _id: '5d1f0611d321eb4bdcd707dd',
    name: 'Yosemite Valley',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:10:57.741Z',
  },
  {
    isLiked: true,
    _id: '5d1f064ed321eb4bdcd707de',
    name: 'Lake Louise',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:11:58.324Z',
  },
  {
    isLiked: false,
    _id: '5d1f068ad321eb4bdcd707df',
    name: 'Latemar',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:12:59.324Z',
  },
];

console.log(cards);

export default function Main() {
  const [popup, setPopup] = useState(null);

  const editAvatarPopup = { children: <EditAvatar title="Cambiar Foto de Perfil" onClose={handleClosePopup} /> };
  const editProfilePopup = { children: <EditProfile title="Editar Perfil" onClose={handleClosePopup} /> };
  const newCardPopup = { children: <NewCard title="Nuevo lugar" onClose={handleClosePopup} /> };

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
          <img src={profilePicture} alt="" className="profile__image" />
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