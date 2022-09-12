import { useSubPageData } from 'context/useInnerPageData';
import React from 'react';
import { InnerPageContent } from './InnerPageContent';

export default function DestinationsPage() {
  const destinationsData = useSubPageData('destinations', 'indicator-active');

  return <InnerPageContent {...destinationsData} />;
}
