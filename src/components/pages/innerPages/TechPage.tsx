import { useSubPageData } from 'context/useInnerPageData';
import React from 'react';
import { InnerPageContent } from './InnerPageContent';

export default function TechPage() {
  const TechData = useSubPageData('technology', 'active');
  return <InnerPageContent {...TechData} />;
}
