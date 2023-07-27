import React, { useEffect } from "react";
import { useState } from "react";

function PlanCard({ PlanType, type, onClickHandler,data }) {
  
  const onLoadSelection = ()=> {
    return PlanType.Name==data.type.Name
  }
  
  return (
    <div
      className={` cursor-pointer rPlanCard px-4 h-44 sm:h-20 sm:justify-start sm:gap-4 sm:items-center w-36 sm:w-11/12  flex flex-col sm:flex-row justify-around ${PlanType.Name===data.type || onLoadSelection() ? 'border-PurplishBlue bg-Magnolia' : ''} active:bg-Magnolia rounded-lg hover:border-PurplishBlue active:border-PurplishBlue border-[1px] hover:border-[1px] transition-all ease-in-out `}
      onClick={onClickHandler}
    >
      <img  
        src={`/assets/images/icon-${PlanType.Name.toLowerCase()}.svg`}
        alt={`${PlanType.Name} image`}
        className="w-[40px] h-[40px]"
      />
      <div>
        <h2 className="font-bold text-MarineBlue">{PlanType.Name}</h2>
        <p className="text-CoolGray font-medium text-xs">
          {type ? (
            `${PlanType.price}$ monthly`
          ) : (
            <>
              <div>{PlanType.price}0$ yearly</div>
              <div> 2 months free</div>
            </>
          )}
        </p>
      </div>
    </div>
  );
}

export default function SelectYouPlan({ setData, data, price,PlanType }) {
  const [pricing, setPricing] = useState(true);
  const onClickHandler = (type, cardNumber, price) => {
    const Plancards = document.querySelectorAll(".PlanCard");
    if (data.type.Name != type.Name) {
      setData({ ...data, type:type, price: data.schedule=='monthly'? price : price*10  });
      Plancards.forEach((element, index) => {
        if (index != cardNumber) {
          element.classList.remove("bg-Magnolia", "border-PurplishBlue");
        }
      });
      Plancards[cardNumber].classList.add("bg-Magnolia", "border-PurplishBlue");
      console.log(Plancards[cardNumber]);
    } else {
      setData({ ...data, type: {}, price: 0 });
      Plancards[cardNumber].classList.remove(
        "bg-Magnolia",
        "border-PurplishBlue"
      );
    }
  };
  const isOnLoadChecked = ()=> {
    return data.schedule == 'yearly'
  }
  return (
    <div className="Select-Your-Plan sm:px-5 sm:py-6 sm:justify-center flex flex-col  self-center  sm:w-11/12  bg-Alabaster sm:rounded-lg ">
      <h1 className="text-3xl sm:text-xl mt-12  sm:mt-2 mb-2 font-bold sm:min-w-[92%] sm:self-center  text-MarineBlue">
        Select your plan
      </h1>
      <p className="text-sm text-CoolGray font-medium sm:min-w-[92%] sm:self-center sm:block mb-10 sm:mb-4">
        You have the option of monthly or yearly billing.
      </p>
      <div className="flex sm:flex-col sm:items-center gap-6">
        {PlanType.map((element,index)=> {
          return <PlanCard
          data={data}
          PlanType={element}
          type={pricing}
          onClickHandler={() => {
            onClickHandler(element, index, element.price);
          }}
        ></PlanCard>
        })}
      </div>
      <div className=" mt-12 self-center flex items-center gap-8 sm:gap-0 bg-Magnolia sm:self-center sm:max-w-[92%] sm:mt-6 w-full justify-center  pt-2 pb-1 rounded-lg">
        <p className={`mb-2 sm:m-0 font-semibold sm:text-sm ${data.schedule=='monthly' ? 'text-MarineBlue': 'text-CoolGray'}`}>Monthly</p>
        <div className="sm:-scale-50 flex ">
          <label className="toggle-switch">
            <input type="checkbox"
            checked={isOnLoadChecked()}
             />
            <div
              className="toggle-switch-background"
              onClick={() => {
                if (data.schedule == "monthly") {
                  setData({ ...data, schedule: "yearly" });
                } else {
                  setData({ ...data, schedule: "monthly" });
                }
                setPricing(!pricing);
              }}
            >
              <div className="toggle-switch-handle"></div>
            </div>
          </label>
        </div>
        <p className={`mb-2 sm:m-0 font-semibold sm:text-sm ${data.schedule=='yearly' ? 'text-MarineBlue': 'text-CoolGray'}`}>yearly</p>
      </div>
    </div>
  );
}
