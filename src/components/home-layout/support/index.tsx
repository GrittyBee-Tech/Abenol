import React from 'react';

const Support = () => {
  return (
    <section className="lg:grid h-auto lg:justify-items-center  ">
      <div className="lg:px-0 px-8">
        <div className="rounded-2xl  bg-support-pattern bg-no-repeat  ">
          <div>
            <div className="grid justify-items-center gap-3">
              <p className="font-bold font-Inter lg:text-6xl text-2xl  w-9/12 md:w-6/12 text-[#141414] pt-9 text-center">
                Support this wonderful dream
              </p>
              <p className="lg:w-4/12  w-9/12 font-inter text-center text-[#141414]">
                Support our mission to empower young Nigerians. Donate now and
                be a part of the change.
              </p>
            </div>
            <div className="lg:grid lg:grid-cols-3 px-3 xt-4  p-7 lg:gap-3 gap-11 ">
              <div className="rounded-3xl bg-white  p-8 hover:shadow-[#0a120f] shadow-2xl transition-opacity duration-300 ease-in-out opacity-100 z-10">
                <p className="text-[#141414] font-bold text-2xl font-Inter">
                  Wema Bank
                </p>
                <p className="font-inter mt-4 font-normal">
                  Account Name:{' '}
                  <span className="font-bold font-Inter">
                    ABENOL Foundation LTD/GTE
                  </span>
                </p>
                <div className="grid lg:grid-flow-col mt-4 font-Inter items-center w-max gap-4">
                  <p className=" font-normal">Account Number(NGN): </p>
                  <span className="  font-bold">0125016610</span>
                </div>
                <div className="grid lg:grid-flow-col mt-2 font-Inter items-center w-max gap-4">
                  <p className=" font-normal">Account Number(USD): </p>
                  <span className="  font-bold">0621392779</span>
                </div>
              </div>
              <div className="rounded-3xl bg-[#80CFF1] lg:mt-0 mt-6 z-50 hover:shadow-[#0a120f]   grid gap-3 shadow-2xl p-8">
                <p className="text-[#141414] font-bold text-2xl font-Inter">
                  Union Bank
                </p>
                <p className="font-inter font-normal">
                  Account Name:{' '}
                  <span className="font-bold">ABENOL Foundation LTD/GTE</span>
                </p>
                <div className="grid lg:grid-flow-col w-max lg:gap-6 gap-2">
                  <p className="font-inter font-normal ">
                    Account Number(NGN):
                  </p>
                  <span className="font-inter font-bold">0203588698</span>
                </div>
                <div className="grid lg:grid-flow-col w-max lg:gap-6 gap-2">
                  <p className="font-inter font-normal ">
                    Account Number(USD):
                  </p>
                  <span className=" font-Inter font-bold ">0203744430</span>
                </div>
                <div className="grid lg:grid-flow-col w-max lg:gap-6 gap-2">
                  <p className="font-inter font-normal">Account Number(GBP):</p>
                  <span className=" font-Inter font-bold">0203745097</span>
                </div>
                <div className="grid lg:grid-flow-col w-max lg:gap-6 gap-2">
                  <p className="font-inter font-normal">Account Number(EUR):</p>
                  <span className=" font-Inter font-bold">0203745932</span>
                </div>
              </div>
              <div className="rounded-3xl lg:mt-0 mt-4 hover:shadow-[#0a120f] shadow-2xl z-50 bg-[#262C55]  p-8">
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
        </div>
      </div>
    </section>
  );
};

export default Support;
