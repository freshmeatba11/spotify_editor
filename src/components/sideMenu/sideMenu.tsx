"use client";
import React from "react";
import clsx from "clsx";

import { Button } from "../ui/button";
import { Home as HomeIcon, Search } from "lucide-react";

import SideMenuTop from "./sideMenuTop";

type Props = {};

const SideMenu = (props: Props) => {
  return (
    <div className={clsx("border border-red-600 w-[340px]")}>
      <SideMenuTop />
      SideMenu
    </div>
  );
};

export default SideMenu;
