import ShopCard from "@/Components/Tools/shop_card";

export default function CardPart() {
  return (
    <div className="w-full h-80 pb-15 pt-27 px-30 flex justify-around gap-5">
      <ShopCard text={"HeadPhones"} url={"/los.png"} width={145} />
      <ShopCard text={"speakers"} url={"/Speaker.png"} width={100} />
      <ShopCard text={"earphones"} url={"/Blk Pods.png"} width={100} />
    </div>
  );
}
