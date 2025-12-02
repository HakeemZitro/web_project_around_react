export default function Main() {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__image-box">
          <img src="" alt="" className="profile__image" />
          <div className="profile__edit-image"></div>
        </div>
        <div className="profile__info">
          <div className="profile__info-group">
            <h1 className="profile__name">Hakeem Ortiz</h1>
            <img
              src="./images/Edit_Button.svg"
              alt="Icono para editar la información del perfil"
              className="profile__edit-button"
            />
          </div>
          <p className="profile__description">Aspirante a Desarrollador Web</p>
        </div>
        <div className="profile__add-button">
          <img
            src="./images/Add_Icon.svg"
            alt="Icono para agregar elementos a la galería"
            className="profile__add-button-icon"
          />
        </div>
      </section>
      
      <section className="elements"></section>
    </main>
  );
}