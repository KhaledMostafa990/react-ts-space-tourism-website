import React from 'react';
import { Link } from 'react-router-dom';

export function SecondaryNav({ items }: { items: string[] }) {
  const activeExample = (text: string) =>
    text.match(/active/) && 'indicator-active';

  return (
    <nav className='secondary-nav '>
      <ul className='secondary-nav__list flex  '>
        {items.map((item: string, idx: number) => (
          <li
            key={item}
            className={`secondary-nav__item flex justify-center
            ${activeExample(item)}`}
          >
            <Link
              to={item[0] === '.' ? `${item}` : ''}
              className='secondary-nav__link uppercase fs-200  ff-tertiary letter-spc-2 text-primary-100'
            >
              {item}
            </Link>
          </li>
        ))}
        <li className='indicator indicator--secondary-nav' />
      </ul>
    </nav>
  );
}
