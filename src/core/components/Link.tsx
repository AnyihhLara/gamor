type Props = {
  title: string;
  link: string;
  active?: boolean;
  variant?: string;
};
export default function Link({ title, link, active, variant }: Props) {
  let className: string = "";

  switch (variant) {
    case "button":
      className = `${
        active
          ? "text-white/80 border border-gray-800 rounded-full px-4 py-3 bg-gray-950/95"
          : ""
      } text-black dark:text-white/80 
      `;
      break;
    case "mainboard":
      className = `${
        active
          ? "rounded-3xl px-3 py-3 lg:px-5 lg:py-4 bg-white dark:bg-gray-500/30 shadow-lg dark:shadow-xl"
          : ""
      } text-black dark:text-white dark:hover:text-orange-400 dark:active:text-violet-800 hover:text-violet-800 active:text-orange-400
      `;
      break;
    case "menu":
      className = "dark:text-black/90 text-white/90";
      break;
    default:
      className = `${
        active ? "text-violet-800 dark:text-orange-400" : "text-neutral-600"
      }`;
      break;
  }

  return (
    <a
      href={link}
      className={`${className} font-semibold text-sm hover:text-orange-400 active:text-violet-800 dark:hover:text-violet-800 dark:active:text-orange-400`}
    >
      {title}
    </a>
  );
}
