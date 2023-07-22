import react, { useState } from "react";
import MainForm from "./MainForm";
import SideBar from "./SideBar";


function Card() {
    const data ={
        timeframe:'',
        type:'',
        name:'',
        email:'',
        phone:'',
        addons:[],
        price:0,
    }
    const [page,setPage] = useState(1);
    return <div className="min-w-[900px] flex min-h-[600px]  gap-28 py-4 px-4 rounded-xl  bg-Alabaster">
        <SideBar page={page} setPage={setPage}></SideBar>
        <MainForm page={page} setPage={setPage}></MainForm>
    </div>
}

export default Card;