import React from "react";

export default function FinishingUp({ data, setData, setPage }) {
  return (
    <div className="Summary  w-full px-5 sm:py-0 sm:pb-10 sm:justify-center sm:self-center sm:w-11/12 sm:rounded-lg sm:bg-Alabaster">
      <h1 className="text-3xl sm:text-xl  sm:min-w-[92%] sm:self-center mt-12 mb-2 font-bold text-MarineBlue">
        Finishing Up
      </h1>
      <p className="text-sm text-CoolGray font-medium mb-10">
        Double check everything looks OK before confiming.
      </p>
      <div className="border-CoolGray border-2 p-5 flex flex-col gap-4 w-full bg-LightBlue ">
        <div className="flex justify-between">
          <p className="text-MarineBlue text-lg font-bold inline">
            {data.type.Name} ({data.schedule})
          </p>
          <p>
            {" "}
            +$
            {data.schedule == "monthly"
              ? data.type.price
              : data.type.price * 10}{" "}
          </p>
        </div>
        <a
          onClick={() => {
            setPage(1);
            setData({
              timeframe: "",
              type: "",
              name: "",
              email: "",
              phone: "",
              addons: new Array(),
              price: 0,
              schedule: "monthly",
            });
          }}
          className="underline border-b-2 block hover:text-PurplishBlue cursor-pointer"
        >
          change
        </a>
        {data.addons.map((addon) => {
          return (
            <div className="flex justify-between">
              <p>{addon.title}</p>
              <p>
                +${data.schedule == "monthly" ? addon.price : addon.price * 10}
              </p>
            </div>
          );
        })}
      </div>
      <div className="flex justify-between mt-6">
        <p className="text-CoolGray font-medium">Total (per month)</p>{" "}
        <p className="font-bold text-lg text-PurplishBlue">
          +${data.schedule == "monthly" ? data.price : data.price * 10}
        </p>
      </div>
    </div>
  );
}
