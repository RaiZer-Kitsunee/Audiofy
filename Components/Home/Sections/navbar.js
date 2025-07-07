import { LuShoppingCart } from "react-icons/lu";

export default function NavBar() {
  return (
    <header className="w-full h-10 pt-12 pb-6.5 flex flex-col justify-center fixed z-10 bg-black">
      <div className="flex justify-around items-center">
        <h2 className="font-bold text-2xl text-white">Audiofy</h2>

        <ul className="flex gap-10 text-sm font-semibold opacity-80">
          <li>HOME</li>
          <li>HEADPHONES</li>
          <li>SPEAKERS</li>
          <li>EARPHONES</li>
        </ul>

        <LuShoppingCart className="text-2xl text-white" />
      </div>
      <hr className="mx-[9%] mt-5 text-[#555] border-1" />
    </header>
  );
}
