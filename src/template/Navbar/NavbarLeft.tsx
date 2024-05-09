import Link from "../../core/components/Link";

export default function NavbarLeft() {
  return (
    <div className="hidden sm:inline-flex sm:gap-5 sm:items-center">
      <Link title="Home" link="" active />
      <Link title="Streams" link="" />
      <Link title="Party" link="" />
      <Link title="Premium" link="" />
    </div>
  );
}
