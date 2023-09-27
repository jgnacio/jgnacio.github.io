import ThemeToggle from "./utils/ThemeToggle";
import Link from "next/link";
export default function Navbar() {
  return (
    <div className="flex justify-between items-center fixed w-full top-0 z-40 p-4 md:px-10">
      <span className="normal-case text-lg font-thin">{"<jgnacio/>"}</span>
      <ThemeToggle />
    </div>
  );
}
