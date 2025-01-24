import ZoomiesLogo from "../assets/Zoomies.png";

const Header = () => {
  const title = "ZOOMIES";

  return (
    <header className="header">
      <img src={ZoomiesLogo} alt="Zoomies Logo" className="header-logo" />
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
