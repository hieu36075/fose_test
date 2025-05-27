interface FooterColumnProps {
  title: string;
  items: string[];
  highlightFirst?: boolean;
}

export default function FooterColumn({
  title,
  items,
  highlightFirst = false,
}: FooterColumnProps) {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-2xl/7.5 font-semibold text-blue-800">{title}</h2>
      <ul className="flex flex-col gap-3 text-secondary text-base/7 [&>li]:cursor-pointer [&>li:hover]:text-blue-500">
        {items.map((item, idx) => (
          <li
            key={idx}
            className={highlightFirst && idx === 0 ? 'font-semibold text-primary' : ''}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
