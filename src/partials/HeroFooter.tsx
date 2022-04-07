import { FC } from 'react';

const classes = {
  title: [
    'text-explorers-white mb-4 text-3xl font-bold tracking-tighter md:text-4xl leading-tighter',
  ],
};
const HeroFooter: FC = () => (
  <section className="relative flex items-center justify-center h-screen bg-explorers-black">
    <div className="pb-12 text-center md:pb-16">
      {/* Section header */}
      <div className="pb-12 text-center md:pb-16">
        <h2 className={classes.title.join(' ')} data-aos="zoom-y-out">
          hola@explorers.solutions
        </h2>
      </div>
    </div>
  </section>
);

export default HeroFooter;
