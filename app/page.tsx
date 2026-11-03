"use client";

/* eslint-disable @next/next/no-img-element */
import { Card } from "./Components/Card";
import { Container } from "./Components/Container";
import { Footer } from "./Components/Footer";
import { Heading } from "./Components/Heading";
import { itemsInfo } from "./items/itemsInfo";

export default function Home() {
  itemsInfo.map((item) => {
    console.log(item.id);
  });
  return (
    <>
      <Heading />
      <Container>
        {" "}
        <div className=" mt-5 p-5 flex items-center justify-between">
          <div className="">
            {" "}
            <h1 className="font-bold text-7xl">Simple e</h1>
            <span className="font-bold text-7xl text-[#B33A4B]">Bonito.</span>
          </div>

          <div>
            <img src="/imagem.png" alt="" className="fade-in-up" />
          </div>
        </div>
        <div className="flex justify-center ">
          {" "}
          <div
            id="produtos"
            className="grid grid-cols-1 grid-rows-2 gap-5 scroll-mt-24 sm:grid-cols-3"
          >
            {itemsInfo.map((item) => {
              return (
                <Card
                  key={item.id}
                  img={item.img}
                  title={item.title}
                  subtitle={item.subtitle}
                  price={item.price}
                  id={item.id}
                ></Card>
              );
            })}
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
