"use client";
import { IoMdHeartEmpty } from "react-icons/io";
import { PiShoppingCartLight } from "react-icons/pi";

export function Heading() {
  return (
    <>
      <header className="bg-slate-200 h-20 flex  items-center">
        <div className=" p-7 flex justify-between items-center w-full">
          <h1 className="font-bold text-2xl">ClothingShop</h1>

          <ul className="flex gap-5">
            <li>Home</li>
            <li>Shop</li>
            <li>About us</li>
          </ul>

          <div className="flex gap-5">
            <button onClick={() => alert("a")}>
              <IoMdHeartEmpty size={25}></IoMdHeartEmpty>
            </button>
            <button>
              <PiShoppingCartLight size={25} />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
