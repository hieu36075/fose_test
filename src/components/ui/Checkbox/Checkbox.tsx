import type { CheckboxProps } from "./checkbox.type";

export const Checkbox = ({ checked, label, ...props }: CheckboxProps) => {
  return (
    <label className="inline-flex items-center cursor-pointer select-none">
      <input
        type="checkbox"
        checked={checked}
        className="h-5 w-5 accent-blue-600 rounded border-gray-300 focus:ring-none "
        {...props}
      />
      {label && <span className="ml-2 text-gray-700">{label}</span>}
    </label>
  );
};
