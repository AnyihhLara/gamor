import DarkModeToggle from "./DarkMode/DarkModeToggle";
import Link from "../../core/components/Link";
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/clerk-react";
import NavbarMenuIcon from "./NavbarMenuIcon";
import { useState } from "react";

export default function NavbarRight() {
  const [showMenuClass, setShowMenuClass] = useState("hidden");
  const className = useUser().isSignedIn ? "sm:ml-60" : "sm:ml-16";

  function handleClick() {
    if (showMenuClass === "hidden") {
      setShowMenuClass("flex");
    } else if (showMenuClass === "flex") {
      setShowMenuClass("hidden");
    }
  }

  return (
    <>
      <div
        className={`hidden sm:inline-flex sm:gap-5 sm:items-center ${className}`}
      >
        <DarkModeToggle />
        <SignedOut>
          <Link
            title="Sign in"
            link="https://mighty-panther-60.accounts.dev/sign-in"
            variant="button"
          />
          <Link
            title="Create account"
            link="https://mighty-panther-60.accounts.dev/sign-up"
            variant="button"
            active
          />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>

      {/* mobile */}
      <div className="flex justify-end sm:hidden">
        <div
          className={`${showMenuClass} absolute top-20 flex flex-col gap-5 py-3 bg-black/95 dark:bg-white/85 w-[90%] shadow-md rounded-md sm:hidden`}
        >
          <Link title="Home" link="" variant="menu" />
          <Link title="Streams" link="" variant="menu" />
          <Link title="Party" link="" variant="menu" />
          <Link title="Premium" link="" variant="menu" />
          <SignedOut>
            <Link
              title="Sign in"
              link="https://mighty-panther-60.accounts.dev/sign-in"
              variant="menu"
            />
            <Link
              title="Create account"
              link="https://mighty-panther-60.accounts.dev/sign-up"
              variant="menu"
            />
          </SignedOut>
        </div>

        <div className="flex gap-4 sm:hidden">
          <DarkModeToggle />
          <SignedIn>
            <UserButton />
          </SignedIn>
          <button onClick={handleClick}>
            <NavbarMenuIcon />
          </button>
        </div>
      </div>
    </>
  );
}
