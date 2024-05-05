import Link from "../../core/components/Link";

export default function NavbarLeft() {
  return (
    <div className="inline-flex gap-5 items-center">
      <Link title="Home" link="" active />
      <Link title="Streams" link="" />
      <Link title="Party" link="" />
      <Link title="Premium" link="" />
    </div>
  );
}
