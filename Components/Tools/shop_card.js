import Image from "next/image";

export default function ShopCard({ text, url, width }) {
  return (
    <div className="bg-[#f1f1f1] px-25 pb-6 flex flex-col rounded-md justify-end items-center gap-4 relative">
      <Image
        className="absolute top-[-60px]"
        src={url}
        width={width}
        height={10}
        alt="headphone"
      />
      <div className="flex flex-col gap-2">
        <p className="text-black font-semibold text-sm tracking-wide uppercase">
          {text}
        </p>
        <p className="text-gray-500 font-bold text-[0.7rem] text-center hover:text-gray-900 cursor-pointer">
          SHOP <span className="text-orange-400 ml-1">{">"}</span>
        </p>
      </div>
    </div>
  );
}
