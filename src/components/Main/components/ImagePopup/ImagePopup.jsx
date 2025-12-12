import closeIcon from '../../../../assets/Close_Icon.svg';
import Popup from '../Popup/Popup';

export default function ImagePopup(props) {
  const { onClose } = props;
  const { name, link } = props.card;

  return (
    <Popup>
      <div className="popup__image-container">
        <img src={link} alt={`Fotografía de ${name}`} className="popup__image" />
        <h2 className="popup__image-title">{name}</h2>
        <img src={closeIcon} alt="Icono para cerrar la ventana emergente" className="popup__close-button popup__close-button_image" onClick={onClose} />
      </div>
    </Popup>
  );
}