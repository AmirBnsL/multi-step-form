import React, { useEffect, useState } from "react";

export default function PersonalInfo({
  data,
  setData,
  isNameFilled,
  isEmailFilled,
  isPhoneFilled,
}) {
  return (
    <div className="Personal-Info w-full px-5 sm:py-0 sm:pb-10 sm:justify-center sm:self-center sm:w-11/12 sm:rounded-lg sm:bg-Alabaster ">
      <h1 className="text-3xl sm:text-xl mt-12 mb-2 font-bold text-MarineBlue">
        Personal info
      </h1>
      <p className="text-sm text-CoolGray font-medium mb-10">
        Please provide your name,email address, and phone number.
      </p>
      <form action="POST" className="flex flex-col gap-5 text-sm">
        <div>
          <div className="flex justify-between">
            <label htmlFor="name" className="text-MarineBlue block mb-2">
              Name
            </label>
            <p
              className={`text-StrawberryRed font-semibold text-sm ${
                isNameFilled ? "hidden" : ""
              }`}
            >
              This field is required
            </p>
          </div>
          <input
            type="text"
            placeholder="e.g. Stephen King"
            className={`w-full py-3 px-4 border-[1px] rounded-lg border-CoolGray font-semibold text-MarineBlue ${
              isNameFilled ? "border-CoolGray" : "border-StrawberryRed"
            }`}
            value={data.name}
            onChange={(e) => {
              setData({ ...data, name: e.target.value });
            }}
          ></input>
        </div>
        <div>
          <div className="flex justify-between">
            {" "}
            <label htmlFor="email" className="text-MarineBlue block mb-2">
              E-mail Address{" "}
            </label>
            <p
              className={`text-StrawberryRed font-semibold text-sm ${
                isEmailFilled ? "hidden" : ""
              }`}
            >
              This field is required
            </p>
          </div>
          <input
            type="email"
            placeholder="e.g. stephanking@lorem.com"
            className={`w-full py-3 px-4 border-[1px] rounded-lg border-CoolGray font-semibold text-MarineBlue ${
              isEmailFilled ? "border-CoolGray" : "border-StrawberryRed"
            } `}
            value={data.email}
            onChange={(e) => {
              setData({ ...data, email: e.target.value });
            }}
          ></input>
        </div>
        <div>
          <div className="flex justify-between">
            <label htmlFor="number" className="text-MarineBlue block mb-2">
              Phone Number
            </label>
            <p
              className={`text-StrawberryRed font-semibold text-sm ${
                isPhoneFilled ? "hidden" : ""
              }`}
            >
              This field is required
            </p>
          </div>
          <input
            type="text"
            placeholder="e.g. +1 234 567 890"
            className={`w-full py-3 px-4 border-[1px] rounded-lg  font-semibold text-MarineBlue ${
              isPhoneFilled ? "border-CoolGray" : "border-StrawberryRed"
            }  `}
            value={data.phone}
            onChange={(e) => {
              setData({ ...data, phone: e.target.value });
            }}
          ></input>
        </div>
      </form>
    </div>
  );
}
