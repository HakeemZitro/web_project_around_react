import closeIcon from '../../../assets/Close_Icon.svg';
import Popup from '../Popup/Popup';

export default function RemoveCard(props) {
  const { onClose, title, card, onCardDelete } = props;

  function handleSubmit(evt) {
    evt.preventDefault();
    onCardDelete(card);
    onClose();
  }

  return (
    <Popup>
      <form className="popup__form" noValidate onSubmit={handleSubmit}>
        <h2 className="popup__title">{title}</h2>
        <button type="submit" className="popup__button">Si</button>
        <img src={closeIcon} alt="Icono para cerrar la ventana emergente" className="popup__close-button" onClick={onClose} />
      </form>
    </Popup>
  );
}