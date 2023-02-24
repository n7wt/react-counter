import Menu from "./Menu";
import Logo from "./Logo.jsx";

function Header() {
  return (
    <>
      <header className="header">
        <Logo />
        <Menu />
      </header>
    </>
  );
}

export default Header;
