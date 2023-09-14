import facebook from "../../assets/nav/Fa-brands_facebook-square.svg";
import instagram from "../../assets/nav/Fa-brands_instagram.svg";
import twitter from "../../assets/nav/Fa-brands_twitter.svg";
import youtube from "../../assets/nav/Fa-brands_youtube.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="flex flex-col items-center justify-center mt-40 mb-24">
      <div className="footer-icons flex space-x-12 cursor-pointer">
        <img src={facebook} alt="footer-logo-facebook" />
        <img src={instagram} alt="footer-logo-instagram" />
        <img src={twitter} alt="footer-logo-twitter" />
        <img src={youtube} alt="footer-logo-youtube" />
      </div>

      <div className="t-c flex space-x-12 my-6 cursor-pointer">
        <button
          disabled="disabled"
          className="capitalize text-gray-900 font-semi-bold"
        >
          conditions of use
        </button>
        <button
          disabled="disabled"
          className="capitalize text-gray-900 font-semi-bold"
        >
          privacy and policy
        </button>
        <button
          disabled="disabled"
          className="capitalize text-gray-900 font-semi-bold"
        >
          press room
        </button>
      </div>

      <div className="creator text-gray-500 tracking-wider">
        &copy;{currentYear} pablo for HNGx
      </div>
    </div>
  );
};

export default Footer;
