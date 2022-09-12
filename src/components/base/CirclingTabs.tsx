export function CirclingTabs({
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
    <ul className={`flex justify-center gap-2`}>
      {items.map((item: any) => (
        <li
          key={item}
          className={` circling-item bg-primary-300
          ${activeExample(item)}
          ${item === activeItem && 'active'} `}
          onClick={clickHandler}
          data-tab={`${item} content tab`}
          data-testid={`${item} content tab`}
        />
      ))}
    </ul>
  );
}
