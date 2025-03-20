import { useState } from "react";
import PlatformItem from "./PlatformItem";

export default function PlatformSelector() {
  const [checkedPlatform, setCheckedPlatform] = useState("Party");
  return (
    <div className="flex items-center justify-between gap-1 rounded-full shadow-sm bg-white dark:bg-gray-950/40 p-1.5 w-full md:w-72 h-fit">
      <PlatformItem
        title="Party"
        name="platform"
        isChecked={checkedPlatform === "Party"}
        onCheck={() => setCheckedPlatform("Party")}
      />
      <PlatformItem
        title="Matchs"
        name="platform"
        isChecked={checkedPlatform === "Matchs"}
        onCheck={() => setCheckedPlatform("Matchs")}
      />
      <PlatformItem
        title="Streams"
        name="platform"
        isChecked={checkedPlatform === "Streams"}
        onCheck={() => setCheckedPlatform("Streams")}
      />
    </div>
  );
}
