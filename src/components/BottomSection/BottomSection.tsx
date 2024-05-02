'use client'

import Image from "next/image";
import bottomImagePool from "../../../public/images/img-bottom-pool.png";
import bottomImageBath from "../../../public/images/img-bottom-bath.png";
import MagneticComponent from "./MagneticComponent";

const BottomSection = () => (
  <section className="section-bottom">
    <div className="container">
      <div
        className="section-bottom__title
          section-bottom__title--first"
      >
        WHAT
      </div>

      <div className="section-bottom__title
          section-bottom__title--second"
      >
        WE OFFER
      </div>
      <p className="section-bottom__text">
        Our architecture encourages co-existence.
        So does our business philosophy.
        We have abolished barriers of hierarchy and departmentalization
        to work as a single team. We believe in full transparency —
        and of course, that entails our clients.
      </p>
      <Image
        src={bottomImagePool}
        width={534}
        height={691}
        alt="Offer Image"
        className="section-bottom__image--pool"
      />

      <Image
        src={bottomImageBath}
        width={212}
        height={131}
        alt="Offer Image"
        className="section-bottom__image--bath"
      />

      <MagneticComponent>
        <button className="section-bottom__learn-button">
          LEARN MORE
        </button>
      </MagneticComponent>
    </div>
  </section >
);

export default BottomSection;
