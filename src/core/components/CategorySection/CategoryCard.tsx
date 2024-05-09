import CategoryCardButtonIcon from "./CategoryCardButtonIcon";

type Props = {
  title: string;
  number: string;
  color?: string;
};

export default function CategoryCard({ title, number, color }: Props) {
  return (
    <div className="bg-slate-50 dark:bg-neutral-700/30 rounded-md pl-5 pr-20 py-5 text-left">
      <span className={color}>
        {color ? "/" : ""}
        <span className="relative top-0.5 text-neutral-400 dark:text-neutral-400/60 text-xs ">
          {number}
        </span>
      </span>
      <div className="flex flex-col justify-start">
        <h4 className="font-semibold mt-1 mb-3 sm:pl-1.5 dark:text-gray-50">
          {title}
        </h4>
        <button>
          <CategoryCardButtonIcon />
        </button>
      </div>
    </div>
  );
}
