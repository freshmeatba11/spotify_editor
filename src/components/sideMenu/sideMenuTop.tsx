import clsx from "clsx";
import { Home as HomeIcon, Search } from "lucide-react";

import { Button } from "../ui/button";

const list = [
  {
    id: "homepage",
    text: "首頁",
    icon: HomeIcon,
    callback: () => {
      alert("click homepage");
    },
  },
  {
    id: "search",
    text: "搜尋",
    icon: Search,
    callback: () => {
      alert("click search");
    },
  },
];

const SideMenuTop = () => {
  return (
    <div
      className={clsx(
        "py-2 px-3 rounded-lg",
        "flex flex-col gap-2",
        "bg-[var(--sideMenu-bg)]"
      )}
    >
      {list.map((item) => (
        <Button
          key={item.id}
          onClick={item.callback}
          className={clsx(
            "py-1 px-3",
            "justify-start gap-5",
            "text-[var(--sideMenu-text)] text-base hover:text-[var(--sideMenu-text-hover)]",
            "bg-transparent hover:bg-transparent"
          )}
        >
          <item.icon className="h-6 w-6" />
          <p className={clsx("@[75px]/sidemenu:block", "hidden")}>
            {item.text}
          </p>
        </Button>
      ))}
    </div>
  );
};

export default SideMenuTop;
