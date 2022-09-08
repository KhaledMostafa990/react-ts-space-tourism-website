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

      <main className='flex-col gap-10'>
        <ColorSection />
        <TypographySection />

        <section>interactive Section</section>
      </main>
    </div>
  );
}

function TypographySection() {
  return (
    <section className='flex-col gap-6'>
      <NumberedHeading num='02' text='typography' />

      <article
        className={` ${styles['typographyLists']} flex-col lg-flex-row justify-between gap-5 xl-gap-0`}
      >
        <ul className='heading-list flex-col gap-2'>
          <li>
            <TypoLabel children={'Heading 1 - Bellefair Regular - 150px'} />
            <TypoExample size={'900'} level='1'>
              Earth
            </TypoExample>
          </li>
          <li>
            <TypoLabel children={'Heading 2 - Bellefair Regular - 100px'} />
            <TypoExample size={'800'} level='2'>
              Venus
            </TypoExample>
          </li>
          <li>
            <TypoLabel children={'Heading 3 - Bellefair Regular - 56px'} />
            <TypoExample size={'700'} level='3'>
              {'JUPITER & SATURN'}
            </TypoExample>
          </li>
          <li>
            <TypoLabel children={'Heading 4 - Bellefair Regular - 32px'} />
            <TypoExample size={'600'} level='4'>
              {'URANUS, NEPTUNE, & PLUTO'}
            </TypoExample>
          </li>
          <li>
            <TypoLabel>
              Heading 5 - Barlow Condensed Regular - 28px - 4.75 Character Space
            </TypoLabel>
            <TypoExample size={'500'} level='5'>
              SO, YOU WANT TO TRAVEL TO SPACE
            </TypoExample>
          </li>
        </ul>

        <ul className='other-text flex-col gap-2'>
          <li>
            <TypoLabel>Subheading 1 - Bellefair Regular - 28px</TypoLabel>
            <TypoExample size={'500'} level='6'>
              384,400 km
            </TypoExample>
          </li>
          <li>
            <TypoLabel>
              Subheading 2 - Barlow Condensed Regular - 14px - 2.35 Character
              Space
            </TypoLabel>
            <TypoExample size={'200'} level='6'>
              AVG. DISTANCE
            </TypoExample>
          </li>
          <li>
            <TypoLabel>
              Nav Text - Barlow Condensed Regular - 16px - 2.7 Character Space
            </TypoLabel>
            <TypoExample size={'300'}>EUROPA</TypoExample>
          </li>
          <li>
            <TypoLabel children={'Body Text'} />
            <TypoExample size={'400'}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
              neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
              ligula sollicitudin laoreet viverra, tortor libero sodales leo,
              eget blandit nunc tortor eu ni bh. Nullam mollis. Ut justo.
              Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer
              adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh
              nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel,
              nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor
              libero sodales leo, eget blandit nunc tortor eu nibh. Nullam
              mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque
              aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id,
              mattis vel, nisi.
            </TypoExample>
          </li>
        </ul>
      </article>
    </section>
  );
}

function TypoExample({ children, size, level }: any) {
  const createElm = React.createElement;
  const classes = `fw-400 fs-${size} ${Number.parseInt(level) > 2 && 'mt-1'}`;

  if (!level)
    return createElm(
      `p`,
      { className: `${classes} ff-secondary letter-spc-1 ` },
      [children]
    );

  return createElm(
    `h${level}`,
    { className: `${classes} ff-primary  uppercase` },
    [children]
  );
}

function TypoLabel({ children }: any) {
  return <p className='text-secondary-100 fs-400'>{children}</p>;
}

function ColorSection() {
  return (
    <section className='flex-col gap-6'>
      <NumberedHeading num='01' text='colors' />
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

function NumberedHeading({ num, text }: { num: string; text: string }) {
  return (
    <h2 className='uppercase fs-600  fw-400 ff-tertiary letter-spc-3 text-primary-100'>
      <span className='text-primary-300 pr-2 fw-700'>{num}</span>
      {text}
    </h2>
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
