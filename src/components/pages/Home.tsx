import { MainButton } from 'components/base/MainButton';
import { Link, useLocation } from 'react-router-dom';
import styles from './Home.module.scss';
import { motion } from 'framer-motion';
export default function Home() {
  const { pathname } = useLocation();

  const list = {
    hidden: {
      opacity: 0,
      transition: {
        when: 'afterChildren',
      },
    },

    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.25,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const btnVariant = {
    hidden: { opacity: 0, y: 150, scale: 0.45 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.35,
        delay: 0.5,
      },
    },
  };

  return (
    <main
      style={{ '--base-sizing': '2rem' } as React.CSSProperties}
      className={`${styles['homepage']} flex-col gap-5 justify-center lg-align-center lg-justify-between lg-flex-row pt-5`}
    >
      <motion.section
        className={`flex-col gap-3 md-gap-1 lg-gap-3 align-center lg-align-start `}
        variants={list}
        initial='hidden'
        animate='visible'
      >
        <motion.h1
          className={`uppercase text-center lg-text-start ff-primary fw-400 text-primary-100`}
          variants={item}
        >
          <span className={`block fs-500 text-secondary-100 letter-spc-2`}>
            so, you want to travel to
          </span>
          <span className={`block fs-900`}>space</span>
        </motion.h1>

        <motion.p
          className={`fs-400 text-center lg-text-start text-secondary-100`}
          variants={item}
        >
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a truly out of this world
          experience!
        </motion.p>
      </motion.section>

      <section className='btn-wrapper flex justify-center'>
        <motion.div variants={btnVariant} initial='hidden' animate='visible'>
          <Link to={'/destinations'}>
            <MainButton>explore</MainButton>
          </Link>
        </motion.div>
      </section>

      {pathname === '/home' && (
        <Link
          className={`${styles['design-system-link']} text-primary-100 fs-200 px-1`}
          to='/designsystem'
        >
          Design System
        </Link>
      )}
    </main>
  );
}
