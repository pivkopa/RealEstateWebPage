'use client'

import Image from "next/image";
import topImage from "../../images/img-top.png";
import topImageMobile from "../../images/img-top-mobile.png";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ButtonSupport } from "./ButtonSupport";
import { ButtonCollection } from "./ButtonCollection";

const CUSTOR_CURSOR_START_OFFSET = -95;
const CUSTOR_CURSOR_POSITION_OFFSET = 70;



export default function TopSection() {
  const cursorRef = useRef<HTMLDivElement>(null);

  const moveCursor = (e: MouseEvent): void => {
    gsap.to(cursorRef.current, {
      x: e.clientX - CUSTOR_CURSOR_POSITION_OFFSET,
      y: e.clientY,
      duration: 0.3,
    });
  }

  const handleButtonHover = () => {
    if (cursorRef.current) {
      gsap.to(cursorRef.current, {
        opacity: 0,
        duration: 0.1,
      });
    }
  };

  const handleButtonLeave = () => {
    if (cursorRef.current) {
      gsap.to(cursorRef.current, {
        opacity: 1,
        duration: 0.1,
      });
    }
  };

  useEffect(() => {
    gsap.set(cursorRef.current, {
      xPercent: CUSTOR_CURSOR_START_OFFSET,
      yPercent: CUSTOR_CURSOR_START_OFFSET,
    })

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <section className="section-top"
      onMouseEnter={handleButtonLeave}
      onMouseLeave={handleButtonHover}>
      <div className="container">
        <div
          ref={cursorRef}
          className='section-top__cursor'
        >
          EXPLORE
        </div>


        <h1 className="section-top__title section-top__title--first">
          <span className="section-top__title__first--transarent">
            RENT
          </span>
          / BUY
        </h1>

        <div className="section-top__title-container">
          <div className="section-top__button-support-border">
            <ButtonSupport 
              handleButtonHover={handleButtonHover}
              handleButtonLeave={handleButtonLeave} 
            />
          </div>
          <h1
            className="section-top__title section-top__title--second">
            REAL ESTATE
          </h1>
        </div>
        <div className="section-top__title-container">
          <h1
            className="section-top__title section-top__title--third">
            WITH SVOY
          </h1>
          <ButtonCollection
            handleButtonHover={handleButtonHover}
            handleButtonLeave={handleButtonLeave}
            className={'section-top__button--collection'} 
          />
        </div>

        <p className="section-top__subtitle">REAL ESTATE AGENCY</p>

        <ButtonCollection
            handleButtonHover={handleButtonHover}
            handleButtonLeave={handleButtonLeave}
            className={'section-top__button--collection-mobile'} 
          />
        <div className="section-top__image--container">
          <Image
            src={topImage}
            alt="Real Estate Image"
            className="section-top__image"
            width={1200}
            height={140}
          />
          <Image
            src={topImageMobile}
            width={358}
            height={208}
            alt="Real Estate Image"
            className="section-top__image--mobile"
          />
        </div>
      </div>
    </section>
  );
}
