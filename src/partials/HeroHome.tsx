import { FC } from 'react';

const HeroHome: FC = () => (
  <section className="relative flex items-center justify-center h-screen bg-explorers-yellow">
    <div className="pb-12 text-center md:pb-16">
      <h1
        className="mb-4 text-5xl font-extrabold tracking-tighter md:text-6xl leading-tighter"
        data-aos="zoom-y-out"
      >
        explorers.
        <span className="text-transparent bg-clip-text bg-explorers-white">
          solutions
        </span>
      </h1>
      <div className="max-w-3xl mx-auto">
        <p className="mb-8 text-xl" data-aos="zoom-y-out" data-aos-delay="150">
          Exploramos en la era digital.
        </p>
      </div>
    </div>
  </section>
);

export default HeroHome;
