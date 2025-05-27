export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  shape?: "default" | "rounded" | "pill" | "square";
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}
