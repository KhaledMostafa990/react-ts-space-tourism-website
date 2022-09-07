import React from 'react';
import logo from '../../assets/shared/logo.svg';
import styles from './DesignSystemPage.module.scss';

export default function DesignSystemPage() {
  return (
    <div
      style={{ '--base-sizing': '1rem' } as React.CSSProperties}
      className={`${styles['design-page']} flex-col gap-8 px-3 lg-px-10 bg-tertiary-100 text-primary-100`}
    >
      <header className='header flex align-center justify-between py-4'>
        <img className='logo' src={logo} alt='logo' />
        <h1 className='heading fs-500 fw-400 ff-secondary letter-spc-3 uppercase'>
          design system
        </h1>
      </header>

      <main>
        <ColorSection />
        <section>Typography Section</section>
        <section>interactive Section</section>
      </main>
    </div>
  );
}

function ColorSection() {
  return (
    <section className='flex-col gap-4'>
      <h2 className='uppercase fs-600 fw-400 ff-tertiary letter-spc-3 text-primary-100'>
        <span className='text-primary-300 pr-2 fw-700'>01</span>
        colors
      </h2>

      <ul
        className={`${styles['color-list']}  flex flex-wrap gap-3 justify-center`}
      >
        <li>
          <ColorDetailList hex='#0B0D17' rgb='11,13,23' hsl='230&deg;,35%,7%' />
        </li>

        <li>
          <ColorDetailList
            hex='#D0D6F9'
            rgb='208,214,249'
            hsl='231&deg;,77%,90%'
          />
        </li>

        <li>
          <ColorDetailList
            hex='#FFFFFF'
            rgb='255,255,255'
            hsl='0&deg;,0%,100%'
          />
        </li>
      </ul>
    </section>
  );
}
function ColorDetailList({ hex, rgb, hsl }: any) {
  const textColor = hex !== '#0B0D17' && 'text-tertiary-100';
  return (
    <ul className=' flex-col gap-1 fs-400'>
      <li
        className={`pt-6 pl-3 fs-500 ${textColor}`}
        style={{ backgroundColor: hex }}
      >
        {hex}
      </li>
      <li>
        <span className='pr-4 text-secondary-100'>RGB</span>
        <span>{rgb}</span>
      </li>
      <li>
        <span className='pr-4 text-secondary-100'>HSL</span>
        <span>{hsl}</span>
      </li>
    </ul>
  );
}
