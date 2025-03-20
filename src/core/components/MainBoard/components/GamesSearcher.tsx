import { FormEvent, useState } from "react";
import GamesSearcherSettingsIcon from "./GamesSearcherSettingsIcon";
import GamesSearcherUserTable from "./GamesSearcherUsersTable";
import { getGameUsers } from "../../../services/Twitch.ts";

export default function GamesSearcher() {
  const [searchValue, setSearchValue] = useState("");
  const [users, setUsers] = useState(undefined);
  const [loading, setLoading] = useState(false);
  async function handleSearchSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    try {
      setUsers(await getGameUsers(searchValue));
      setLoading(false);
    } catch (e) {
      console.error(e);
    }
  }
  return (
    <div
      className={`bg-white dark:bg-gray-950/40 rounded-lg shadow-md p-1.5 w-80 ${
        loading ? "cursor-wait" : ""
      }`}
    >
      <form onSubmit={handleSearchSubmit}>
        <div className="flex justify-between items-center px-5 pb-5 pt-3">
          <input
            type="search"
            placeholder="Search a game"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
              if (e.target.value.trim().length <= 0) {
                setUsers(undefined);
                setLoading(false);
              }
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
          <GamesSearcherUserTable users={users} />
          <div className="px-4 pb-2 mt-2">
            <button
              type="submit"
              disabled={loading}
              className={`bg-gray-950/95 dark:bg-white rounded-md py-4 w-full shadow-xl font-semibold text-sm text-center text-gray-50 dark:text-inherit ${
                loading ? "cursor-wait bg-gray-950/70 dark:bg-white/40" : "cursor-pointer"
              }`}
            >
              Search Now
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
