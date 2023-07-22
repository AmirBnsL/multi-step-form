import React from "react";
import { useState } from "react";

function PlanCard({ Name, price, type, onClickHandler }) {
  return (
    <div
      className="PlanCard px-4 h-44 w-36 hover:bg-Magnolia flex flex-col justify-around active:bg-Magnolia rounded-lg hover:border-PurplishBlue active:border-PurplishBlue border-[1px] hover:border-[1px] transition-all ease-in-out "
      onClick={onClickHandler}
    >
      <img
        src={`../../assets/images/icon-${Name.toLowerCase()}.svg`}
        alt={`${Name} image`}
        className="w-[40px] h-[40px]"
      />
      <div>
        <h2 className="font-bold text-MarineBlue">{Name}</h2>
        <p className="text-CoolGray font-medium text-xs">
          {type ? (
            `${price}$ monthly`
          ) : (
            <>
              <div>{price}0$ yearly</div>
              <div> 2 months free</div>
            </>
          )}
        </p>
      </div>
    </div>
  );
}

export default function SelectYouPlan({ setData, data, price }) {
  const [pricing, setPricing] = useState(true);
  console.log(price)

  const onClickHandler = (type, cardNumber, price) => {
    const Plancards = document.querySelectorAll(".PlanCard");
    if (data.type != type) {
      setData({ ...data, type: type, price: data.schedule=='monthly'? price : price*10  });
      Plancards.forEach((element, index) => {
        if (index != cardNumber) {
          element.classList.remove("bg-Magnolia", "border-PurplishBlue");
        }
      });
      Plancards[cardNumber].classList.add("bg-Magnolia", "border-PurplishBlue");
      console.log(Plancards[cardNumber]);
    } else {
      setData({ ...data, type: "", price: 0 });
      Plancards[cardNumber].classList.remove(
        "bg-Magnolia",
        "border-PurplishBlue"
      );
    }
  };

  console.log(data);
  return (
    <div className="Select-Your-Plan flex flex-col">
      <h1 className="text-3xl mt-12 mb-2 font-bold text-MarineBlue">
        Select your plan
      </h1>
      <p className="text-sm text-CoolGray font-medium mb-10">
        You have the option of monthly or yearly billing.
      </p>
      <div className="flex gap-6">
        <PlanCard
          Name={"Arcade"}
          price={9}
          type={pricing}
          onClickHandler={() => {
            onClickHandler("arcade", 0, 9);
          }}
        ></PlanCard>
        <PlanCard
          Name={"Advanced"}
          price={12}
          type={pricing}
          onClickHandler={() => {
            onClickHandler("Advanced",1,12);
          }}
        ></PlanCard>
        <PlanCard
          Name={"Pro"}
          price={15}
          type={pricing}
          onClickHandler={() => {
            onClickHandler("pro", 2, 15);
          }}
        ></PlanCard>
      </div>
      <div className=" mt-12 self-center flex items-center gap-8 bg-PastelBlue w-full justify-center pt-2 pb-1 rounded">
        <p className="mb-2 font-semibold">Monthly</p>
        <div>
          <label className="toggle-switch">
            <input type="checkbox" />
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
        <p className="mb-2 font-semibold">yearly</p>
      </div>
    </div>
  );
}
