/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { PiShoppingCartLight } from "react-icons/pi";

type cardProps = {
  img: string;
  title: string;
  subtitle: string;
  price: string;
  id: string;
};

export function Card(props: cardProps) {
  const [color, setColor] = useState("#ed8780");

  function vecor() {
    if (color === "#ed8780") {
      setColor("red");
    } else {
      setColor("#ed8780");
    }
  }

  return (
    <article className="w-60 overflow-hidden rounded-lg border border-[#dce5e7] bg-white text-[#202b2e] transition-shadow duration-200 hover:shadow-lg hover:shadow-[#202b2e]/10">
      <div className="relative">
        <Link
          href={`/clothes/${props.id}`}
          className="block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#28616b]"
        >
          <div className="aspect-4/5 overflow-hidden bg-[#e7eef0]">
            <img
              src={props.img}
              alt={props.title}
              className="h-full w-full object-contain p-3 transition-transform duration-300 hover:scale-[1.03]"
            />
          </div>
        </Link>
        <button
          onClick={() => vecor()}
          type="button"
          aria-label={`Adicionar ${props.title} aos favoritos`}
          className="absolute right-3 top-3 grid size-10 place-items-center rounded-full bg-white text-black shadow-sm transition-colors hover:bg-[#6b2828] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#28616b]"
        >
          <IoMdHeartEmpty size={22} color={color} />
        </button>
      </div>

      <div className="p-4">
        <Link
          href={`/clothes/${props.id}`}
          className="block rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#28616b]"
        >
          <h2 className="truncate text-lg font-semibold leading-6">
            {props.title}
          </h2>
          <p className="mt-1 line-clamp-2 min-h-10 text-sm leading-5 text-[#65777c]">
            {props.subtitle}
          </p>
        </Link>

        <div className="mt-4 flex items-center justify-between">
          <p className="text-lg font-semibold">{props.price}</p>
          <button
            type="button"
            aria-label={`Adicionar ${props.title} ao carrinho`}
            className="grid size-10 place-items-center rounded-full bg-[#28616b] text-white transition-colors hover:bg-[#202b2e] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e2b744]"
          >
            <PiShoppingCartLight size={22} />
          </button>
        </div>
      </div>
    </article>
  );
}
