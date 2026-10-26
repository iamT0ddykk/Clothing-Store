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
            <span className="font-bold text-7xl">Beault</span>
          </div>

          <div>
            <img src="/imagem.png" alt="" className="fade-in-up" />
          </div>
        </div>
      </Container>
    </>
  );
}
