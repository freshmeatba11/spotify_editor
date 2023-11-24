import clsx from "clsx";
import { Disc3, Plus } from "lucide-react";

import { Button } from "../ui/button";
import PlaylistWithTabs from "./playlistWithTabs";

const LibraryButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <Button
      onClick={onClick}
      className={clsx(
        "p-2",
        "justify-start gap-3",
        "text-[var(--sideMenu-text)] text-base hover:text-[var(--sideMenu-text-hover)]",
        "bg-transparent hover:bg-transparent"
      )}
    >
      <Disc3 className="h-6 w-6" />
      <p className={clsx("@[75px]/sidemenu:block", "hidden")}>你的音樂庫</p>
    </Button>
  );
};
const PlusButton = () => {
  return (
    <Button
      onClick={() => {
        alert("plus");
      }}
      className={clsx(
        "p-2",
        "rounded-full",
        "text-[var(--sideMenu-text)] text-base hover:text-[var(--sideMenu-text-hover)]",
        "bg-transparent hover:bg-transparent",
        "@[75px]/sidemenu:block",
        "hidden"
      )}
    >
      <Plus className={clsx("h-6 w-6")} />
    </Button>
  );
};

type Props = {
  setIsSideMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const SideMenuBottom = ({ setIsSideMenuOpen }: Props) => {
  const onClickLibrary = () => setIsSideMenuOpen((prev) => !prev);
  return (
    <div className={clsx("rounded-lg", "bg-[var(--sideMenu-bg)]")}>
      <div className={clsx("py-2 px-4", "flex gap-2 justify-between")}>
        <LibraryButton {...{ onClick: onClickLibrary }} />
        <PlusButton />
      </div>
      <div
        className={clsx(
          "pt-0 px-1 pb-1",
          "@[75px]/sidemenu:py-2 @[75px]/sidemenu:px-4"
        )}
      >
        <PlaylistWithTabs />
      </div>
    </div>
  );
};

export default SideMenuBottom;
