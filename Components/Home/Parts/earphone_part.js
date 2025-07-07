import Image from "next/image";
import Button from "../../Tools/button";

export default function EarphonePart() {
  return (
    <div className="w-full h-70 p-5 px-35 flex gap-7 items-center overflow-hidden">
      <div className="w-full h-full flex-1/2 rounded-md overflow-hidden relative">
        <Image
          className="absolute top-[-30px] rounded-md"
          src={"/download.jpg"}
          layout="fill"
          objectFit="cover"
          alt="two earphones"
        />
      </div>
      <div className="flex flex-1/2 justify-start items-center bg-[#f1f1f1] rounded-md h-full pl-20 w-[80%]">
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl text-black font-bold w-50 uppercase">
            Xiaomi FlipBuds Pro
          </h2>
          <Button bgColor={"#f1f1f1"} textColor={"#000"} borderColor={"#000"} />
        </div>
      </div>
    </div>
  );
}
