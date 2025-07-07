import CardPart from "../Parts/card_part";
import SpeakerPart from "../Parts/speaker_part";
import SpeakerPart2 from "../Parts/speaker_part2";
import EarphonePart from "../Parts/earphone_part";
import PassbyPart from "../Parts/passby_part";

export default function LowerPage() {
  return (
    <section className="flex flex-col gap-7 w-screen bg-white">
      <CardPart />
      <SpeakerPart />
      <SpeakerPart2 />
      <EarphonePart />
      <PassbyPart />
    </section>
  );
}
