import { Card } from "./Components/Card";
import { Container } from "./Components/Container";
import { Heading } from "./Components/Heading";

export default function Home() {
  return (
    <>
      <Heading />
      <Container>
        {" "}
        <div className=" mt-5 p-5 flex items-center justify-between">
          <div>
            {" "}
            <h1 className="font-bold text-7xl">Simple and</h1>
            <span className="font-bold text-7xl">Beaulty</span>
          </div>

          <div>
            <img src="/imagem.png" alt="" className="fade-in-up" />
          </div>
        </div>
        <div className="flex justify-center ">
          {" "}
          <div className="grid grid-cols-3 grid-rows-2 bg-amber-300 gap-5">
            <Card
              img="/imagem.png"
              title="Sueter laranja"
              subtitle="19R$"
            ></Card>
            <Card
              img="/imagem.png"
              title="Sueter laranja"
              subtitle="19R$"
            ></Card>
            <Card
              img="/imagem.png"
              title="Sueter laranja"
              subtitle="19R$"
            ></Card>
            <Card
              img="/imagem.png"
              title="Sueter laranja"
              subtitle="19R$"
            ></Card>
            <Card
              img="/imagem.png"
              title="Sueter laranja"
              subtitle="19R$"
            ></Card>
            <Card
              img="/imagem.png"
              title="Sueter laranja"
              subtitle="19R$"
            ></Card>
          </div>
        </div>
        <footer className="flex items-center justify-center text-slate-400">
          Shop
        </footer>
      </Container>
    </>
  );
}
