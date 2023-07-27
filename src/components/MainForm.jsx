import React, { useEffect } from "react";
import SelectYourPlan from "./mainforms/SelectYourPlan";
import PersonalInfo from "./mainforms/PersonalInfo";
import PickAddons from "./mainforms/PickAddons";
import FinishingUp from "./mainforms/FinishingUp";
import { useState } from "react";
import ThankYou from "./mainforms/ThankYou";

export default function MainForm({ page, setPage }) {
  function pickMainform(page) {
    switch (page) {
      case 2:
        return (
          <SelectYourPlan
            data={data}
            setData={setData}
            PlanType={PlanType}
          ></SelectYourPlan>
        );
        break;
      case 1:
        return (
          <PersonalInfo
            data={data}
            setData={setData}
            isEmailFilled={isFilled.isEmailFilled}
            isNameFilled={isFilled.isNameFilled}
            isPhoneFilled={isFilled.isPhoneFilled}
          ></PersonalInfo>
        );
        break;
      case 3:
        return (
          <PickAddons
            data={data}
            setData={setData}
            addons={addons}
          ></PickAddons>
        );
        break;
      case 4:
        return (
          <FinishingUp
            data={data}
            setData={setData}
            setPage={setPage}
          ></FinishingUp>
        );
        break;
      case 5:
        return <ThankYou></ThankYou>;
        break;
    }
  }
  const [data, setData] = useState({
    timeframe: "",
    type: {},
    name: "",
    email: "",
    phone: "",
    addons: new Array(),
    price: 0,
    schedule: "monthly",
  });
  const addons = [
    {
      title: "online service",
      desc: "Access to multiplayer games",
      price: 1,
    },
    {
      title: "Larger storage",
      desc: "Extra 1TB of cloud save",
      price: 2,
    },
    {
      title: "Customizable profile",
      desc: "Custom theme on your profile",
      price: 2,
    },
  ];
  const PlanType = [
    {
      Name: "Arcade",
      price: 9,
    },
    {
      Name: "Advanced",
      price: 12,
    },
    {
      Name: "Pro",
      price: 15,
    },
  ];
  function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }
  function containsOnlyNumbers(str) {
    const numberPattern = /^[0-9]+$/;

    return numberPattern.test(str);
  }
  const [isFilled, setIsFilled] = useState({
    isNameFilled: true,
    isPhoneFilled: true,
    isEmailFilled: true,
  });
  return (
    <div className=" flex flex-col justify-between gap-4 sm:gap-0  sm:h-full sm:w-screen sm:translate-y-[-10%]">
      {pickMainform(page)}
      <div
        className={`flex sm:bg-Alabaster sm:p-2 w- ${
          page == 1 ? "justify-end" : "justify-between"
        }`}
      >
        <button
          type="button"
          disabled={page === 1}
          className={` text-MarineBlue bg-Alabaster cursor-pointer py-3 px-5 rounded-xs font-semibold text-sm ${
            page == 1 || page == 5 ? "hidden" : ""
          }`}
          onClick={() => {
            setPage(page - 1);
          }}
        >
          {page == 4 ? "Go Back" : "Previous Step"}
        </button>
        <button
          type="button"
          disabled={page === 5}
          className={` text-Alabaster hover:bg-PastelBlue cursor-pointer bg-MarineBlue py-3 px-5 rounded-lg font-semibold text-sm ${
            page == 5 ? "hidden" : ""
          }`}
          onClick={() => {
            setPage((prevPage) => {
              switch (prevPage) {
                case 2:
                  if (data.type) {
                    return prevPage + 1;
                  } else {
                    alert("Please choose a Plan ");
                    return prevPage;
                  }
                  break;
                case 1:
                  setIsFilled({
                    isPhoneFilled:
                      containsOnlyNumbers(data.phone) && data.phone != "",
                    isEmailFilled: isValidEmail(data.email),
                    isNameFilled: data.name.length <= 16 && data.name,
                  });
                  if (
                    data.name.length <= 16 &&
                    data.name &&
                    containsOnlyNumbers(data.phone) &&
                    isValidEmail(data.email)
                  ) {
                    return prevPage + 1;
                  } else {
                    return prevPage;
                  }
                  break;
                case 3:
                  return prevPage + 1;
                  break;
                case 4:
                  return prevPage + 1;
              }
            });
          }}
        >
          {page == 4 ? "Confirm" : "Next Step"}
        </button>
      </div>
    </div>
  );
}
