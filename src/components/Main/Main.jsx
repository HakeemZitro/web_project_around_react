import editButton from "../../assets/Edit_Button.svg";
import addIcon from "../../assets/Add_Icon.svg";
import Card from "./components/Card/Card.jsx";
import Popup from "./components/Popup/Popup.jsx";
import EditAvatar from "./components/EditAvatar/EditAvatar.jsx";
import EditProfile from "./components/EditProfile/EditProfile.jsx";
import NewCard from "./components/NewCard/NewCard.jsx";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";
import { useContext } from "react";

export default function Main(props) {
  const { onOpenPopup, onClosePopup, popup, onCardLike, onCardDelete, cards } =
    props;
  const { currentUser } = useContext(CurrentUserContext);

  const editAvatarPopup = {
    children: (
      <EditAvatar title="Cambiar Foto de Perfil" onClose={onClosePopup} />
    ),
  };
  const editProfilePopup = {
    children: <EditProfile title="Editar Perfil" onClose={onClosePopup} />,
  };
  const newCardPopup = {
    children: <NewCard title="Nuevo lugar" onClose={onClosePopup} />,
  };

  return (
    <main className="content">
      <section className="profile">
        <div
          className="profile__image-box"
          onClick={() => onOpenPopup(editAvatarPopup)}
        >
          <img src={currentUser.avatar} alt="" className="profile__image" />
          <div className="profile__edit-image"></div>
        </div>
        <div className="profile__info">
          <div className="profile__info-group">
            <h1 className="profile__name">{currentUser.name}</h1>
            <img
              src={editButton}
              alt="Icono para editar la información del perfil"
              className="profile__edit-button"
              onClick={() => onOpenPopup(editProfilePopup)}
            />
          </div>
          <p className="profile__description">{currentUser.about}</p>
        </div>
        <div
          className="profile__add-button"
          onClick={() => onOpenPopup(newCardPopup)}
        >
          <img
            src={addIcon}
            alt="Icono para agregar elementos a la galería"
            className="profile__add-button-icon"
          />
        </div>
      </section>

      <ul className="elements">
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            openFull={onOpenPopup}
            onClose={onClosePopup}
            onCardLike={onCardLike}
            onCardDelete={onCardDelete}
          />
        ))}
      </ul>

      {popup && <Popup>{popup.children}</Popup>}
    </main>
  );
}
