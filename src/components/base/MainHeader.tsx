import logo from '../../assets/shared/logo.svg';
import { MainNav } from '../../components/base/MainNav';

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
