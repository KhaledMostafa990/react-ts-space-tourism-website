import React, { useEffect, useState } from 'react';
import styles from './InnerPageContent.module.scss';

import { NumberedHeading } from 'components/base/NumberedHeading';
import { SecondaryNav } from 'components/base/SecondaryNav';
import { CirclingTabs } from 'components/base/CirclingTabs';
import { NumberedTabs } from 'components/base/NumberedTabs';

export function InnerPageContent({
  pageName,
  pageOrder,
  pageTitle,
  activeContent,
  tabNamesList,
  clickTabConfig,
}: any) {
  return (
    <main
      style={{ '--base-sizing': '2rem' } as React.CSSProperties}
      className={`
      ${styles[`innerpage--${pageName}`]} bg-tertiary-100 pt-6 md-pt-8 xl-pt-10
      flex-col gap-3`}
    >
      <NumberedHeading
        classes='text-center md-text-start md-pl-2 xl-pl-7'
        num={`${pageOrder}`}
        text={`${pageTitle}`}
      />

      <section
        className={`flex-col align-center gap-4 md-gap-4 xl-gap-0 xl-flex-row xl-px-7  justify-between
        ${pageName === 'technology' && 'xl-px-7 xl-pr-0'}
        ${pageName == 'destinations' && 'xl-px-10'}
        ${styles[`innerpage--${pageName}__tab-content`]}
        `}
      >
        <ContentImage
          activeContentName={activeContent.name}
          pageName={pageName}
        />

        <article
          className={`flex-col gap-3 align-center xl-align-start px-1 xs-px-3 lg-px-5 xl-px-0 xl-justify-start
        ${styles[`innerpage--${pageName}__tab-text-content`]}
        ${pageName === 'technology' && 'xl-flex-row xl-gap-6'} `}
        >
          <Navigations
            pageName={pageName}
            tabList={tabNamesList}
            clickConfig={clickTabConfig}
            currentActiveName={activeContent.name}
          />

          <div>
            <h2
              className={`text-primary-100 ff-primary fw-400 text-center uppercase xl-text-start
            ${pageName === 'destinations' ? 'fs-800' : 'fs-700'}`}
            >
              {pageName === 'crew' && (
                <span
                  className={
                    'block text-primary-200 text-center xl-text-start fs-600 '
                  }
                >
                  {activeContent.role}
                </span>
              )}

              {pageName === 'technology' && (
                <span
                  className={
                    'block text-secondary-100 fs-500 letter-spc-2 text-center xl-text-start'
                  }
                >
                  {activeContent.termnology}
                </span>
              )}
              {activeContent.name}
            </h2>

            <p
              className={`text-secondary-100 fs-400 text-center xl-text-start 
            ${styles[`innerpage--${pageName}__tab-description`]} `}
            >
              {pageName === 'crew'
                ? activeContent.bio
                : activeContent.description}
            </p>
          </div>

          {pageName === 'destinations' && (
            <TabDistance pageName={pageName} content={activeContent} />
          )}
        </article>
      </section>
    </main>
  );
}

function Navigations({
  pageName,
  tabList,
  clickConfig,
  currentActiveName,
}: any) {
  return (
    <>
      {pageName === 'destinations' && (
        <SecondaryNav
          items={tabList}
          activeItem={currentActiveName}
          clickHandler={(event: any) => tabClickHandler(event, clickConfig)}
        />
      )}

      {pageName === 'crew' && (
        <CirclingTabs
          items={tabList}
          activeItem={currentActiveName}
          clickHandler={(event: any) => tabClickHandler(event, clickConfig)}
        />
      )}

      {pageName === 'technology' && (
        <NumberedTabs
          items={tabList}
          activeItem={currentActiveName}
          clickHandler={(event: any) => tabClickHandler(event, clickConfig)}
        />
      )}
    </>
  );
}

function TabDistance({ pageName, content }: any) {
  const TimeAndDistance = ({ title, describe }: any) => {
    return (
      <h3 className='text-primary-100 flex-col gap-1 fw-400 ff-primary fs-600 uppercase text-center xl-text-start'>
        <span className='text-secondary-100 ff-secondary fs-400 letter-spc-2'>
          {title}
        </span>
        <span>{describe}</span>
      </h3>
    );
  };
  return (
    <section
      className={`flex-col md-flex-row md-justify-center xl-justify-start  gap-3 pt-1 md-pt-2 pb-2
          ${styles[`innerpage--${pageName}__tab-destance`]}`}
    >
      <TimeAndDistance title='avg.distance' describe={`${content.distance}`} />
      <TimeAndDistance
        title='est. travel time'
        describe={`${content.travel}`}
      />
    </section>
  );
}

function tabClickHandler(event: any, clickTabConfig: any) {
  const { pageData, setActiveContent, activeClass } = clickTabConfig;

  const targetItem = event.target.closest('li');
  const [...listItems] = targetItem.closest('ul').children;

  const targetTitle = targetItem.getAttribute('data-tab');

  const [activeData] = pageData.filter(
    ({ name }: any) => `${name} content tab` === targetTitle
  );
  setActiveContent(activeData);

  listItems.forEach((item: HTMLElement) => item.classList.remove(activeClass));
  targetItem.classList.add(activeClass);
}

function ContentImage({
  activeContentName,
  pageName,
}: {
  activeContentName: string;
  pageName: string;
}) {
  const techPage: boolean = pageName === 'technology';
  const [viewportWidth, setviewportWidth] = useState(window.innerWidth);

  const imageFormat = techPage ? '.jpg' : '.png';
  const imageType = techPage
    ? viewportWidth < 1440
      ? '-landscape'
      : '-portrait'
    : '';
  const imgSrc = require(`assets/${pageName}/image-${activeContentName
    .toLowerCase()
    .replace(' ', '-')}${imageType}${imageFormat}`);

  // Listen for resizing the viewport to change the image type based on it.
  useEffect(() => {
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
    function onResize() {
      setviewportWidth(window.innerWidth);
    }
  }, []);

  return (
    <figure
      className={`${
        styles[`innerpage--${pageName}__tab-img-wrapper`]
      } xl-flex xl-justify-center `}
    >
      <img src={imgSrc} alt={`${activeContentName.toLowerCase()} image`} />
    </figure>
  );
}