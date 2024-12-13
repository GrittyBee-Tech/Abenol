import React from 'react';
import about from '/src/assets/images/about.png';
import icon from '/src/assets/images/about-page-icon.png';

const Hero = () => {
  return (
    <section className="relative lg:px-40 px-8 lg:py-16 py-8">
      <div className="grid lg:grid-flow-col gap-3 justify-between">
        <div className="lg:pt-14">
          <span>
            <img className="rounded-3xl" src={icon} alt="about" />
          </span>
          <p className="text-[#000100] w-7/12 font-bold font-Inter  text-3xl lg:text-5xl">
            Empowering Young Nigerians to Drive Positive Change
          </p>
        </div>
        <div className="relative">
          <div>
            <img className="rounded-3xl" src={about} alt="about" />
          </div>
          <span className=" lg:block hidden absolute -bottom-24">
            <img className="rounded-3xl" src={icon} alt="about" />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
