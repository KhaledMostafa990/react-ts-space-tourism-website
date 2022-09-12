import React from 'react';
import { NumberedTitle } from './NumberedTitle';

export function NumberedHeading({
  num,
  text,
  classes,
}: {
  num: string;
  text: string;
  classes?: string;
}) {
  return (
    <h1 className={`fs-500 ${classes}`}>
      <NumberedTitle
        num={num}
        text={text}
        numClasses='text-primary-300 pr-1 '
      />
    </h1>
  );
}
