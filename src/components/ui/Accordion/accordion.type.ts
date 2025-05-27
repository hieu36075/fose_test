type AccordionProps = {
  allowMultipleOpen?: boolean;
  children: React.ReactNode;
};

type AccordionItemProps = {
  id: string | number;
  title: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  onToggle?: (id: string | number) => void;
  defaultOpen?: boolean;
};

export type { AccordionItemProps, AccordionProps };
