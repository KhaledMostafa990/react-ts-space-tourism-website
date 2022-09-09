import React from 'react';

export function NumberedTitle({
  num,
  text,
  numClasses,
}: {
  num: string;
  text: string;
  numClasses?: string | '';
}) {
  return (
    <p className='uppercase fw-400 ff-tertiary letter-spc-3 text-primary-100'>
      <span className={`pr-1 fw-700 ${numClasses}`}>{num}</span>
      {text}
    </p>
  );
}
