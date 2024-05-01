'use client'

import Image from "next/image";
import arrow from "../../icons/ArrowRight-icon.svg";
import arrowHover from "../../icons/arrow-hover.svg";

interface Props {
  handleButtonHover: () => void,
  handleButtonLeave: () => void,
  className: string,
}



export const ButtonCollection: React.FC<Props> = ({
  handleButtonHover,
  handleButtonLeave,
  className,
}) => {
  return (
    <button
            className={className}
            onMouseEnter={handleButtonHover}
            onMouseLeave={handleButtonLeave}>
            WHOLE COLLECTION
            <span className="section-top__arrow-icon-container">
              <Image
                src={arrow}
                width={35}
                height={15}
                alt="arrow"
                className="section-top__arrow-icon-image"
              />
              <Image
                src={arrowHover}
                width={35}
                height={15}
                alt="arrow-hover"
                className="section-top__arrow-hover-icon-image"
              />
            </span>
          </button>
  );
}
