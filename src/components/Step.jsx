import React from "react";


export default function Step ({number,step,desc}) {
    return <div className=" h-10 flex gap-4">
    <div className="w-10 text-Alabaster rounded-full flex justify-center items-center border-2 border-solid border-Alabaster"> 1 </div>
    <div className="flex flex-col justify-center items-start">
        <div className="text-sm text-LightGray">Step 1</div>
        <div className="font-bold text-Alabaster text-base">YOUR INFO</div>
    </div>
    </div>
}