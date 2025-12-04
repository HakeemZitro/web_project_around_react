import Popup from '../Popup/Popup';

export default function EditAvatar(props) {
  const { onClose, title } = props;

  return (
    <Popup>
      <form className="popup__form">
        <h2 className="popup__title">{title}</h2>
        <label className="popup__field">
          <input type="url" placeholder="Enlace a la imagen" id="profile-picture-input" className="popup__input popup__input_type_description" required />
          <span className="popup__error profile-picture-input-error"></span>
        </label>
        <button type="submit" className="popup__button">Guardar</button>
        <img src="../../../assets/Close_Icon.svg" alt="Icono para cerrar la ventana emergente" className="popup__close-button" onClick={onClose} />
      </form>
    </Popup>
  );
}