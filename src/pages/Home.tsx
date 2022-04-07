import React from 'react';

import Header from 'partials/Header';
import HeroHome from 'partials/HeroHome';

import HeroClaim from 'partials/HeroClaim';
import HeroValues from 'partials/HeroValues';
import HeroFooter from 'partials/HeroFooter';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <main className="flex-grow">
        <HeroHome />
        <HeroClaim />
        <HeroValues />
        <HeroFooter />
      </main>
    </div>
  );
}

export default Home;
