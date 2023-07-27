import React from "react";
import Step from "./Step";

export default function SideBar({ page, setPage }) {
  const sidebarStyle = {
    backgroundImage: `url('../../assets/images/bg-sidebar-desktop.svg')`,
  };

  return (
    <div className=" px-8 py-12 sm:py-8 Sidebar sm:rounded-none rounded-md bg-SideBarDesktop sm:bg-SideBarMobile sm:min-w-full sm:min-h-[172px] min-h-[568px] bg-cover">
      <div className="flex justify-center sm:align-top flex-col gap-8 sm:gap-0 sm:flex-row">
        <Step
          number={"1"}
          step={"Step 1"}
          desc={"YOUR INFO"}
          page={page}
        ></Step>
        <Step
          number={"2"}
          step={"Step 2"}
          desc={"SELECT PLAN"}
          page={page}
        ></Step>
        <Step number={"3"} step={"Step 3"} desc={"ADD-ONS"} page={page}></Step>
        <Step number={"4"} step={"Step 4"} desc={"SUMMARY"} page={page}></Step>
      </div>
    </div>
  );
}
