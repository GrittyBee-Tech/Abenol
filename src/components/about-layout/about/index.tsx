import React from 'react';

const WhoWeAre = () => {
  return (
    <section className="lg:px-40 px-8 lg:py-16 py-8">
      <div className="grid justify-items-center ">
        <p className=" w-96  font-inter font-bold text-center lg:text-5xl">
          This is who we are
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-8 mt-8">
        <div className="bg-[#99FF99] hover:bg-[#351c04] hover:text-white text-[#023002] rounded-3xl p-10 grid gap-4  ">
          <p className="grid justify-items-center pt-4  font-bold font-Inter text-xl">
            OUR MISSION
          </p>
          <p className="text-center  font-normal font-Inter">
            To empower young Nigerians through education, advocacy, and
            community engagement. We strive to foster a generation of informed,
            active, and socially responsible citizens capable of driving
            positive change in their communities and the nation.
          </p>
        </div>
        <div className="bg-[#023002] hover:bg-[#351c04] text-white rounded-3xl p-10 grid gap-4  ">
          <p className="grid justify-items-center pt-4  font-bold font-Inter text-xl">
            OUR VISION
          </p>
          <p className="text-center font-normal font-Inter">
            ABENOL Foundation envisions a Nigeria where young people are
            empowered to fully participate in the democratic process, contribute
            to sustainable development, and realize their full potential. We
            aspire to create a society that values youth engagement, innovation,
            and social justice.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
