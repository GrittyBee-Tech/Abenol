import React from 'react';
import Support from '../components/home-layout/support';
import Footer from '../components/generic-layouts/footer';
import Navbar from '../components/generic-layouts/navbar';

const Donate = () => {
  return (
    <section>
      <Navbar />
      <div className="mt-7 ">
        <Support />
      </div>
    </section>
  );
};

export default Donate;
