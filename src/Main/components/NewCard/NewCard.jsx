import closeIcon from '../../../assets/Close_Icon.svg';
import Popup from '../Popup/Popup';
import { useContext, useRef } from 'react';

import { CurrentUserContext } from '../../../contexts/CurrentUserContext';

export default function NewCard(props) {
  const { onClose, title } = props;
  const { handleAddCard } = useContext(CurrentUserContext);
  const nameInput = useRef();
  const linkInput = useRef();

  function handleSubmit(evt) {
    evt.preventDefault();
    handleAddCard({ name: nameInput.current.value, link: linkInput.current.value })
  }

  return (
    <Popup>
      <form className="popup__form" noValidate onSubmit={handleSubmit}>
        <h2 className="popup__title">{title}</h2>
        <label className="popup__field">
          <input ref={nameInput} type="text" placeholder="Título" id="title-input" className="popup__input popup__input_type_name" minLength="2" maxLength="30" required />
          <span className="popup__error title-input-error"></span>
        </label>
        <label className="popup__field">
          <input ref={linkInput} type="url" placeholder="Enlace a la imagen" id="link-input" className="popup__input popup__input_type_description" required />
          <span className="popup__error link-input-error"></span>
        </label>
        <button type="submit" className="popup__button">Crear</button>
        <img src={closeIcon} alt="Icono para cerrar la ventana emergente" className="popup__close-button" onClick={onClose} />
      </form>
    </Popup>
  );
}