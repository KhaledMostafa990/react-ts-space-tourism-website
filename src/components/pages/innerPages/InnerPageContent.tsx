import React, { useContext, useEffect, useState, CSSProperties } from 'react';
import styles from './InnerPageContent.module.scss';

import { NumberedHeading } from 'components/base/NumberedHeading';
import { SecondaryNav } from 'components/base/SecondaryNav';
import { CirclingTabs } from 'components/base/CirclingTabs';
import { NumberedTabs } from 'components/base/NumberedTabs';
import { InnerPagesContext } from 'context/InnerPageData';

import { motion } from 'framer-motion';

export function InnerPageContent({
  currentPageName,
}: {
  currentPageName: string;
}) {
  const allData = useContext(InnerPagesContext);
  const {
    pageName,
    pageOrder,
    pageTitle,
    activeContent,
    tabNamesList,
    clickTabConfig,
  }: any = allData[currentPageName as keyof typeof allData];

  return (
    <>
      <main
        className={`${styles[`innerpage--${pageName}`]}
        bg-tertiary-100 pt-6 md-pt-8 lg-pt-10 flex-col gap-3`}
        style={{ '--base-sizing': '2rem' } as CSSProperties}
      >
        <NumberedHeading
          classes='text-center md-text-start  md-pl-2 lg-pl-7'
          num={`${pageOrder}`}
          text={`${pageTitle}`}
        />

        <section
          className={`flex-col align-center gap-4 md-gap-4 lg-gap-4 lg-flex-row  lg-px-7   justify-between ${
            styles[`innerpage--${pageName}__tab-content`]
          } ${pageName == 'destinations' && 'lg-px-7'} ${
            pageName === 'technology' && 'lg-px-7 lg-pr-0'
          } ${pageName === 'crew' && 'md-py-2 lg-py-0'}
        `}
        >
          <ContentImage
            activeContent={activeContent.name}
            tabItems={tabNamesList}
            pageName={pageName}
          />

          <article
            className={`flex-col gap-3 align-center lg-align-start  px-1 xs-px-3 lg-px-5 lg-px-0 lg-justify-start ${
              styles[`innerpage--${pageName}__tab-text-content`]
            } ${pageName === 'technology' && 'lg-flex-row lg-gap-6'} `}
          >
            <motion.div variants={toTop} initial='invisible' animate='visible'>
              <Navigations
                pageName={pageName}
                tabList={tabNamesList}
                clickConfig={clickTabConfig}
                currentActiveName={activeContent.name}
              />
            </motion.div>

            <motion.div
              variants={staggerChildren}
              initial='invisible'
              animate='visible'
            >
              <motion.h2
                className={`text-primary-100 ff-primary fw-400 text-center uppercase lg-text-start ${
                  pageName === 'destinations' ? 'fs-800' : 'fs-700'
                }`}
                variants={toTop}
              >
                {pageName === 'crew' && (
                  <span
                    className={
                      'block text-primary-200 text-center lg-text-start fs-600 '
                    }
                  >
                    {activeContent.role}
                  </span>
                )}

                {pageName === 'technology' && (
                  <span
                    className={
                      'block text-secondary-100 fs-500 letter-spc-2 text-center lg-text-start'
                    }
                  >
                    {activeContent.termnology}
                  </span>
                )}
                {activeContent.name}
              </motion.h2>

              <motion.p
                className={`text-secondary-100 fs-400 text-center lg-text-start ${
                  styles[`innerpage--${pageName}__tab-description`]
                } `}
                variants={toTop}
              >
                {pageName === 'crew'
                  ? activeContent.bio
                  : activeContent.description}
              </motion.p>
            </motion.div>

            {pageName === 'destinations' && (
              <TabDistance pageName={pageName} content={activeContent} />
            )}
          </article>
        </section>
      </main>
    </>
  );
}

function ContentImage({
  activeContent,
  tabItems,
  pageName,
}: {
  activeContent: string;
  tabItems: string[];
  pageName: string;
}) {
  const imageFormat = pageName === 'technology' ? '.jpg' : '.png';
  const [viewportWidth, setviewportWidth] = useState(window.innerWidth);
  const imageType =
    pageName === 'technology'
      ? viewportWidth < 992
        ? '-landscape'
        : '-portrait'
      : '';

  // Listen for resizing the viewport to change the image type based on it.
  function onResize() {
    setviewportWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [onResize]);

  return (
    <>
      <figure
        className={`${
          styles[`innerpage--${pageName}__tab-img-wrapper`]
        } lg-flex lg-justify-start`}
      >
        {tabItems.map((imgName) => (
          <motion.img
            src={require(`assets/${pageName}/image-${imgName
              .toLowerCase()
              .replace(' ', '-')}${imageType}${imageFormat}`)}
            key={imgName}
            alt={`${imgName.toLowerCase()} image`}
            style={{
              position: 'absolute',
            }}
            variants={toTop}
            initial='invisible'
            animate={`${imgName === activeContent && 'visible'}`}
          />
        ))}
      </figure>
    </>
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
      <motion.h3
        variants={toTop}
        initial='invisible'
        animate='visible'
        className='text-primary-100 flex-col gap-1 fw-400 ff-primary fs-600 uppercase text-center lg-text-start'
      >
        <motion.span
          variants={toTop}
          initial='invisible'
          animate='visible'
          className='text-secondary-100 ff-secondary fs-400 letter-spc-2'
        >
          {title}
        </motion.span>
        <motion.span variants={toTop} initial='invisible' animate='visible'>
          {describe}
        </motion.span>
      </motion.h3>
    );
  };

  return (
    <section
      className={`flex-col md-flex-row md-justify-center lg-justify-start  gap-3 pt-1 md-pt-2 pb-2
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

const toTop = {
  invisible: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    duration: 1.25,
    delay: 0.2,
    transition: {
      duration: 0.75,
      delay: 0.1,
    },
  },
};
const staggerChildren = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
