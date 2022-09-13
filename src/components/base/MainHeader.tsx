import logo from '../../assets/shared/logo.svg';
import { MainNav } from '../../components/base/MainNav';

let initial = true;
export function MainHeader() {
  const navListItems = ['./home', './destinations', './crew', './technology'];

  const navitemHandler = clickNavHandler('indicator-active');
  const menuHandler = menuClickHandler('menu-btn', 'main-nav', 'active');
  const itemReference = (e: any) => {
    document.querySelector('.btn--main')?.addEventListener('click', (e) => {
      initial = true;
      console.log(e.target);
    });

    if (initial) {
      if (e) {
        e.click();
        initial = false;
      }
    }
  };

  return (
    <header
      className={`header flex justify-between align-center pt-6 px-7 lg-pt-5 xl-pl-5`}
    >
      <figure>
        <img className={'logo'} alt={'space tourism logo'} src={logo} />
      </figure>

      <MainNav
        items={navListItems}
        clickHandler={navitemHandler}
        itemRef={itemReference}
      />

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
    const listItems = Array.from(targetItem.parentElement);
    const indicatorElm = targetItem.parentElement.lastElementChild;
    const linkElm = targetItem.firstElementChild.firstElementChild;

    console.log(targetItem);

    const getStyleValue = (elm: any, value: string) =>
      getComputedStyle(elm).getPropertyValue(value);

    const setStyleProperty = (
      elm: HTMLElement,
      property: string,
      value: string
    ) => elm.style.setProperty(property, value);

    const itemFullwidth = getStyleValue(targetItem, 'width');
    const itemLinkwidth = getStyleValue(linkElm, 'width');
    const rightPadding = `${
      (parseInt(itemFullwidth) - parseInt(itemLinkwidth)) / 2
    }px`;

    listItems.forEach((el: any) => {
      el.classList.remove(indicatorActive);
    });
    targetItem.classList.add(indicatorActive);
    indicatorElm.style.backgroundColor = 'transparent';

    if (window.innerWidth > 768) {
      setStyleProperty(
        indicatorElm,
        '--indicatorWidth-after',
        `${itemLinkwidth}`
      );
      setStyleProperty(
        indicatorElm,
        '--indicatorWidth-after-desktop',
        `${itemLinkwidth}`
      );
      setStyleProperty(
        indicatorElm,
        '--indicatorPadding-after',
        `${rightPadding}`
      );
      setStyleProperty(
        indicatorElm,
        '--indicatorPadding-after-desktop',
        `${rightPadding}`
      );
    }
  };
}
