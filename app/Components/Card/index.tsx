import Link from "next/link";
import { IoMdHeartEmpty } from "react-icons/io";
import { PiShoppingCartLight } from "react-icons/pi";

type cardProps = {
  img: string;
  title: string;
  subtitle: string;
};

export function Card(props: cardProps) {
  return (
    <>
      <div className="bg-slate-300 w-60 rounded-2xl cursor-pointer transition-transform duration-300 hover:scale-110">
        {" "}
        <div>
          <Link href={"/clothes/123"}>
            <div>
              <img src={props.img} alt="" />
            </div>
            <div className="text-[20px]">{props.title}</div>
            <div>
              <h2>{props.subtitle}</h2>
            </div>
          </Link>
        </div>
        <button>
          <IoMdHeartEmpty size={25} color="red"></IoMdHeartEmpty>
        </button>
        <button>
          <PiShoppingCartLight size={25} />
        </button>
      </div>
    </>
  );
}
