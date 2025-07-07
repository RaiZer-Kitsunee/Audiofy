import Image from "next/image";

export default function PassbyPart() {
  return (
    <div className="w-full h-100 p-5 px-35 mt-40 mb-60">
      <div className="h-full flex justify-between items-center">
        <div className="flex flex-col justify-center w-90 gap-5">
          <h1 className="text-3xl uppercase text-black">
            Bringing you the <span className="text-orange-500">BEST</span> audio
            gear
          </h1>
          <p className="text-[0.8rem] text-gray-500 font-semibold">
            Located at the heart of New York City, Audiofy is the premier store
            for high end headphones, earphones, speakers, and audio accessories.
            we have a large showroom and luxury demonstration rooms available
            for you to browse and experience a wide range of our products. stop
            by our store to meet some of the fantastic people who make Audiofy
            the best place to buy your portable audio equipment.
          </p>
        </div>
        <Image
          className="rounded-md"
          src={"/BD.jpg"}
          height={100}
          width={420}
          alt="girl with headphones"
        />
      </div>
    </div>
  );
}
