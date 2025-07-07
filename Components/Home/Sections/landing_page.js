import Image from "next/image";
import Button from "../../Tools/button";

export default function Landing_page() {
  return (
    <section className="w-screen h-screen bg-black z-0">
      <div className="flex gap-25 absolute items-center bottom-[12vh] left-[9.5vw]">
        <div className="flex flex-col w-80 gap-6">
          <h2 className="opacity-50 text tracking-[10px] text-sm">
            NEW PRODUCT
          </h2>
          <h1 className="text-5xl font-semibold">XX99 MARK II HEADPHONES</h1>
          <p className="opacity-70 text-sm">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast
          </p>
          <Button bgColor={"#d87c49"} textColor={"#000"} borderColor={"#000"} />
        </div>
        <Image
          src={"/Best Headphones_withblur.png"}
          width={500}
          height={300}
          alt="Best Headphones"
        />
      </div>
    </section>
  );
}
