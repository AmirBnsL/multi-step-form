import React, { useState } from "react";


function OptionCard ({title,desc,price,data,setData}) {
   const [Selected,setSelected]=useState(false);
    const pushAddon = (addon,data) => {
    setData({
      ...data,
      addons: [...data.addons, addon],
    });
  }; 
  
    return <div className={`flex justify-between gap-2 p-4 rounded border-2 border-CoolGray hover:bg-LightBlue ${Selected ? 'bg-LightBlue' :''} checked:transition-all ease-in-out  w-full`} >
        <div className="flex justify-between gap-4 items-center">
            <input type="checkbox" className="" onClick={()=>{ setSelected(!Selected);
            if (!Selected) {
                pushAddon(title,data); 
                setData({...data,price:+data.price + +(data.schedule=='monthly' ? price : price*10)});
            }
             }}/>
        <div >
        <h2 className="font-bold text-MarineBlue">{title}</h2>
        <p className="text-CoolGray font-medium text-sm">{desc}</p>
        </div>
        </div>
        <p> {true ?`+${price}/month` : `+${price *10}/year`}</p>
    </div>
}
export default function PickAddons({data,setData}){
    console.log(data);
    return <div className="Pick-Addons">
        <h1 className="text-3xl mt-12 mb-2 font-bold text-MarineBlue">
            Pick add-ons
        </h1>
        <p className="text-sm text-CoolGray font-medium mb-10">
            Add-ons help enhance your gaming experience. 
        </p>
        <div className="flex flex-col gap-4">
            <OptionCard title={'Online service'} desc={'Access to multiplayer games'} price={'1'} data={data} setData={setData}></OptionCard>
            <OptionCard title={'Larger storage'} desc={'Extra 1TB of cloud save'} price={'2'} data={data} setData={setData}></OptionCard>
            <OptionCard title={'Customizable profile'} desc={'Custom theme on your profile'} price={'2'} data={data} setData={setData}></OptionCard>
        </div>
        
    </div>
}