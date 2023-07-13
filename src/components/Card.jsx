import react from "react";
import MainForm from "./MainForm";
import SideBar from "./SideBar";


function Card() {
    return <div className="min-w-[768px] flex min-h-[600px] justify-between items-center rounded-xl  bg-Alabaster">
        <SideBar></SideBar>
        <MainForm></MainForm>
    </div>
}

export default Card;