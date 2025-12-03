import Popup from '../Popup/Popup';

export default function NewCard(props) {
  const { onClose, title } = props;

  return (
    <Popup>
      <form className="popup__form">
        <h2 className="popup__title">{title}</h2>
        <label className="popup__field">
          <input type="text" placeholder="Título" id="title-input" className="popup__input popup__input_type_name" minLength="2" maxLength="30" required />
          <span className="popup__error title-input-error"></span>
        </label>
        <label className="popup__field">
          <input type="url" placeholder="Enlace a la imagen" id="link-input" className="popup__input popup__input_type_description" required />
          <span className="popup__error link-input-error"></span>
        </label>
        <button type="submit" className="popup__button">Crear</button>
        <img src="./images/Close_Icon.svg" alt="Icono para cerrar la ventana emergente" className="popup__close-button" onClick={onClose} />
      </form>
    </Popup>
  );
}