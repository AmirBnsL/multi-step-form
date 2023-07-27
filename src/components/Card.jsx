import react, { useState } from "react";
import MainForm from "./MainForm";
import SideBar from "./SideBar";

function Card() {
  const data = {
    timeframe: "",
    type: "",
    name: "",
    email: "",
    phone: "",
    addons: [],
    price: 0,
  };

  const [page, setPage] = useState(1);
  return (
    <div className="min-w-[900px] flex min-h-[600px] sm:h-screen sm:items-center sm:flex-col sm:min-w-full sm:gap-0 gap-28  py-4 px-4 sm:p-0 sm:rounded-none rounded-xl sm:bg-LightBlue bg-Alabaster">
      <SideBar page={page} setPage={setPage}></SideBar>
      <MainForm page={page} setPage={setPage}></MainForm>
    </div>
  );
}

export default Card;
