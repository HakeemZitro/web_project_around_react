import Popup from '../Popup/Popup';

export default function EditProfile(props) {
  const { onClose, title } = props;

  return (
    <Popup>
      <form className="popup__form">
        <h2 className="popup__title">{title}</h2>
        <label className="popup__field">
          <input type="text" placeholder="Nombre" id="name-input" className="popup__input popup__input_type_name" minLength="2" maxLength="40" required />
          <span className="popup__error name-input-error"></span>
        </label>
        <label className="popup__field">
          <input type="text" placeholder="Acerca de mí" id="description-input" className="popup__input popup__input_type_description" minLength="2" maxLength="200" required />
          <span className="popup__error description-input-error"></span>
        </label>
        <button type="submit" className="popup__button">Guardar</button>
        <img src="./images/Close_Icon.svg" alt="Icono para cerrar la ventana emergente" className="popup__close-button" onClick={onClose} />
      </form>
    </Popup>
  );
}