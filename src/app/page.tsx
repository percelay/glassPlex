import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Capabilities from "@/components/Capabilities";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="page-shell" id="top">
      <div className="orb orb-a" aria-hidden="true" />
      <div className="orb orb-b" aria-hidden="true" />
      <Header />
      <main>
        <Hero />
        <About />
        <Capabilities />
        <Products />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
