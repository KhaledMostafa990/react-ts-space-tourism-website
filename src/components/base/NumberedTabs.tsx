import React from 'react';

export function NumberedTabs({ items }: any) {
  const activeExample = (text: string) => text.match(/active/) && 'active';

  return (
    <ul className={`flex-col align-center gap-3`}>
      {items.map((item: string, idx: number) => (
        <li
          key={item}
          className={`numbered-item flex justify-center align-center ${activeExample(
            item
          )}`}
        >
          <span className={'block fs-500 '}>{idx + 1}</span>
        </li>
      ))}
    </ul>
  );
}
