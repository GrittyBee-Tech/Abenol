import React from 'react';

const About = () => {
  return (
    <section className="bg-[#023002] -mt-32">
      <div className="lg:px-40  px-8 lg:py-16 py-8">
        <div className="grid lg:grid-flow-col  pt-44 justify-between lg:gap-52">
          <p className="grid lg:justify-start justify-items-center font-semibold font-Inter text-lg text-white">
            About Us
          </p>
          <p className="lg:text-5xl text-2xl text-center lg:text-left font-semibold font-Inter  text-white">
            ABENOL, short for "A Better Nation in Our Lifetime," encapsulates
            our belief that young people are the key to building a better
            future, and we are committed to providing them with the resources
            and support they need to succeed.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
