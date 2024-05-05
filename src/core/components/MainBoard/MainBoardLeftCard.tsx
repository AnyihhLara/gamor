import { SignedOut } from "@clerk/clerk-react";
import Link from "../Link";

export default function MainBoardLeftCard() {
  return (
    <div className="flex flex-col justify-center items-center pl-10 pr-14 lg:py-12 max-xl:py-20 gap-10">
      <span className="text-5xl font-medium text-gray-800 dark:text-white text-left w-min">
        start
        <br />
        <span className="text-orange-400 dark:text-violet-800">streaming</span>
        <br />
        games
        <br />
        differently
      </span>

      <span className="text-xs font-bold text-gray-800 dark:text-gray-500 text-left">
        gamor now has{" "}
        <span className="text-black dark:text-white">stream party </span>
        platform
      </span>
      <SignedOut>
        <div className="flex items-center space-x-6">
          <Link
            title="Create account"
            link="https://mighty-panther-60.accounts.dev/sign-up"
            variant="mainboard"
            active
          />
          <Link
            title="Sign in"
            link="https://mighty-panther-60.accounts.dev/sign-in"
            variant="mainboard"
          />
        </div>
      </SignedOut>
    </div>
  );
}
