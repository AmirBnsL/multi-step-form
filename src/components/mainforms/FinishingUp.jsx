import React from "react";

export default function FinishingUp({data,setData,setPage}) {
  return (
    <div className="Summary">
      <h1 className="text-3xl mt-12 mb-2 font-bold text-MarineBlue">
        Finishing Up
      </h1>
      <p className="text-sm text-CoolGray font-medium mb-10">
        Double check everything looks OK before confiming.
      </p>
      <div className="border-CoolGray border-2 p-5 flex flex-col gap-4 w-full bg-LightBlue ">
      <div className="flex justify-between">
        <p className="text-MarineBlue text-lg font-bold inline">
          Arcade ({true ? "monthly" : "yearly"})
        </p>
        <p> +${true ? 9 : 90} </p></div>
        <a onClick={()=> {
          setPage(1);
          setData({
            timeframe:'',
            type:'',
            name:'',
            email:'',
            phone:'',
            addons:new Array,
            price:0,
            schedule:'monthly'
        })
        }} className="underline border-b-2 block">change</a>
        <div className="flex justify-between">
        <p>Online Service</p>
        <p> +${true ? 10 : 100} </p></div>
        <div className="flex justify-between">
        <p>Larger storage</p>
        <p> +${true ? 20 : 200} </p>
        </div>
      </div>
      <div className="flex justify-between"><p className="text-CoolGray font-medium">Total (per month)</p> <p className="font-bold text-lg text-MarineBlue">+${data.schedule=='monthly' ? data.price : data.price *10}</p></div>
    </div>
  );
}
