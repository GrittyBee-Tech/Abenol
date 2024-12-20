import React from 'react';

const Support = () => {
  return (
    <section className="lg:px-40  px-8 ">
      <div className="rounded-2xl pb-24  bg-support-pattern bg-no-repeat  ">
        <div className="grid  justify-items-center gap-6">
          <p className="font-bold font-Inter lg:text-6xl text-2xl  w-9/12 lg:w-6/12 text-[#141414] pt-9 text-center">
            Support this wonderful dream
          </p>
          <p className="lg:w-4/12  w-9/12 font-inter text-center text-[#141414]">
            Support our mission to empower young Nigerians. Donate now and be a
            part of the change.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 lg:mt-8 p-3   lg:gap-3 gap-8 ">
          <div className="rounded-3xl bg-white  p-8 hover:shadow-[#0a120f] shadow-2xl transition-opacity duration-300 ease-in-out opacity-100 z-10">
            <p className="text-[#141414] font-bold text-2xl font-Inter">
              Wema Bank
            </p>
            <p className="font-inter mt-4 font-normal">
              Account Name:{' '}
              <span className="font-bold">ABENOL Foundation LTD/GTE</span>
            </p>
            <p className="font-inter mt-4 font-normal">
              Account Number(NGN): <span className="font-bold">0125016610</span>
            </p>
            <p className="font-inter mt-1 font-normal">
              Account Number(USD): <span className="font-bold">0621392779</span>
            </p>
          </div>
          <div className="rounded-3xl bg-[#80CFF1] z-50 hover:shadow-[#0a120f]   grid gap-3 shadow-2xl p-8">
            <p className="text-[#141414] font-bold text-2xl font-Inter">
              Union Bank
            </p>
            <p className="font-inter font-normal">
              Account Name:{' '}
              <span className="font-bold">ABENOL Foundation LTD/GTE</span>
            </p>
            <p className="font-inter font-normal">
              Account Number(NGN):{' '}
              <span className="font-bold"> 0203588698</span>
            </p>

            <p className="font-inter font-normal">
              Account Number(USD): <span className="font-bold">0203744430</span>
            </p>
            <p className="font-inter font-normal">
              Account Number(GBP):
              <span className="font-bold">0203745097</span>
            </p>
            <p className="font-inter font-normal">
              Account Number(EUR): <span className="font-bold">0203745932</span>
            </p>
          </div>
          <div className="rounded-3xl hover:shadow-[#0a120f] shadow-2xl z-50 bg-[#262C55]  p-8">
            <p className="text-white font-bold text-2xl font-Inter">
              Flutterwave
            </p>
            <p className="text-white font-normal font-Inter mt-4">
              Donation Link
            </p>

            <a
              className="underline font-bold font-Inter text-white"
              href="https://bit.ly/donatetoABENOL"
              target="_blank"
            >
              bit.ly/donatetoABENOL
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
