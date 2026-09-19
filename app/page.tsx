import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Services from "@/components/Services";
import Cases from "@/components/Cases";
import Partners from "@/components/Partners";
import Culture from "@/components/Culture";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Cases />
        <Partners />
        <Culture />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
