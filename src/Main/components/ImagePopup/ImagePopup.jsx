import Popup from '../Popup/Popup';

export default function ImagePopup(props) {
  const { onClose, name, link } = props;

  return (
    <Popup>
      <div className="popup__image-container">
        <img src="" alt="" className="popup__image" />
        <h2 className="popup__image-title"></h2>
        <img src="./images/Close_Icon.svg" alt="Icono para cerrar la ventana emergente" className="popup__close-button popup__close-button_image" onClick={onClose} />
      </div>
    </Popup>
  );
}