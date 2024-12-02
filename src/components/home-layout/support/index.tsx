import React from 'react';
import { SUPPORTS_SCHEMA } from '../../../constants/home-layout/support';

const Support = () => {
  return (
    <section className="lg:px-40 px-8 lg:py-24 py-8">
      <div className="rounded-lg bg-[#99FF99]">
        <div className="grid justify-items-center gap-6">
          <p className="font-bold lg:text-6xl text-2xl lg:w-5/12 text-[#141414] pt-9 text-center">
            Support this wonderful dream
          </p>
          <p className="lg:w-5/12  text-center text-[#141414]">
            Support our mission to empower young Nigerians. Donate now and be a
            part of the change.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-8 p-5">
          {SUPPORTS_SCHEMA.map(() => {
            return (
              <div className="rounded-lg bg-white shadow-md p-8">
                <p>Wema Bank</p>
                <p>Account Name: ABENOL Foundation LTD/GTE</p>
                <p>Account Number(NGN): 0125016610</p>
                <p>Account Number(USD): 0621392779</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Support;
