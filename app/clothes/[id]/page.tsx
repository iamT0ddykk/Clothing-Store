/* eslint-disable @next/next/no-img-element */
import { Container } from "@/app/Components/Container";
import { FavoriteButton } from "@/app/Components/FavoriteButton";
import { Heading } from "@/app/Components/Heading";
import { PiShoppingCartLight } from "react-icons/pi";
import { itemsInfo } from "@/app/items/itemsInfo";
import { Footer } from "@/app/Components/Footer";

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
      <Heading />
      <Container>
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
      </Container>
      <Footer></Footer>
    </>
  );
}
