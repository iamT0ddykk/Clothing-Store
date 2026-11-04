import Link from "next/link";
import { IoMdHeartEmpty } from "react-icons/io";
import { PiShoppingCartLight } from "react-icons/pi";

export function Heading() {
  return (
    <header className="border-b border-[#dce5e7] bg-white text-[#202b2e]">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-8 gap-y-2 px-5 py-3 md:min-h-18 md:flex-nowrap md:px-10">
        <Link
          href="/"
          aria-label="ClothingShop, início"
          className="rounded-sm text-lg font-semibold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#28616b]"
        >
          ClothingShop
        </Link>

        <nav
          aria-label="Navegação principal"
          className="order-3 w-full md:order-0 md:flex-1"
        >
          <ul className="flex text-[18px] items-center gap-6 md:justify-center">
            <li>
              <Link
                href="/"
                className="rounded-sm py-2  text-[#65777c] transition-colors hover:text-[#28616b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#28616b]"
              >
                Início
              </Link>
            </li>
            <li>
              <Link
                href="/#produtos"
                className="rounded-sm py-2  text-[#65777c] transition-colors hover:text-[#28616b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#28616b]"
              >
                Produtos
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <Link href={"/favorites"}>
            <button
              type="button"
              aria-label="Favoritos"
              title="Favoritos"
              className="grid size-10 place-items-center rounded-full text-[#2e2020] transition-colors hover:bg-[#f4f7f7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#28616b]"
            >
              <IoMdHeartEmpty size={22} />
            </button>
          </Link>
          <Link href={"/shop"}>
            <button
              type="button"
              aria-label="Carrinho"
              title="Carrinho"
              className="grid size-10 place-items-center rounded-full text-[#202b2e] transition-colors hover:bg-[#f4f7f7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#28616b]"
            >
              <PiShoppingCartLight size={22} />
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
