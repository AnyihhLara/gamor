import NavbarLeft from "./NavbarLeft";
import NavbarRight from "./NavbarRight";
import NavbarTitle from "./NavbarTitle";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center gap-4 lg:gap-10">
      <NavbarLeft />
      <NavbarTitle />
      <NavbarRight />
    </nav>
  );
}
