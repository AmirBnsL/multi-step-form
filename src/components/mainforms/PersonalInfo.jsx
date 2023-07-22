import React, { useState } from "react";


export default function PersonalInfo ({data,setData}) {
    return <div className="Personal Info ">
       <h1 className="text-3xl mt-12 mb-2 font-bold text-MarineBlue">Personal info</h1>
       <p className="text-sm text-CoolGray font-medium mb-10">Please provide your name,email address, and phone number.</p>
       <form action="POST" className="flex flex-col gap-5 text-sm">
        <div>
        <label htmlFor='name' className="text-MarineBlue block mb-2">Name</label>
        <input type="text" placeholder="e.g. Stephen King" className="w-full py-3 px-4 border-[1px] rounded-lg border-CoolGray font-semibold text-MarineBlue" value={data.name}  onChange={(e)=>{setData({...data,name:e.target.value})}}></input>
        </div>
        <div>
        <label htmlFor='email'  className="text-MarineBlue block mb-2">E-mail Address </label>
        <input type='email' placeholder="e.g. stephanking@lorem.com" className="w-full py-3 px-4 border-[1px] rounded-lg border-CoolGray font-semibold text-MarineBlue " value={data.email}  onChange={(e)=>{setData({...data,email:e.target.value})}}></input>
        </div>
        <div>
        <label htmlFor='number' className="text-MarineBlue block mb-2" value={data.number}  >Phone Number</label>
       <input type="text" placeholder="e.g. +1 234 567 890" className="w-full py-3 px-4 border-[1px] rounded-lg border-CoolGray font-semibold text-MarineBlue  " value={data.phone} onChange={(e)=>{setData({...data,phone:e.target.value})}}></input>
       </div>
       </form>
       
    </div>
    
}