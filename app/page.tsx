import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import BridgeSection from "@/components/BridgeSection";
import Footer from "@/components/Footer";

const BeforeAfter = dynamic(() => import("@/components/BeforeAfter"));
const Reviews = dynamic(() => import("@/components/Reviews"));
const Contact = dynamic(() => import("@/components/Contact"));

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <BridgeSection />
      <BeforeAfter />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  );
}
