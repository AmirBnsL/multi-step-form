import React, { useEffect } from "react";
import SelectYourPlan from "./mainforms/SelectYourPlan";
import PersonalInfo from "./mainforms/PersonalInfo";
import PickAddons from "./mainforms/PickAddons";
import FinishingUp from "./mainforms/FinishingUp";
import { useState } from "react";
import ThankYou from "./mainforms/ThankYou";

export default function MainForm({page,setPage}) {
    function pickMainform(page) {
        switch (page) {
            case 1 : return <SelectYourPlan data={data} setData={setData}></SelectYourPlan>;
            break;
            case 2 : return <PersonalInfo data={data} setData={setData}></PersonalInfo>;
            break;
            case 3 : return <PickAddons data={data} setData={setData} ></PickAddons>;
            break;
            case 4 : return <FinishingUp data={data} setData={setData} setPage={setPage}></FinishingUp>;
            break;
            case 5 : return <ThankYou ></ThankYou>
            break;
        }
    }
    const [data,setData]= useState({
        timeframe:'',
        type:'',
        name:'',
        email:'',
        phone:'',
        addons:new Array,
        price:0,
        schedule:'monthly'
    })
    
    return   <div className=" flex flex-col justify-between basis-1/2">
            {pickMainform(page)} 
           
            <div className={`flex  ${page==1? 'justify-end' : 'justify-between'}`}>
                <button disabled={page===1} className={` text-Alabaster bg-MarineBlue py-3 px-5 rounded-lg font-semibold text-sm  ${page==1 || page==5 ? 'hidden' : ''}`} onClick={()=> {setPage((prevPage)=> {return prevPage-1})
                }}>{page== 4 ? 'Go Back' :'previous Step'}</button>
            <button  disabled={page===5} className={` text-Alabaster bg-MarineBlue py-3 px-5 rounded-lg font-semibold text-sm ${page==5 ? 'hidden' : ''}`} onClick={()=> {setPage((prevPage)=> {return prevPage+1});}}>{page== 4 ? 'Confirm' :'Next Step'}</button>
            </div>
        
    </div>
}