import { cn } from "@/untils/cn";
import type { ButtonProps } from "./button.type";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  shape = "default",
  disabled = false,
  className,
  onClick,
  ...props
}: ButtonProps) => {
  const base =
    "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 cursor-pointer ";

  const variantStyles = {
    primary: "bg-brand-100 text-blue-600 hover:bg-blue-700 focus:ring-blue-500",
    secondary:
      "bg-brand-50 text-blue-800 hover:bg-gray-200 focus:ring-gray-400",
    ghost: "bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-300",
  };

  const sizeStyles = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-4 py-2",
    lg: "text-lg px-5 py-3",
  };

  const shapeStyles = {
    default: "rounded-md",
    rounded: "rounded-lg",
    pill: "rounded-full",
    square: "rounded-none",
  };

  const classes = cn(
    base,
    variantStyles[variant],
    sizeStyles[size],
    shapeStyles[shape],
    className
  );

  return (
    <button
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button };
