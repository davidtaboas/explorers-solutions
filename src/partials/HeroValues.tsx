import { FC } from 'react';

const classes = {
  title: [
    'mb-4 text-2xl font-normal tracking-tighter md:text-3xl leading-tighter',
  ],
};
const HeroValues: FC = () => (
  <section className="relative flex items-center justify-center h-screen bg-explorers-blue">
    <div className="pb-12 text-center md:pb-16">
      {/* Section header */}
      <div className="pb-12 text-center md:pb-16">
        <h3 className={classes.title.join(' ')} data-aos="zoom-y-out">
          sostenibilidad
        </h3>
        <h3 className={classes.title.join(' ')} data-aos="zoom-y-out">
          respeto
        </h3>
        <h3 className={classes.title.join(' ')} data-aos="zoom-y-out">
          cooperación
        </h3>
      </div>
    </div>
  </section>
);

export default HeroValues;
