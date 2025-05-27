import { ArrowTopIcon } from "@/assets/svg";
import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useState,
} from "react";
import type { AccordionItemProps, AccordionProps } from "./accordion.type";

export const AccordionItem = ({
  id,
  title,
  children,
  isOpen = false,
  onToggle,
}: AccordionItemProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [children]);

  return (
    <div className="border-b border-gray-300">
      <button
        type="button"
        onClick={() => onToggle?.(id)}
        aria-expanded={isOpen}
        className="w-full flex justify-between items-center py-3 px-4 text-left focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <span className="font-semibold text-xl/7">{title}</span>
        <ArrowTopIcon
          className={`w-6 h-6 transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`} 
        />
      </button>

      <div
        style={{
          maxHeight: isOpen ? height : 0,
        }}
        className="overflow-hidden transition-[max-height] duration-300 ease-in-out px-4"
      >
        <div ref={contentRef} className="py-2">
          {children}
        </div>
      </div>
    </div>
  );
};

export const Accordion = ({
  allowMultipleOpen = false,
  children,
}: AccordionProps) => {
  const [openItems, setOpenItems] = useState<(string | number)[]>([]);

  useEffect(() => {
    const defaultOpenIds = Children.toArray(children)
      .filter(isValidElement)
      .filter(
        (child) =>
          (child as React.ReactElement<AccordionItemProps>).props.defaultOpen
      )
      .map(
        (child) => (child as React.ReactElement<AccordionItemProps>).props.id
      );

    setOpenItems(defaultOpenIds);
  }, [children]);

  const onToggle = (id: string | number) => {
    setOpenItems((prev) => {
      if (allowMultipleOpen) {
        return prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id];
      } else {
        return prev.includes(id) ? [] : [id];
      }
    });
  };

  return (
    <div className="w-full max-w-md ">
      {Children.map(children, (child) => {
        if (!isValidElement<AccordionItemProps>(child)) return null;
        const { id } = child.props;
        const isOpen = openItems.includes(id);

        return cloneElement(child, {
          isOpen,
          onToggle,
        });
      })}
    </div>
  );
};
