import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import OutletsGrid from "@/components/OutletsGrid";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <OutletsGrid />
      </main>
      <Footer />
    </>
  );
}
