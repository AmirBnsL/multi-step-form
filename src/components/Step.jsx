import React from "react";


export default function Step ({number,step,desc,page}) {
    return <div className=" h-10 flex gap-4">
    <div className={`w-10 ${page==number ? 'text-black bg-LightGray': 'text-Alabaster border-Alabaster border-2 border-solid ' } rounded-full flex justify-center items-center `}> {number} </div>
    <div className="flex flex-col justify-center items-start">
        <div className="text-sm text-LightGray">{step}</div>
        <div className="font-bold text-Alabaster text-base">{desc}</div> 
    </div>
    </div>
}