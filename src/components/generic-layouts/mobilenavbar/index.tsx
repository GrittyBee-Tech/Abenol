import { useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { NAV_SCHEMA } from '../../../constants/home-layout/nav';
import { Icon } from '../../ui/icons';
import { ICONS } from '../../ui/icons/types';
import React from 'react';

const MobileNavbar = ({
  navOpen,
  setNavOpen,
}: {
  navOpen: Boolean;
  setNavOpen: (val: Boolean) => void;
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setNavOpen(false);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <section
      className={`absolute top-0 left-0 w-full h-full bg-white z-50 transition-transform ${
        navOpen ? 'transform translate-x-0' : 'transform translate-x-full'
      }`}
    >
      <div className="p-6 z-50">
        {/* Close Button */}
        <button
          onClick={() => setNavOpen(false)}
          className="absolute font-Inter text-[#099900] top-4 right-4 text-xl font-bold"
        >
          X
        </button>

        {/* Mobile Navbar Content */}
        <div className="flex flex-col items-center gap-6">
          <ul className="flex flex-col items-center gap-6">
            {NAV_SCHEMA.map(({ link, name }) => (
              <li key={link}>
                <NavLink
                  to={link}
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? 'border-b-4 text-[#39af39] border-[#2b7d2b] font-medium'
                        : ''
                    } py-2 text-[#000000] font-Inter cursor-pointer`
                  }
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>

          <button
            onClick={() => navigate('/donate')}
            className="bg-[#99FF99] hover:text-white hover:bg-[#F8931F] font-medium font-Inter rounded-3xl py-3 px-7 text-black"
          >
            Donate
          </button>
        </div>
      </div>
    </section>
  );
};

export default MobileNavbar;
