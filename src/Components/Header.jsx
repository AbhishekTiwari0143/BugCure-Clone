import "./Header.css";

import logo from "../assets/logo.png";
import ButtonSchedule from "../utilities/ButtonSchedule";

const Header = () => {
  return (
    <div className="montserrat">
      <div className="linearGradientOrange md:pr-12">
        <div className="header flex justify-between w-[100%] py-[1em] md:p-8 md:pt-6">
          <img
            src={logo}
            alt="logo"
            className="object-contain w-[100px] h-[60px]  md:w-[200px] md:h-[60px] "
          />

          <ButtonSchedule />
        </div>
      </div>
    </div>
  );
};

export default Header;
