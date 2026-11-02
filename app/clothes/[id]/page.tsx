import { Container } from "@/app/Components/Container";
import { Heading } from "@/app/Components/Heading";
import { IoMdHeartEmpty } from "react-icons/io";
import { PiShoppingCartLight } from "react-icons/pi";

export default function Page() {
  return (
    <>
      <Heading />
      <Container>
        <div className="flex justify-center">
          <div className="bg-slate-300 w-120 rounded-2xl cursor-pointer">
            {" "}
            <div>
              <div>
                
                <img src="/imagem.png" alt="" />
              </div>
              <div className="text-[20px]">titulo</div>
              <div>
                <h2>asd</h2>
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
