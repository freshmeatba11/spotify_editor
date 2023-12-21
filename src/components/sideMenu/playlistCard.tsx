import clsx from "clsx";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Props = {
  key: string;
  id: string;
  name: string;
  owner: string;
  images: string;
  url: string;
  isSideMenuOpen: boolean;
};
const PlaylistCard = ({
  id,
  name,
  owner,
  images,
  url,
  isSideMenuOpen,
}: Props) => {
  const hideText = isSideMenuOpen ? "" : "hidden";
  return (
    <div className={clsx("w-full p-2", "flex gap-3")}>
      <Avatar className={clsx("w-12 h-12 rounded")}>
        <AvatarImage src={images} alt={`${name}-cover`} />
        <AvatarFallback>{images}</AvatarFallback>
      </Avatar>

      <div className={clsx("w-full", hideText)}>
        <p
          className={clsx(
            "w-[calc(100%-12px)]",
            "text-base text-[var(--playlist-card-text)]",
            "overflow-hidden whitespace-nowrap text-ellipsis"
          )}
        >
          {name}
        </p>
        <div>
          <p className={clsx("text-sm text-[var(--playlist-card-subtext)]")}>
            播放清單 • {owner}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlaylistCard;
