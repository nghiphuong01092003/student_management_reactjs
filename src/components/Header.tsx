import logo from '../assets/img/logo_hcmute.jpg'
const Header: React.FC = () => {
  return (
    <div id="header">
      <div className="header_container">
        <img
          id="image"
          src={logo}
          alt="HCMUTE LOGO"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}
export default Header;