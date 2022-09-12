import React from 'react';
import { useSubPageData } from 'context/useInnerPageData';
import { InnerPageContent } from './InnerPageContent';

export default function CrewPage() {
  const CrewData = useSubPageData('crew', 'active');
  return <InnerPageContent {...CrewData} />;
}
