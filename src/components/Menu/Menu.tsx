import Image from "next/image";
import logo from "../../icons/logo.svg";
import phone from "../../icons/Call-icon.svg";
import close from "../../icons/icon-menu-close.svg";



export default function Menu() {
  return (
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
          <nav className="menu__nav">
            <ul className="menu__nav-list">
              <li className="menu__nav-item">
                <a 
                  className="menu__nav-link" 
                  href="#recomended">
                    for ukrainians
                  </a>
              </li>
              <li className="menu__nav-item">
                <a className="menu__nav-link" href="#categories">Catalog</a>
              </li>
              <li className="menu__nav-item">
                <a className="menu__nav-link" href="#about-us">BUY</a>
              </li>
              <li className="menu__nav-item">
                <a className="menu__nav-link" href="#contact-us">SELL</a>
              </li>
              <li className="menu__nav-item">
                <a className="menu__nav-link" href="#contact-us">BLOG</a>
              </li>
              <li className="menu__nav-item">
                <a className="menu__nav-link" href="#contact-us">SERVICES</a>
              </li>
              <li className="menu__nav-item">
                <a className="menu__nav-link" href="#contact-us">About</a>
              </li>
              <li className="menu__nav-item">
                <a className="menu__nav-link" href="#contact-us">Contact</a>
              </li>
            </ul>
          </nav>

          <div className="menu__languages">
            <a className="menu__lang" href="#">ENG</a>
            <a className="menu__lang" href="#">RU</a>
            <a className="menu__lang" href="#">UA</a>
          </div>
        </div>
      </div>
    </>
  );
}
