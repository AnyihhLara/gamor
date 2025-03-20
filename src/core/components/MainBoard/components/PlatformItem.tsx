import React from "react";

type Props = {
  title: string;
  name: string;
  isChecked: boolean;
  onCheck: React.MouseEventHandler;
};

export default function PlatformItem({
  title,
  name,
  isChecked,
  onCheck,
}: Props) {
  return (
    <div
      className={`${
        isChecked ? "bg-black/5 dark:bg-white/10" : ""
      } flex items-center relative  justify-center cursor-pointer text-xs sm:text-base px-3 sm:px-5 rounded-3xl py-2 w-full`}
      onClick={onCheck}
    >
      <label
        htmlFor={title}
        className={`text-center cursor-pointer font-semibold ${
          isChecked
            ? "text-black dark:text-white"
            : "text-gray-900/50 dark:text-gray-100/50"
        }`}
      >
        {title}
      </label>
      <input
        type="radio"
        id={title}
        name={name}
        className="cursor-pointer appearance-none"
        checked={isChecked}
      />
    </div>
  );
}
