import logo from '../../assets/shared/logo.svg';
import { MainNav } from '../../components/base/MainNav';
import { motion } from 'framer-motion';

let initial = true;

export default function MainHeader() {
  const navListItems = ['./home', './destinations', './crew', './technology'];

  const navitemHandler = clickNavHandler('indicator-active');
  const menuHandler = menuClickHandler('menu-btn', 'main-nav', 'active');

  const itemReference = (e: any) => {
    document
      .querySelector('.btn--main')
      ?.addEventListener('click', () => (initial = true));

    if (initial && e) {
      e.click();
      initial = false;
    }
  };

  return (
    <header
      id='header'
      className={`header flex justify-between align-center pt-6 px-7 lg-pt-5 xl-pl-5`}
    >
      <figure>
        <svg xmlns='http://www.w3.org/2000/svg' width='48' height='48'>
          <g fill='none' fillRule='evenodd'>
            <motion.circle
              initial={{
                scale: 0,
              }}
              transition={{
                duration: 0.25,
                ease: 'easeInOut',
              }}
              animate={{
                scale: 1,
              }}
              cx='24'
              cy='24'
              r='24'
              fill='#FFF'
            />
            <motion.path
              initial={{
                opacity: 0.5,
                scale: 0.1,
              }}
              transition={{
                type: 'spring',
                delay: 0.2,
                duration: 0.3,
                stiffness: 250,
              }}
              animate={{
                scale: 0.96,
                opacity: 1,
              }}
              fill='#0B0D17'
              d='M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z'
            />
          </g>
        </svg>
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
