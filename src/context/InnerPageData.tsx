import { createContext, useState } from 'react';
import data from '../data/data.json';

interface innerPageData {
  pageName?: string;
  pageOrder?: string;
  pageTitle?: string;
  tabNamesList?: string[];
  activeContent?: any;
  clickTabConfig?: any;
}

interface innerPageContextType {
  destinations?: innerPageData;
  crew?: innerPageData;
  technology?: innerPageData;
}

export const InnerPagesContext = createContext<innerPageContextType>({
  destinations: {},
  crew: {},
  technology: {},
});

export function InnerPagesProvider({ children }: any) {
  const destinations = useSubPageData('destinations', 'indicator-active');
  const crew = useSubPageData('crew', 'active');
  const technology = useSubPageData('technology', 'active');

  return (
    <InnerPagesContext.Provider value={{ destinations, crew, technology }}>
      {children}
    </InnerPagesContext.Provider>
  );
}

function useSubPageData(pageName: string, activeClass: string) {
  const pageData = data[pageName as keyof typeof data];
  const pageOrder = pageData[0].pageId;
  const pageTitle = pageData[0].pageTitle;
  const tabNamesList: any = pageData.map((content: any) => content.name);
  const [activeContent, setActiveContent] = useState(pageData[0]);

  const clickTabConfig = {
    pageData,
    setActiveContent,
    activeClass,
  };

  return {
    pageName,
    pageOrder,
    pageTitle,
    activeContent,
    tabNamesList,
    clickTabConfig,
  };
}
