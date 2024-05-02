import Image from "next/image";
import logo from "../../../public/icons/logo.svg";
import phone from "../../../public/icons/Call-icon.svg";
import close from "../../../public/icons/icon-menu-close.svg";
import MobileNav from "./MobileNav";

const Menu =() => (
    <>
      <div className="menu__container" id="menu">
        <header className="header">
          <div className="header-mobile">
            <a href="#" className="header-mobile__icon-link">
              <Image
                src={phone}
                width={17}
                height={17}
                alt="Phone"
                className="mobile-phone"
              />
            </a>

            <a href="#" className="header-mobile__logo_link">
              <Image
                src={logo}
                width={57}
                height={29}
                alt="Logo"
                className="mobile-logo"
              />
            </a>

            <a href="#" className="header-mobile__icon-link">
              <Image
                src={close}
                width={50}
                height={50}
                alt="Menu"
                className="mobile-burger-menu"
              />
            </a>
          </div>
        </header>

        <div className="menu">
          <MobileNav />

          <div className="menu__languages">
            <a className="menu__lang menu__lang--selected" href="#">ENG</a>
            <a className="menu__lang" href="#">RU</a>
            <a className="menu__lang" href="#">UA</a>
          </div>
        </div>
      </div>
    </>
  );

  export default Menu;
