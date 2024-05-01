import Image from "next/image";
import logo from "../../icons/logo.svg";
import burger from "../../icons/burger-menu.svg";
import phone from "../../icons/Call-icon.svg";
import { useEffect, useState } from "react";
import cn from "classnames";



export default function Header() {
  const [isHiden, setIsHidden] = useState(false);

  useEffect(() => {
    let prevScrollPos = window.scrollY;
  
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsHidden(prevScrollPos < currentScrollPos);
      prevScrollPos = currentScrollPos;
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
      <header className={cn("header", {
        'is-hidden': isHiden,
      })}>
        <div className="header-mobile">
          <a href="#" className="header-mobile__icon-link">
            <Image
              src={phone}
              width={17}
              height={17}
              alt="Phone"
            />
          </a>
          <a href="#" className="header-mobile__logo_link">
            <Image
              src={logo}
              width={57}
              height={29}
              alt="Logo"
              className="mobile__logo"
            />
          </a>
          <a href="#menu" className="header-mobile__icon-link">
            <Image
              src={burger}
              width={17}
              height={17}
              alt="Menu"
              className="mobile__burger-menu"
            />
          </a>
        </div>
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
            <li className="navigation__item--first">FOR UKRAINIANS</li>
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
      </header>
  );
}
