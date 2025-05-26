import { logo } from "../../assets";

export default function Logo() {
  return (
    <img
      src={logo}
      alt="Logo"
      className="w-full h-full max-w-[250px] object-center"
    />
  );
}
