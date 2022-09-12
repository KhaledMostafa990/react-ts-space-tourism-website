import React from 'react';

export function NumberedTabs({
  items,
  activeItem,
  clickHandler,
}: {
  items: string[];
  activeItem?: string;
  clickHandler?: any;
}) {
  const activeExample = (text: string) => text.match(/active/) && 'active';

  return (
    <ul className={`flex-row xl-flex-col align-center gap-3`}>
      {items.map((item: string, idx: number) => (
        <li
          key={item}
          className={`numbered-item flex justify-center align-center ${activeExample(
            item
          )}
          ${item === activeItem && 'active'} `}
          onClick={clickHandler}
          data-tab={`${item} content tab`}
          data-testid={`${item} content tab`}
        >
          <span className={'block fs-500 text-primary-100'}>{idx + 1}</span>
        </li>
      ))}
    </ul>
  );
}
