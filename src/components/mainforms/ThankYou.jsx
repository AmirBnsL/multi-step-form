import React from "react";
import { ReactDOM } from "react";

export default function ThankYou() {
  return (
    <div className="grid justify-center content-center h-full w-full sm:py-0 sm:pb-10 sm:justify-center sm:self-center sm:w-11/12 sm:rounded-lg sm:bg-Alabaster">
      <div className="Thank-You flex flex-col justify-center items-center ">
        <img src="../../../assets/images/icon-thank-you.svg" alt="check icon" />
        <h1 className="text-3xl mt-12 mb-2 font-bold text-MarineBlue">
          Thank You
        </h1>
        <p className="text-sm text-CoolGray font-medium max-w-[300px] text-center">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support please feel free to email us at
          support@loremgaming.com
        </p>
      </div>
    </div>
  );
}
