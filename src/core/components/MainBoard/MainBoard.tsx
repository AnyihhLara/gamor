import MainBoardCenterCard from "./MainBoardCenterCard";
import MainBoardLeftCard from "./MainBoardLeftCard";
import MainBoardRightCard from "./MainBoardRightCard";

export default function MainBoard() {
  return (
    <main className="flex justify-center rounded-xl bg-slate-50 dark:bg-neutral-700/30 shadow-sm mt-6">
      <MainBoardLeftCard />
      <MainBoardCenterCard />
      <MainBoardRightCard />
    </main>
  );
}
