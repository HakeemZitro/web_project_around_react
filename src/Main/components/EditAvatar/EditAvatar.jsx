import Popup from '../Popup/Popup';

export default function EditAvatar(props) {
  const { onClose, title } = props;

  return (
    <Popup>
      <form class="popup__form">
        <h2 class="popup__title">{title}</h2>
        <label class="popup__field">
          <input type="url" placeholder="Enlace a la imagen" id="profile-picture-input" class="popup__input popup__input_type_description" required />
          <span class="popup__error profile-picture-input-error"></span>
        </label>
        <button type="submit" class="popup__button">Guardar</button>
        <img src="./images/Close_Icon.svg" alt="Icono para cerrar la ventana emergente" class="popup__close-button" onClick={onClose} />
      </form>
    </Popup>
  );
}