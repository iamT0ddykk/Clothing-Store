/* eslint-disable @next/next/no-img-element */
import { FavoriteButton } from "@/app/Components/FavoriteButton";
import { PiChatTextBold, PiShoppingCartLight } from "react-icons/pi";
import { itemsInfo } from "@/app/items/itemsInfo";
import { PresetComponent } from "@/app/Components/PresetComponent";

export const instant = false;
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = itemsInfo.find((item) => item.id === id);

  return (
    <>
      <PresetComponent>
        <div className="mx-auto my-8 grid max-w-5xl overflow-hidden rounded-lg border border-[#dce5e7] bg-white text-[#202b2e] shadow-sm md:grid-cols-2">
          <div className="relative aspect-4/5 bg-[#e7eef0] md:aspect-auto md:min-h-[36rem]">
            <img
              src={item?.img}
              alt={item?.title ?? ""}
              className="absolute inset-0 h-full w-full object-contain p-4 md:p-8"
            />
            <FavoriteButton
              title={item?.title ?? "produto"}
              className="absolute right-4 top-4 grid size-10 place-items-center rounded-full bg-white text-[#202b2e] shadow-sm transition-colors hover:bg-[#6b2828] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#28616b]"
            />
          </div>

          <div className="flex flex-col p-5 md:p-8">
            <div>
              <h1 className="text-2xl font-semibold leading-tight md:text-3xl">
                {item?.title}
              </h1>
              <p className="mt-3 text-base leading-7 text-[#65777c]">
                {item?.subtitle}
              </p>
            </div>

            <div className="mt-8 border-t border-[#dce5e7] pt-5">
              <p className="text-2xl font-semibold">{item?.price}</p>
            </div>

            <div className="mt-auto flex items-center gap-3 pt-8">
              <button
                type="button"
                aria-label={`Adicionar ${item?.title ?? "produto"} ao carrinho`}
                className="grid size-12 shrink-0 place-items-center rounded-full bg-[#28616b] text-white transition-colors hover:bg-[#202b2e] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e2b744]"
              >
                <PiShoppingCartLight size={23} />
              </button>
              <button
                type="button"
                className="min-h-12 flex-1 rounded-lg bg-[#28616b] px-5 font-semibold text-white transition-colors hover:bg-[#202b2e] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e2b744]"
              >
                Comprar
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start p-2 gap-5">
          <h1 className="text-4xl flex items-center gap-2">
            Comentarios <PiChatTextBold size={30} />
          </h1>
          <input
            type="text"
            id="name"
            placeholder="Adicione um comentario..."
            className="w-full border-0 border-b border-gray-300
           bg-transparent px-0 py-2 text-sm text-gray-900
           placeholder:text-gray-400
           outline-none shadow-none
           rounded-none
           transition-colors duration-200
           focus:border-b-2 focus:border-indigo-500
           focus:ring-0"
          />{" "}
          <button
            type="submit"
            className="rounded-lg bg-blue-600 px-6 py-2.5
         text-sm font-medium text-white
         transition-colors duration-200
         hover:bg-blue-700
         active:bg-blue-800
         "
          >
            Enviar
          </button>
        </div>
      </PresetComponent>
    </>
  );
}
