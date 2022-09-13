import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NumberedTitle } from './NumberedTitle';

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

  return (
    <nav
      id='main-nav'
      style={{ '--base-sizing': '1.5rem' } as React.CSSProperties}
      className={`main-nav pl-2 md-pl-0 pt-8 md-pt-0 md-flex md-justify-center xl-pr-3 ${
        items[0] === 'active' && 'main-nav-example'
      }`}
    >
      <ul className='main-nav__list flex-col  md-flex-row md-justify-center md-align-center '>
        {items.map((item: string, idx: number) => (
          <li
            key={item}
            className={`
            main-nav__item flex align-center md-justify-center 
            ${activeExample(item)}
            ${currentActivePath(item)}`}
            onClick={clickHandler}
            ref={pathname === item.slice(1) ? itemRef : null}
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
          </li>
        ))}
        <li className='indicator indicator--main-nav' />
      </ul>
    </nav>
  );
}
