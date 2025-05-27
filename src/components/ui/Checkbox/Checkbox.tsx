import type { CheckboxProps } from "./checkbox.type";

export const Checkbox = ({ checked, label, ...props }: CheckboxProps) => {
  return (
    <label className="inline-flex items-center cursor-pointer select-none">
      <input
        type="checkbox"
        checked={checked}
        className="form-checkbox h-6 w-6 text-blue-600 rounded border-gray-300 focus:ring-2 focus:ring-blue-400"
        {...props}
      />
      {label && <span className="ml-2 text-gray-700">{label}</span>}
    </label>
  );
};
