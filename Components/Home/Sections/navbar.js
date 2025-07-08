import { LuShoppingCart } from "react-icons/lu";

export default function NavBar() {
  return (
    <header className="w-full h-10 pt-12 pb-6.5 flex flex-col justify-center fixed z-10 bg-black">
      <div className="flex justify-around items-center">
        <h2 className="font-bold text-2xl text-white hover:text-[#d87c49] cursor-pointer">
          Audiofy
        </h2>

        <ul className="flex gap-10 text-sm font-semibold">
          <li className="opacity-80 hover:opacity-100 cursor-pointer">HOME</li>
          <li className="opacity-80 hover:opacity-100 cursor-pointer">
            HEADPHONES
          </li>
          <li className="opacity-80 hover:opacity-100 cursor-pointer">
            SPEAKERS
          </li>
          <li className="opacity-80 hover:opacity-100 cursor-pointer">
            EARPHONES
          </li>
        </ul>

        <LuShoppingCart className="text-2xl text-white hover:text-[#d87c49] cursor-pointer" />
      </div>
      <hr className="mx-[9%] mt-5 text-[#555] border-1" />
    </header>
  );
}
