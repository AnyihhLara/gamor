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
  let divClass: string = "";
  let labelClass: string = "";

  handleChange();
  function handleChange() {
    if (isChecked) {
      divClass = "bg-black/5 dark:bg-white/10";
      labelClass = "text-black dark:text-white";
    } else {
      labelClass = "text-gray-900/50 dark:text-gray-100/50";
    }
    console.log(title, isChecked);
  }

  return (
    <div
      className={`${divClass} cursor-pointer px-5 rounded-3xl py-2 w-full`}
      onClick={onCheck}
    >
      <label
        htmlFor={title}
        className={`cursor-pointer font-semibold ${labelClass}`}
      >
        {title}
      </label>
      <input
        type="radio"
        id={title}
        name={name}
        className="cursor-pointer appearance-none"
        checked={isChecked}
        onChange={handleChange}
      />
    </div>
  );
}
