import Image from "next/image";
import Button from "../../Tools/button";

export default function SpeakerPart2() {
  return (
    <div className="w-full h-70 p-5 px-35">
      <div className="h-full bg-[#dadada] rounded-md flex justify-around items-center relative overflow-hidden">
        <div className="flex flex-col justify-center gap-6 absolute left-20 top-20">
          <h2 className="text-2xl text-black font-bold uppercase">
            ZX7 Speaker
          </h2>
          <Button bgColor={"#dadada"} textColor={"#000"} borderColor={"#000"} />
        </div>
        <Image
          className="absolute right-0"
          src={"/Music.jpg"}
          width={400}
          height={100}
          alt="speaker in a table"
        />
      </div>
    </div>
  );
}
