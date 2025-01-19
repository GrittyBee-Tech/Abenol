import React from 'react';
import image from '/src/assets/images/facebook.png';
import image1 from '/src/assets/images/tiktok.png';
import image2 from '/src/assets/images/instagram.png';
import image3 from '/src/assets/images/twitter.png';
import image4 from '/src/assets/images/youtube.png';

const Footer = () => {
  return (
    <section className=" grid lg:px-10   lg:py-5 ">
      <div className="bg-[#141414] px-7 py-4 lg:rounded-3xl">
        <div className="lg:justify-normal mx-auto justify-items-center">
          <div className="grid lg:grid-flow-col items-center justify-between">
            <div className="grid grid-flow-col items-center gap-5">
              <a
                href="https://www.tiktok.com/@abenolng"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={image1} alt="tiktok" />
              </a>
              <a
                href="https://x.com/Abenolng"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={image3} alt="x" />
              </a>
              <a
                href="https://www.instagram.com/abenolng/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={image2} alt="instagram" />
              </a>
              <a
                href="https://www.youtube.com/@abenolng"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={image4} alt="youtube" />
              </a>
              <a
                href="https://www.facebook.com/abenolng"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={image} alt="facebook" />
              </a>
            </div>
            <div className="grid lg:justify-normal justify-center grid-flow-col gap-3">
              <p className="text-[#FFFFFF80] font-Inter text-sm ">
                Terms of Service
              </p>
              <p className="text-[#FFFFFF80] font-Inter text-sm ">
                Privacy policy
              </p>
            </div>
            <div className="grid lg:justify-normal justify-center lg:text-left text-center  lg:grid-flow-col gap-2 lg:gap-3">
              <p className="text-[#FFFFFF80] font-Inter text-xs ">
                © 2024 ABENOL Foundation
              </p>
              <p className="text-[#FFFFFF80] font-Inter text-xs ">
                All Right Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
