import React from 'react';
import icon from '/src/assets/brand/clam.png';
import icon3 from '/src/assets/brand/ford.png';
import icon4 from '/src/assets/brand/fund.png';
import icon5 from '/src/assets/brand/leap.png';
import icon6 from '/src/assets/brand/serap.png';
import icon7 from '/src/assets/brand/udge.png';
import icon8 from '/src/assets/brand/weVote.png';
import icon9 from '/src/assets/brand/wilson.png';
import icon10 from '/src/assets/brand/celebration.png';
import icon11 from '/src/assets/brand/undp.png';
import icon12 from '/src/assets/brand/yiaga.png';

const AbenolPartners = () => {
  return (
    <section className=" lg:py-16 py-16 ">
      <div className=" grid justify-items-center gap-2">
        <p className=" grid  px-4  border-l-4  border-l-[#0C7CBC] text-[#000100] font-Inter font-bold text-2xl md:text-6xl">
          Our Partners
        </p>
      </div>
      <div className="slider-container lg:block hidden grid-flow-col gap-28">
        <div className=" slider grid grid-flow-col gap-10 pt-10 ">
          <img src={icon} alt="partner" />
          <img src={icon3} alt="partner" />
          <img src={icon4} alt="partner" />
          <img src={icon5} alt="partner" />
          <img src={icon6} alt="partner" />
          <img src={icon7} alt="partner" />
          <img src={icon8} alt="partner" />
          <img src={icon9} alt="partner" />
          <img src={icon10} alt="partner" />
          <img src={icon11} alt="partner" />
          <img src={icon12} alt="partner" />
          <img src={icon} alt="partner" />
          <img src={icon3} alt="partner" />
          <img src={icon4} alt="partner" />
          <img src={icon5} alt="partner" />
          <img src={icon6} alt="partner" />
          <img src={icon7} alt="partner" />
        </div>
      </div>
      <div className="slider-container lg:hidden grid grid-flow-col gap-28">
        <div className=" slider grid grid-flow-col gap-7 pt-7 justify-between">
          <img src={icon} alt="partner" />
          <img src={icon3} alt="partner" />
          <img src={icon4} alt="partner" />
          <img src={icon5} alt="partner" />
          <img src={icon6} alt="partner" />
          <img src={icon7} alt="partner" />
          <img src={icon8} alt="partner" />
          <img src={icon9} alt="partner" />
          <img src={icon10} alt="partner" />
          <img src={icon11} alt="partner" />
          <img src={icon12} alt="partner" />
        </div>
      </div>
    </section>
  );
};

export default AbenolPartners;
