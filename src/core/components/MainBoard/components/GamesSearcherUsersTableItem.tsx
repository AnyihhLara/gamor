import AddUserIcon from "./AddUserIcon";
import UserAvatar from "./UserAvatar";

type Props = {
  number: number;
  username: string;
};
export default function GamesSearcherUserTableItem({
  number,
  username,
}: Props) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-4 items-center dark:text-gray-50">
        <div className="rounded-full bg-gray-500/10 dark:bg-gray-950/50 text-xs px-3 py-1.5 font-semibold">
          <span>{number}</span>
        </div>
        {username}
      </div>
      <div className="flex gap-4">
        <div className="flex">
          <div className="rounded-full p-1 bg-red-400 relative left-3">
            <UserAvatar />
          </div>
          <div className="rounded-full p-1 bg-orange-300">
            <UserAvatar />
          </div>
        </div>
        <div className="flex pr-2 ">
          <button className="bg-black/5 dark:bg-white/10 text-black dark:text-white font-semibold rounded-md p-2">
            <AddUserIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
