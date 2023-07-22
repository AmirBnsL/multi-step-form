import React from "react";
import Step from "./Step";

export default function SideBar({page,setPage}) {
    const sidebarStyle = {
        backgroundImage: `url('../../assets/images/bg-sidebar-desktop.svg')`,
    };

    return   <div className=" px-8 py-12 Sidebar rounded-md bg-SideBarDesktop  min-h-[568px] bg-cover">
        <div className="flex flex-col gap-8">
        <Step number={'1'} step={'Step 1'} desc={'YOUR INFO'} page={page}></Step>
        <Step number={'2'} step={'Step 2'} desc={'SELECT PLAN'} page={page}></Step>
        <Step number={'3'} step={'Step 3'} desc={'ADD-ONS'} page={page}></Step>
        <Step number={'4'} step={'Step 4'} desc={'SUMMARY'}page={page}></Step>
        </div>
    </div>
}