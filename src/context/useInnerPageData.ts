import { useState } from 'react';
import data from '../data/data.json';

export function useSubPageData(pageName: string, activeClass: any) {
  const pageData = data[pageName as keyof typeof data];
  const pageOrder = pageData[0].pageId;
  const pageTitle = pageData[0].pageTitle;

  const tabNamesList: any = pageData.map((content: any) => content.name);

  const [currentActiveContent, setCurrentActive]: any = useState(pageData[0]);

  const clickTabConfig = {
    pageData,
    setActiveContent: setCurrentActive,
    activeClass,
  };

  return {
    pageName,
    pageOrder,
    pageTitle,
    activeContent: currentActiveContent,
    tabNamesList,
    clickTabConfig,
  };
}
