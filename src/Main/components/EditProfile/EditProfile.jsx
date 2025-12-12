import closeIcon from '../../../assets/Close_Icon.svg';
import Popup from '../Popup/Popup';
import { useContext, useState } from 'react';

import { CurrentUserContext } from '../../../contexts/CurrentUserContext.js';

export default function EditProfile(props) {
  const { onClose, title } = props;
  const { currentUser, handleUpdateUser } = useContext(CurrentUserContext);

  const [name, setName] = useState(currentUser.name);
  const [description, setDescription] = useState(currentUser.about);

  function handleNameChange(evt) {
    setName(evt.target.value);
  }

  function handleDescriptionChange(evt) {
    setDescription(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    handleUpdateUser({ name, about: description });
  }

  return (
    <Popup>
      <form className="popup__form" noValidate onSubmit={handleSubmit}>
        <h2 className="popup__title">{title}</h2>
        <label className="popup__field">
          <input type="text" placeholder="Nombre" id="name-input" className="popup__input popup__input_type_name" value={name} onChange={handleNameChange} minLength="2" maxLength="40" required />
          <span className="popup__error name-input-error"></span>
        </label>
        <label className="popup__field">
          <input type="text" placeholder="Acerca de mí" id="description-input" className="popup__input popup__input_type_description" value={description} onChange={handleDescriptionChange} minLength="2" maxLength="200" required />
          <span className="popup__error description-input-error"></span>
        </label>
        <button type="submit" className="popup__button">Guardar</button>
        <img src={closeIcon} alt="Icono para cerrar la ventana emergente" className="popup__close-button" onClick={onClose} />
      </form>
    </Popup>
  );
}