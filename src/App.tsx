import DesignSystemPage from 'components/pages/DesignSystemPage';
import Home from 'components/pages/Home';
import { Routes, Route, Navigate, Link, useLocation } from 'react-router-dom';
import './sass/main.scss';
import logo from './assets/shared/logo.svg';
import { MainNav } from 'components/base/MainNav';

export default function App() {
  const { pathname } = useLocation();

  return (
    <div className='App fw-400'>
      {pathname !== '/designsystem' && <MainHeader />}

      <Routes>
        <Route path='/' element={<Navigate to='/home' replace={true} />} />
        <Route path='/home' element={<Home />} />
        <Route path='/designsystem' element={<DesignSystemPage />} />

        <Route
          path='/destinations'
          element={<div>pick your destinations</div>}
        />
        <Route path='/crew' element={<div>welcome to Crew</div>} />
        <Route path='/technology' element={<div>welcome to technology </div>} />

        <Route path='*' element={<div> Not Found </div>} />
      </Routes>
    </div>
  );
}
export function MainHeader() {
  const navListItems = ['./home', './destinations', './crew', './technology'];

  const navitemHandler = clickNavHandler('indicator-active');

  const menuHandler = menuClickHandler('menu-btn', 'main-nav', 'active');

  return (
    <header
      className={`header flex justify-between align-center pt-6 px-7 lg-pt-5 xl-pl-5`}
    >
      <figure>
        <img className={'logo'} alt={'space tourism logo'} src={logo} />
      </figure>

      <MainNav items={navListItems} clickHandler={navitemHandler} />

      <div className={'icon-wrapper'}>
        <button
          id='menu-btn'
          className={'hamburger-icon btn flex-col'}
          aria-haspopup='true'
          onClick={menuHandler}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
function menuClickHandler(
  menuBtn: string,
  menuItem: string,
  activeClass: string
) {
  return (event: any) => {
    const header = event.target.closest('header');
    const menu = header.querySelector(`#${menuItem}`);
    const toggleBtn = header.querySelector(`#${menuBtn}`);

    toggleBtn.classList.toggle(activeClass);
    menu.classList.toggle(activeClass);
  };
}

function clickNavHandler(indicatorActive: string) {
  return (event: any) => {
    const targetItem = event.target.closest('li');

    Array.from(targetItem.parentElement).forEach((el: any) => {
      el.classList.remove(indicatorActive);
    });
    targetItem.classList.add(indicatorActive);
  };
}
