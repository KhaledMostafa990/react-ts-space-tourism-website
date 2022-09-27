import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NumberedTitle } from './NumberedTitle';
import { motion } from 'framer-motion';
export function MainNav({
  items,
  clickHandler,
  itemRef,
}: {
  items: string[];
  clickHandler?: any;
  itemRef?: any;
}) {
  const { pathname } = useLocation();

  const activeExample = (text: string) =>
    text.match(/active/) && 'indicator-active';

  const currentActivePath = (text: string) =>
    text.slice(1).toLowerCase() === pathname && 'indicator-active';

  const listVariant = {
    hidden: {
      opacity: 0,
      transition: {
        // when: 'afterChildren',
      },
    },

    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: -25, x: -35 },
    visible: { opacity: 1, y: 0, x: 0 },
  };
  return (
    <nav
      id='main-nav'
      style={{ '--base-sizing': '1.5rem' } as React.CSSProperties}
      className={`main-nav pl-2 md-pl-0 pt-8 md-pt-0 md-flex md-justify-center xl-pr-3 ${
        items[0] === 'active' && 'main-nav-example'
      }`}
    >
      <motion.ul
        className='main-nav__list flex-col  md-flex-row md-justify-center md-align-center '
        variants={listVariant}
        initial='hidden'
        animate='visible'
      >
        {items.map((item: string, idx: number) => (
          <motion.li
            variants={itemVariant}
            key={item}
            className={`
            main-nav__item flex align-center md-justify-center 
            ${activeExample(item)}
            ${currentActivePath(item)}`}
            onClick={clickHandler}
            ref={pathname === item.slice(1) ? itemRef : undefined}
          >
            <Link
              to={item[0] === '.' ? `${item}` : ''}
              className='main-nav__link fs-300 flex align-center md-justify-center '
            >
              <NumberedTitle
                num={`0${idx + 1}`}
                text={item[0] === '.' ? item.slice(2) : item}
              />
            </Link>
          </motion.li>
        ))}
        <li className='indicator indicator--main-nav' />
      </motion.ul>
    </nav>
  );
}
