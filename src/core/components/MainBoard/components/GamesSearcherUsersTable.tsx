import GamesSearcherUserTableItem from "./GamesSearcherUsersTableItem";

export default function GamesSearcherUserTable() {
  return (
    <div className="flex flex-col h-36 overflow-y-auto custom-scrollbar gap-4 pt-4 pb-2 px-3">
      <GamesSearcherUserTableItem number={1} username="Dr Team" />
      <GamesSearcherUserTableItem number={2} username="Mia Plays" />
      <GamesSearcherUserTableItem number={3} username="Keoxer" />
      <GamesSearcherUserTableItem number={4} username="Nickmerc" />
    </div>
  );
}
