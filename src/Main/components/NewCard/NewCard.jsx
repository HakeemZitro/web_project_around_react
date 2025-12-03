import Popup from '../Popup/Popup';

export default function NewCard() {
  return (
    <Popup>
      <form class="popup__form">
        <h2 class="popup__title">Nuevo Lugar</h2>
        <label class="popup__field">
          <input type="text" placeholder="Título" id="title-input" class="popup__input popup__input_type_name" minlength="2" maxlength="30" required />
          <span class="popup__error title-input-error"></span>
        </label>
        <label class="popup__field">
          <input type="url" placeholder="Enlace a la imagen" id="link-input" class="popup__input popup__input_type_description" required />
          <span class="popup__error link-input-error"></span>
        </label>
        <button type="submit" class="popup__button">Crear</button>
        <img src="./images/Close_Icon.svg" alt="Icono para cerrar la ventana emergente" class="popup__close-button" />
      </form>
    </Popup>
  );
}