import Popup from '../Popup/Popup';

export default function NewCard() {
  return (
    <Popup>
      <div class="popup__image-container">
        <img src="" alt="" class="popup__image" />
        <h2 class="popup__image-title"></h2>
        <img src="./images/Close_Icon.svg" alt="Icono para cerrar la ventana emergente" class="popup__close-button popup__close-button_image" />
      </div>
    </Popup>
  );
}