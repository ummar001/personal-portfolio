// import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/NavBar";
import AboutSection from "./components/AboutSection";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <Navbar />
      <br/>
      <br/>
      <br/>
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
      </div>
    </main>
  );
}
