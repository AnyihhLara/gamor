import GamesSearcherUserTableItem from "./GamesSearcherUsersTableItem";

type Params = {
  users:
    | Array<{
        id: string;
        user_id: string;
        user_login: string;
        user_name: string;
        game_id: string;
        game_name: string;
        type: string;
        title: string;
        viewer_count: number;
        started_at: string;
        language: string;
        thumbnail_url: string;
        tag_ids: Array<string>;
        tags: Array<string>;
        is_mature: boolean;
      }>
    | undefined;
};
export default function GamesSearcherUserTable({ users }: Params) {

  return (
    <div className="flex flex-col h-36 overflow-y-auto custom-scrollbar gap-4 pt-4 pb-2 px-3">
      {users !== undefined && users.length > 0
        ? users.map((user, index) => (
            <GamesSearcherUserTableItem
              number={index + 1}
              username={user.user_name}
            />
          ))
        : <span className="font-semibold text-black/90 dark:text-white/90">No users found</span>}
    </div>
  );
}
