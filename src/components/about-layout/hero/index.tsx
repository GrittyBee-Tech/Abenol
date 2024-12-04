import React from 'react';
import about from '/src/assets/images/about.png';

const Hero = () => {
  return (
    <section className="lg:px-40 px-8 lg:py-16 py-8">
      <div className="grid lg:grid-flow-col gap-3 justify-between">
        <div className="lg:pt-14">
          <p className="text-[#000100] w-7/12 font-bold font-Inter  text-3xl lg:text-5xl">
            Empowering Young Nigerians to Drive Positive Change
          </p>
        </div>
        <div>
          <img className="rounded-3xl" src={about} alt="about" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
