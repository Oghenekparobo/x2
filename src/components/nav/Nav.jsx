import menuLogo from "../../assets/nav/Menu.svg";
import SearchInput from "../searchInput/SearchInput";
import Logo from "../sub-components/Logo";

const Nav = () => {
  return (
    <nav className="absolute w-full my-4 flex flex-col justify-between items-center px-10 z-10 md:flex-row">
      <div className="nav-logo__text cursor-pointer">
        <Logo />
      </div>

      <SearchInput />

      <div className="nav-sign-in flex items-center space-x-4">
        <button disabled="disabled" className="text-white text-xl font-bold">
          Sign in
        </button>
        <img src={menuLogo} alt="navSearchLogo" className="ml-auto" />
      </div>
    </nav>
  );
};

export default Nav;
