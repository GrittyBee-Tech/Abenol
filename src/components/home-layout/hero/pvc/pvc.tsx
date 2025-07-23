import React from 'react';
import image from '/src/assets/images/hero-image.jpg';

const Pvc = () => {
  return (
    <section>
      <span>
        <img
          className="lg:h-[580px] rounded-3xl lg:w-full"
          src={image}
          alt="hero-image"
        />
      </span>
    </section>
  );
};

export default Pvc;
