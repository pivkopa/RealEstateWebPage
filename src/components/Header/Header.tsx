import Image from "next/image";
import logo from "../../../public/icons/logo.svg";
import burger from "../../../public/icons/burger-menu.svg";
import phone from "../../../public/icons/Call-icon.svg";
import { useEffect, useState } from "react";
import cn from "classnames";
import Navigation from "./Navigation";

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

      <Navigation />
    </header>
  );
}
