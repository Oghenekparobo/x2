import { Link } from "react-router-dom";
import navLogo from "../../assets/nav/Logo.svg";

const Logo = () => {
  return (
    <Link to="/">
      <div className="logo">
        <img src={navLogo} alt="nav-logo" />
      </div>
    </Link>
  );
};

export default Logo;
