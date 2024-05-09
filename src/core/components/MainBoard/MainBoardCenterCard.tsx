import UserAvatar from "./components/UserAvatar";

export default function MainBoardCenterCard() {
  return (
    <div className="flex flex-col justify-start items-center px-16 bg-violet-600 dark:bg-orange-400 shadow-2xl sm:order-3 sm:col-span-2 lg:order-none lg:col-span-1">
      <div className="mt-10">
        <h2 className="text-white font-bold text-lg">Fornite New Season</h2>
        <span className="text-black/50 dark:text-black/30 font-bold text-sm">
          Join Live Stream
        </span>
      </div>

      <div className="flex mt-8">
        <div className="relative rounded-full h-fit p-3 items-center bottom-3 left-3 bg-white/30 backdrop-blur-sm">
          <UserAvatar />
        </div>

        <div className="min-w-fit bg-white rounded-full w-fit h-fit px-6 py-2">
          <span className="text-violet-600 dark:text-orange-400 font-bold">
            11 : 45
          </span>
        </div>
      </div>

      <div>
        <img src="./man-fornite-dark.png" alt="man-fornite" className="w-80 h-80 mt-2" />
      </div>
    </div>
  );
}
