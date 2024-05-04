import DarkModeToggle from "./DarkMode/DarkModeToggle";
import Link from "../../core/components/Link";
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/clerk-react";

export default function NavbarRight() {
  const className = useUser().isSignedIn ? "ml-60" : "ml-16";
  
  return (
    <div className={`inline-flex gap-5 items-center ${className}`}>
      <DarkModeToggle />
      <SignedOut>
        <Link title="Sign in" link="https://mighty-panther-60.accounts.dev/sign-in" button={true} />
        <Link
          title="Create account"
          link="https://mighty-panther-60.accounts.dev/sign-up"
          button
          active
        />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}
