"use client";
import React, { useState } from "react";
import clsx from "clsx";

import SideMenuTop from "./sideMenuTop";
import SideMenuBottom from "./sideMenuBottom";

type Props = {};

const SideMenu = (props: Props) => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(true);
  const sideMenuWidth = isSideMenuOpen ? "w-[340px]" : "w-[72px]";
  return (
    <div
      className={clsx(
        "@container/sidemenu",
        "w-[340px]",
        "flex flex-col gap-[var(--panel-gap)]",
        sideMenuWidth
      )}
    >
      <SideMenuTop />
      <SideMenuBottom {...{ isSideMenuOpen, setIsSideMenuOpen }} />
    </div>
  );
};

export default SideMenu;
