import React, { useState } from "react";


function OptionCard({ data, setData, addonInfo }) {
  const [Selected, setSelected] = useState(false);

  const onClickHandler = () => {
    if (!Selected) {
      setData({
        ...data,
        addons: [...data.addons, addonInfo],
        price:
          +data.price +
          +(data.schedule === "monthly"
            ? addonInfo.price
            : addonInfo.price * 10),
      });
      /*                  setData({...data,price:+data.price + +(data.schedule=='monthly' ? price : price*10)});
       */
    } else {
      setData({
        ...data,
        price:
          +data.price -
          +(data.schedule === "monthly"
            ? addonInfo.price
            : addonInfo.price * 10),
        addons: data.addons.filter((item) => item.title !== addonInfo.title),
      });
    }
  };
  const isOnLoadSelected = () => {
    return data.addons.some((element) => addonInfo.title == element.title);
  };
  
  return (
    <div
      className={`flex group justify-between cursor-pointer gap-2 p-4 rounded border-2 border-CoolGray hover:bg-LightBlue ${
        Selected || isOnLoadSelected() ? "bg-LightBlue" : ""
      } checked:transition-all ease-in-out  w-full`}
      onClick={() => {
        setSelected(!Selected);
        onClickHandler();
      }}
    >
      <div className={`checkbox-container flex justify-between gap-4 items-center before:content-[''] before:w-5 before:h-5 group    before:border-2  ${Selected ||isOnLoadSelected()? 'before:bg-PurplishBlue hover:before:bg-PurplishBlue CheckMark':'hover:before:bg-PastelBlue group-hover:before:bg-PastelBlue NoCheckMark'}`}>
          <input checked={isOnLoadSelected()} type="checkbox" className={`checkbox cursor-pointer opacity-0 absolute`} />
        <label  className="checkmark cursor-pointer  ">
          <h2 className="font-bold text-MarineBlue sm:text-sm">
            {addonInfo.title}
          </h2>
          <p className="text-CoolGray font-medium text-sm sm:text-xs">
            {addonInfo.desc}
          </p>
        </label>
      </div>
      <p className="text-PurplishBlue font-bold sm:text-xs self-center ">
        {" "}
        {data.schedule=='monthly' ? `+${addonInfo.price}/mo` : `+${addonInfo.price * 10}/yr`}
      </p>
    </div>
  );
}

export default function PickAddons({ data, setData, addons }) {
  console.log(data);

  return (
    <div className="Pick-Addons w-full px-5 sm:py-0 sm:pb-10 sm:justify-center sm:self-center sm:w-11/12 sm:rounded-lg sm:bg-Alabaster">
      <h1 className="text-3xl sm:w-11/12 sm:text-xl  sm:min-w-[92%] sm:self-center sm:rounded-lg mt-12 mb-2  font-bold text-MarineBlue">
        Pick add-ons
      </h1>
      <p className="text-sm text-CoolGray font-medium mb-10">
        Add-ons help enhance your gaming experience.
      </p>
      <div className="flex flex-col gap-4">
        {addons.map((addon) => {
          return (
            <OptionCard
              addonInfo={addon}
              data={data}
              setData={setData}
            ></OptionCard>
          );
        })}
      </div>
    </div>
  );
}
