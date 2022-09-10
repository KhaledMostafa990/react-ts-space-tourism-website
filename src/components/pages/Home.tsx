// import React from 'react';
import { MainButton } from 'components/base/MainButton';
import { Link, useLocation } from 'react-router-dom';
import styles from './Home.module.scss';

export default function Home() {
  const { pathname } = useLocation();
  return (
    <main
      style={{ '--base-sizing': '2rem' } as React.CSSProperties}
      className={`${styles['homepage']} flex-col gap-5 justify-center lg-align-center lg-justify-between lg-flex-row pt-5`}
    >
      <section
        className={`flex-col gap-3 lg-gap-3 align-center lg-align-start `}
      >
        <h1
          className={`uppercase text-center lg-text-start ff-primary fw-400 text-primary-100`}
        >
          <span className={`block fs-500 text-secondary-100`}>
            so, you want to travel to
          </span>
          <span className={`block fs-900`}>space</span>
        </h1>

        <p className={`fs-400 text-center lg-text-start text-secondary-100`}>
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a truly out of this world
          experience!
        </p>
      </section>

      <section className='btn-wrapper flex justify-center'>
        <MainButton>explore</MainButton>
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
