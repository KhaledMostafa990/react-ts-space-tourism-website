import React from 'react';

export function CirclingTabs({ items }: { items: string[] }) {
  const activeExample = (text: string) => text.match(/active/) && 'active';

  return (
    <ul className={`flex justify-center gap-2`}>
      {items.map((item: any) => (
        <li
          key={item}
          className={` circling-item bg-primary-300
        ${activeExample(item)}`}
        />
      ))}
    </ul>
  );
}
