import React from "react";
import Step from "./Step";

export default function SideBar() {
    const sidebarStyle = {
        backgroundImage: `url('../../assets/images/bg-sidebar-desktop.svg')`,
    };

    return   <div className=" px-8 py-12 Sidebar bg-SideBarDesktop mx-4 min-h-[568px] basis-1/3 bg-cover">
        <Step></Step>
    </div>
}