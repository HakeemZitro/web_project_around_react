import Popup from '../Popup/Popup';

export default function NewCard() {
  return (
    <Popup>
      <form class="popup__form">
        <h2 class="popup__title">¿Estás seguro?</h2>
        <button type="submit" class="popup__button">Si</button>
        <img src="./images/Close_Icon.svg" alt="Icono para cerrar la ventana emergente" class="popup__close-button" />
      </form>
    </Popup>
  );
}