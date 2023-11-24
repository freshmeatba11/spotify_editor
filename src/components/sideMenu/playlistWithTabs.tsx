import clsx from "clsx";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const tabList = [
  {
    text: "All",
    value: "all",
    content: "Make changes to your account here.",
  },
  {
    text: "播放清單",
    value: "playlist",
    content: "Make changes to your Playlist here.",
  },
  {
    text: "藝人",
    value: "artist",
    content: "Make changes to your Artist here.",
  },
  {
    text: "專輯",
    value: "album",
    content: "Make changes to your Album here.",
  },
  {
    text: "Podcast 和節目",
    value: "show",
    content: "Make changes to your Show here.",
  },
];

const PlaylistWithTabs = () => {
  return (
    <Tabs defaultValue="all" className="w-full">
      <TabsList
        className={clsx(
          "w-full overflow-hidden overflow-x-scroll justify-normal",
          "@[75px]/sidemenu:block",
          "hidden"
        )}
      >
        {tabList.map((tab) => (
          <TabsTrigger value={tab.value} key={tab.value}>
            {tab.text}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabList.map((tab) => (
        <TabsContent
          value={tab.value}
          key={tab.value + "_content"}
          className={clsx("mt-0")}
        >
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default PlaylistWithTabs;
