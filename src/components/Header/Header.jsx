import logo from '../../assets/Logo.svg';

export default function Header() {
  return (
    <header className="header">
      <img
        src={logo}
        alt="Logotipo de aplicación Around the U.S."
        className="header__logo"
      />
    </header>
  );
}