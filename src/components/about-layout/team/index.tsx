import React from 'react';
import { TEAM_SCHEMA } from '../../../constants/about-layout/team';

const Team = () => {
  return (
    <section className="bg-[#000100]">
      <div className="lg:px-40 px-8 py-16">
        <div className="grid justify-items-center pt-8">
          <p className="text-white font-bold font-Inter text-3xl lg:text-5xl">
            Meet the team
          </p>
          <p className="text-white font-semibold text-center mt-4 w-6/12 font-Inter ">
            We are a team of young vibrant volunteers, using our skills,
            experience and passion to make an impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 mt-9 gap-6">
          {TEAM_SCHEMA.map((r, i) => {
            return (
              <div key={i}>
                <img className="rounded-2xl h-96" src={r.image} alt="team" />
                <div className="grid gap-1 mt-2 justify-items-center">
                  <p className="text-white font-bold font-Inter">{r.header}</p>
                  <p className="text-white w-2/3 text-center text-sm font-inter">
                    {r.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
