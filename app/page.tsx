/* eslint-disable @next/next/no-img-element */
"use client";
import { Card } from "./Components/Card";
import { Container } from "./Components/Container";
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
          <div>
            {" "}
            <h1 className="font-bold text-7xl">Simple e</h1>
            <span className="font-bold text-7xl">Bonito.</span>
          </div>

          <div>
            <img src="/imagem.png" alt="" className="fade-in-up" />
          </div>
        </div>
        <div className="flex justify-center ">
          {" "}
          <div className="grid grid-cols-3 grid-rows-2 gap-5">
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
        <footer className="flex items-center justify-center text-slate-400">
          Shop
        </footer>
      </Container>
    </>
  );
}
