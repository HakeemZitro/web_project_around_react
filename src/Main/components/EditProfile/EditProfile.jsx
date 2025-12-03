import Popup from '../Popup/Popup';

export default function NewCard() {
  return (
    <Popup>
      <form class="popup__form">
        <h2 class="popup__title">Editar Perfil</h2>
        <label class="popup__field">
          <input type="text" placeholder="Nombre" id="name-input" class="popup__input popup__input_type_name" minlength="2" maxlength="40" required />
          <span class="popup__error name-input-error"></span>
        </label>
        <label class="popup__field">
          <input type="text" placeholder="Acerca de mí" id="description-input" class="popup__input popup__input_type_description" minlength="2" maxlength="200" required />
          <span class="popup__error description-input-error"></span>
        </label>
        <button type="submit" class="popup__button">Guardar</button>
        <img src="./images/Close_Icon.svg" alt="Icono para cerrar la ventana emergente" class="popup__close-button" />
      </form>
    </Popup>
  );
}