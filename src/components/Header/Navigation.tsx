import Image from "next/image";
import logo from "../../../public/icons/logo.svg";

const Navigation = () => (
    <nav className="navigation">
      <Image
        src={logo}
        width={100}
        height={60}
        alt="Logo"
        className="navigation__logo"
        style={{ width: "60px", height: "100%" }}
      />
      <ul className="navigation__list">
        <li className="navigation__item navigation__item--first">
          FOR UKRAINIANS
        </li>
        <li className="navigation__item">CATALOG</li>
        <li className="navigation__item">BUY</li>
        <li className="navigation__item">SELL</li>
        <li className="navigation__item">BLOG</li>
        <li className="navigation__item">ABOUT</li>
        <li className="navigation__item">SERVICES</li>
        <li className="navigation__item">CONTACT</li>
        <li className="navigation__item">
          <select className="navigation__item--language">
            <option value="en">ENG</option>
            <option value="uk">UKR</option>
          </select>
        </li>
      </ul>
    </nav>
  );

  export default Navigation;
