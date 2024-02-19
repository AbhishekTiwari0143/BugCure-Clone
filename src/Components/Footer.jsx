import youtube from "../assets/youtube.svg";
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";
import { Link } from "react-router-dom";

const Footer = () => (
  <>
    <footer className="footer linearGradientOrange">
      <div className="container m-auto py-2 flex justify-between items-center flex-col px-12 sm:flex-row">
        <ul className="footer-links flex flex-col items-center gap-2 md:gap-6 sm:flex-row">
          <li>
            <Link className="text-base font-bold text-white" to="/blogs">
              Blog
            </Link>
          </li>
          <li>
            <Link className="text-base font-bold text-white" to="/terms">
              Terms & Policies
            </Link>
          </li>
          <li>
            <Link className="text-base font-bold text-white" to="/status">
              System Status
            </Link>
          </li>
        </ul>
        <ul className="footer-links flex justify-center items-center gap-6 py-4">
          <li className="p-2 bg-[#ffffff4d] hover:bg-[#ffffff63] rounded-full">
            <a href="#">
              <img src={youtube} alt="youtube" className="w-5" />
            </a>
          </li>
          <li className="p-2 bg-[#ffffff4d] hover:bg-[#ffffff4f] rounded-full">
            <a href="#">
              <img src={twitter} alt="twitter" className="w-5" />
            </a>
          </li>
          <li className="p-2 bg-[#ffffff4d] hover:bg-[#ffffff63] rounded-full">
            <a href="#">
              <img src={instagram} alt="instagram" className="w-5" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  </>
);

export default Footer;
