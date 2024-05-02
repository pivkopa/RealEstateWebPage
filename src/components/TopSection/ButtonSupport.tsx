'use client'

import Image from "next/image";
import trident from "../../../public/icons/icon-trident.svg";
import tridentWhite from "../../../public/icons/icon-trident-white.svg";

interface Props {
  handleButtonHover: () => void,
  handleButtonLeave: () => void,
}

export const ButtonSupport: React.FC<Props> = ({
  handleButtonHover,
  handleButtonLeave,
}) => (
    <button
      className="section-top__button-support"
      onMouseEnter={handleButtonHover}
      onMouseLeave={handleButtonLeave}
    >
      <Image
        className="section-top__button-support__icon-white"
        src={tridentWhite}
        width={20}
        height={71}
        alt="trident"
      />
      <span className="section-top__button-support__text">
        SUPPORT UKRAINE
      </span>
      <Image
        className="section-top__button-support__icon"
        src={trident}
        width={20}
        height={71}
        alt="trident"
      />
    </button>
  );
