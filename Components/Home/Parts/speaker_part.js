import Button from "@/Components/Tools/button";
import Image from "next/image";

export default function SpeakerPart() {
  return (
    <div className="w-full h-110 p-5 px-35">
      <div className="h-full bg-[#d87c49] flex justify-center items-center rounded-md gap-5 relative overflow-hidden">
        <Image
          className="absolute bottom-[-100px] left-10"
          src={"/KH 420.png"}
          width={450}
          height={100}
          alt="speaker"
        />
        <div className="flex flex-col justify-center items-start gap-6 w-60 absolute right-35">
          <h1 className="text-4xl font-semibold uppercase">KH 420 Speaker</h1>
          <p className="text-[0.7rem] opacity-60">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound
          </p>
          <Button
            bgColor={"#0f0f0f"}
            textColor={"#fff"}
            borderColor={"#d87c49"}
          />
        </div>
      </div>
    </div>
  );
}
