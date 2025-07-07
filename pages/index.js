import Footer from "@/Components/Home/Sections/footer";
import Landing_page from "@/Components/Home/Sections/landing_page";
import LowerPage from "@/Components/Home/Sections/lower_page";
import NavBar from "@/Components/Home/Sections/navbar";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-[#333] relative">
      <NavBar />
      <Landing_page />
      <LowerPage />
      <Footer />
    </div>
  );
}
