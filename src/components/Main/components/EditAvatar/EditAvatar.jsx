import closeIcon from "../../../../assets/Close_Icon.svg";
import Popup from "../Popup/Popup.jsx";
import { useContext, useRef } from "react";

import { CurrentUserContext } from "../../../../contexts/CurrentUserContext.js";

export default function EditAvatar(props) {
  const { onClose, title } = props;
  const avatar = useRef();
  const { handleUpdateAvatar } = useContext(CurrentUserContext);

  function handleSubmit(evt) {
    evt.preventDefault();
    handleUpdateAvatar({ avatar: avatar.current.value });
  }

  return (
    <Popup>
      <form className="popup__form" noValidate onSubmit={handleSubmit}>
        <h2 className="popup__title">{title}</h2>
        <label className="popup__field">
          <input
            ref={avatar}
            type="url"
            placeholder="Enlace a la imagen"
            id="profile-picture-input"
            className="popup__input popup__input_type_description"
            required
          />
          <span className="popup__error profile-picture-input-error"></span>
        </label>
        <button type="submit" className="popup__button">
          Guardar
        </button>
        <img
          src={closeIcon}
          alt="Icono para cerrar la ventana emergente"
          className="popup__close-button"
          onClick={onClose}
        />
      </form>
    </Popup>
  );
}
