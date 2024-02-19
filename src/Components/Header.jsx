import "./Header.css";

import logo from "../assets/logo.png";
import ButtonSchedule from "../utilities/ButtonSchedule";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header linearGradientOrange">
      <div className=" montserrat max-w-[1320px] m-auto p-4 flex justify-between w-[100%] py-[1em] md:p-8 md:pt-6">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="object-contain w-[100px] h-[60px]  md:w-[200px] md:h-[60px] "
          />
        </Link>

        <ButtonSchedule />
      </div>
    </header>
  );
};

export default Header;
