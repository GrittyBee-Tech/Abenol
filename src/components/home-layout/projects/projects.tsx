import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PROJECTS_SCHEMA } from '../../../constants/home-layout/projects';

const Projects = () => {
  const navigate = useNavigate();
  return (
    <section className="md:px-40 px-8 lg:py-24 py-8">
      <p className="grid justify-items-center text-[#000100] font-Inter font-bold text-2xl md:text-6xl">
        Our Projects
      </p>
      <div className="grid lg:grid-cols-2 mt-9 lg:gap-11 gap-24">
        {PROJECTS_SCHEMA.map((r, i) => {
          return (
            <div key={i} className="relative ">
              <div className="h-[642px]">
                <span>
                  <img
                    src={r.image}
                    className="rounded-2xl h-auto"
                    alt="Project"
                  />
                </span>
              </div>
              <div className=" grid lg:mt-24 justify-items-center">
                <div className="bg-[#F0FFF0] hover:bg-[#090e02] text-[#141414]  hover:text-white grid gap-3 shadow-md rounded-2xl lg:p-5 p-3 absolute  w-[90%] lg:bottom-2 -bottom-14">
                  <p className="font-bold font-Inter lg:h-3 text-sm lg:text-xl">
                    {r.header}
                  </p>
                  <p className="lg:text-base text-xs font-Inter lg:h-24 mt-2 lg:mt-5 ">
                    {r.content}
                  </p>
                  <a
                    href={r.link}
                    className="  w-40   lg:mt-7 text-sm bg-[#99FF99] hover:text-white hover:bg-[#F8931F] font-semibold font-Inter rounded-3xl py-3 px-7 text-[#000100]"
                  >
                    {r.slug}
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
