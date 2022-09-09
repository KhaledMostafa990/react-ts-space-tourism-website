import React from 'react';

export function MainButton(props: any) {
  const moreClasses = props?.classes || null;
  return (
    <button
      className={`btn btn--main letter-spc-3 fs-500 ff-primary uppercase ${moreClasses}`}
      {...props}
    />
  );
}
