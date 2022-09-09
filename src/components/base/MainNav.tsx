import React from 'react';
import { Link } from 'react-router-dom';
import { NumberedTitle } from './NumberedTitle';

export function MainNav({ items }: { items: string[] }) {
  const activeExample = (text: string) =>
    text.match(/active/) && 'indicator-active';

  return (
    <nav className='main-nav pl-3 md-pl-0 pt-10 md-pt-0 md-flex md-justify-center'>
      <ul className='main-nav__list flex-col  md-flex-row md-justify-center md-align-center '>
        {items.map((item: string, idx: number) => (
          <li
            key={item}
            className={`
            main-nav__item flex align-center md-justify-center 
            ${activeExample(item)}`}
          >
            <Link
              to={item[0] === '.' ? `${item}` : ''}
              className='main-nav__link fs-300 flex align-center'
            >
              <NumberedTitle num={`0${idx + 1}`} text={item} />
            </Link>
          </li>
        ))}
        <li className='indicator indicator--main-nav' />
      </ul>
    </nav>
  );
}
