import React from 'react';
import { NumberedTitle } from './NumberedTitle';

export function NumberedHeading({ num, text }: { num: string; text: string }) {
  return (
    <h2 className='fs-600'>
      <NumberedTitle
        num={num}
        text={text}
        numClasses='text-primary-300 pr-2 '
      />
    </h2>
  );
}
