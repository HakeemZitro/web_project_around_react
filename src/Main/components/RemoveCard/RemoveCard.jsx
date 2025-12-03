import Popup from '../Popup/Popup';

export default function RemoveCard(props) {
  const { onClose, title } = props;

  return (
    <Popup>
      <form class="popup__form">
        <h2 class="popup__title">{title}</h2>
        <button type="submit" class="popup__button">Si</button>
        <img src="./images/Close_Icon.svg" alt="Icono para cerrar la ventana emergente" class="popup__close-button" onClick={onClose} />
      </form>
    </Popup>
  );
}