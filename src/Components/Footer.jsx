import youtube from "../assets/youtube.svg";
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";

const Footer = () => (
  <>
    <div className="footer linearGradientOrange py-2 flex justify-between items-center flex-col px-12 md:flex-row">
      <ul className="footer-links flex flex-col items-center gap-2 md:gap-6 md:flex-row">
        <li>
          <a className="text-base font-bold text-white" href="#">
            Blog
          </a>
        </li>
        <li>
          <a className="text-base font-bold text-white" href="#">
            Terms & Policies
          </a>
        </li>
        <li>
          <a className="text-base font-bold text-white" href="#">
            System Status
          </a>
        </li>
      </ul>
      <ul className="footer-links flex justify-center items-center gap-6 py-4 md:mx-40">
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
  </>
);

export default Footer;
