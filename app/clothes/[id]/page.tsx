/* eslint-disable @next/next/no-img-element */
import { Container } from "@/app/Components/Container";
import { Heading } from "@/app/Components/Heading";
import { Suspense } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { PiShoppingCartLight } from "react-icons/pi";
import { itemsInfo } from "@/app/items/itemsInfo";

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
        <div className="flex justify-center m-5">
          <div className="bg-slate-300 w-120 rounded-2xl cursor-pointer">
            {" "}
            <div>
              <div>
                <img src={item?.img} alt="" />
              </div>
              <div className="text-[20px]">{item?.title}</div>
              <div>
                <Suspense fallback={"carregando..."}>
                  <h2>{item?.subtitle}</h2>
                </Suspense>
              </div>
              <div>
                <h2>{item?.price}</h2>
              </div>
            </div>
            <button>
              <IoMdHeartEmpty size={25} color="red"></IoMdHeartEmpty>
            </button>
            <button>
              <PiShoppingCartLight size={25} />
            </button>
            <div className="text-center">
              <button className="text-[20px]">Comprar</button>
            </div>
          </div>
        </div>
      </Container>
      
    </>
  );
}
