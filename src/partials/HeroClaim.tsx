import { FC } from 'react';

const classes = {
  title: [
    'mb-4 text-3xl font-bold tracking-tighter md:text-4xl leading-tighter',
  ],
};
const HeroClaim: FC = () => (
  <section className="relative flex items-center justify-center h-screen bg-explorers-brown">
    <div className="pb-12 text-center md:pb-16">
      {/* Section header */}
      <div className="pb-12 text-center md:pb-16">
        <h2 className={classes.title.join(' ')} data-aos="zoom-y-out">
          productos digitales
        </h2>
        <h2 className={classes.title.join(' ')} data-aos="zoom-y-out">
          aventura
        </h2>
        <h2 className={classes.title.join(' ')} data-aos="zoom-y-out">
          editorial
        </h2>
      </div>
    </div>
  </section>
);

export default HeroClaim;
