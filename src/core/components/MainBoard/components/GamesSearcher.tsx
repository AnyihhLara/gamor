import { FormEvent, useState } from "react";
import GamesSearcherSettingsIcon from "./GamesSearcherSettingsIcon";
import GamesSearcherUserTable from "./GamesSearcherUsersTable";

export default function GamesSearcher() {
  const [searchValue, setSearchValue] = useState("");
  function handleSearchSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(searchValue);
  }
  return (
    <div className="bg-white dark:bg-gray-950/40 rounded-lg shadow-md p-1.5 w-72">
      <form onSubmit={handleSearchSubmit}>
        <div className="flex justify-between items-center px-5 pb-5 pt-3">
          <input
            type="search"
            placeholder="Search a game"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            required
            className="font-semibold text-sm text-left dark:text-gray-50 outline-none bg-transparent"
          />
          <button>
            <GamesSearcherSettingsIcon />
          </button>
        </div>

        <hr className="border-slate-50 dark:border-neutral-700/30" />

        <div>
          <GamesSearcherUserTable />
          <div className="px-4 pb-2 mt-2">
            <button
              type="submit"
              className="bg-gray-950/95 dark:bg-white rounded-md py-4 w-full shadow-xl font-semibold text-sm text-center text-gray-50 dark:text-inherit"
            >
              Search Now
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
