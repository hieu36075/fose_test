import { cn } from "@/untils/cn";
import type { DividerProps } from "./divider.type";

export function Divider({
  w = "w-full",
  h = "h-px",
  className = "",
  ...props
}: DividerProps) {
  return (
    <hr
      className={cn(` border border-gray-500/20 my-1 ${w} ${h}`, className)}
      {...props}
    />
  );
}
