import React from 'react';
import image from '/src/assets/images/project2.png';
import Navbar from '../components/generic-layouts/navbar';
import image5 from '/src/assets/images/facebook2.png';
import image1 from '/src/assets/images/tiktok2.png';
import image2 from '/src/assets/images/instagram2.png';
import image3 from '/src/assets/images/twitter2.png';
import image4 from '/src/assets/images/youtube2.png';

const Belleful = () => {
  return (
    <section>
      <Navbar />
      <div className="lg:px-40 lg:py-16 py-8 px-8 bg-[#99FF99]">
        <div className="grid lg:grid-flow-col lg:gap-16 gap-4">
          <div className="">
            <img src={image} alt="" />
          </div>
          <div className="bg-white  lg:p-14 p-4 rounded-3xl grid gap-4">
            <p className="font-bold text-[#141414] font-Inter text-sm">
              BELLEFUL NAIJA
            </p>
            <p className="font-bold text-[#141414] font-Inter text-xl">
              Project Overview
            </p>
            <p className="font-Inter text-sm">
              Belleful Naija is an initiative dedicated to providing help to
              people in need, and highlighting the resilience and spirit of the
              Nigerian people. Launched on January 15th, 2017, the project has
              undertaken numerous community outreach programs across Nigeria.
            </p>
            <div className="grid gap-3">
              {' '}
              <p className="font-bold text-[#141414] font-Inter text-sm">
                Key Achievements
              </p>
              <ul>
                <li className="font-Inter text-sm">
                  Conducted food interventions, clothing outreaches, and medical
                  missions in underserved communities across Northern and
                  Southern Nigeria.
                </li>
                <li>
                  {' '}
                  Provided relief materials to vulnerable populations, including
                  leper colonies, orphanages, and internally displaced persons
                  (IDPs) during the COVID-19 pandemic.
                </li>
                <li>
                  Successfully showcased the beauty, culture, and resilience of
                  the Nigerian people through various initiatives.
                </li>
              </ul>
            </div>
            <div className="grid gap-3">
              <p className="font-bold text-[#141414] font-Inter text-sm">
                UNIQUE VALUE PROPOSITION
              </p>
              <p className="font-Inter text-sm">
                Belleful Naija focuses on direct community engagement and
                provides tangible support to those in need. By highlighting acts
                and the impact of kindness, the project aims to inspire hope and
                foster a sense of community.
              </p>
            </div>
            <div className="grid gap-">
              <p className="font-bold text-[#141414] font-Inter text-sm">
                BELLEFUL PROJECT GOALS:
              </p>
              <ul className="grid gap-2">
                <li className="font-Inter text-sm">
                  Provide direct assistance to vulnerable populations.
                </li>
                <li className="font-Inter text-sm">
                  Promote volunteerism and community service among young people.
                </li>
                <li className="font-Inter text-sm">
                  Showcase the positive aspects of Nigerian society.
                </li>
              </ul>
            </div>
            <div className="grid gap-3">
              <p className="font-bold text-[#141414] font-Inter text-sm">
                NEXT STEPS:
              </p>
              <ul className="grid gap-2">
                <li className="font-Inter text-sm">
                  Expand the scope of our community outreach programs.
                </li>
                <li className="font-Inter text-sm">
                  Develop sustainable partnerships with local organizations.
                </li>
                <li className="font-Inter text-sm">
                  Explore innovative ways to engage and mobilize volunteers.
                </li>
              </ul>
            </div>
            <div className="grid grid-flow-col w-max items-center gap-3">
              <p className="font-bold text-[#141414] font-Inter text-sm">
                Follow us to learn more
              </p>
              <a href="https://www.tiktok.com/@abenolng">
                <img src={image1} alt="tiktok" />
              </a>
              <a href="https://x.com/Abenolng">
                <img src={image3} alt="x" />
              </a>
              <a href="https://www.instagram.com/abenolng/">
                <img src={image2} alt="instagram" />
              </a>
              <a href="https://www.youtube.com/@abenolng">
                <img src={image4} alt="youtube" />
              </a>
              <a href="https://www.facebook.com/abenolng">
                <img className="w-7 h-7" src={image5} alt="facebook" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Belleful;
