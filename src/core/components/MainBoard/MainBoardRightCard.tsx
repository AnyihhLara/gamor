import GamesSearcher from "./components/GamesSearcher";
import PlatformSelector from "./components/PlatformSelector";

export default function MainBoardRightCard() {
  return (
    <div className="flex flex-col items-center px-10 gap-6 justify-center my-4">
      <div>
        <h3 className="font-semibold mb-4 text-left dark:text-gray-50">
          <span className="text-neutral-400/60 text-lg">01. </span>Choose
          Platform
        </h3>

        <PlatformSelector />
      </div>

      <div>
        <h3 className="font-semibold mb-4 text-left dark:text-gray-50">
          <span className="text-neutral-400/60 text-lg">02. </span>Searching
          Game
        </h3>
        <GamesSearcher />
      </div>
    </div>
  );
}
