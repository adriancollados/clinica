import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Services from "@/components/sections/services";
import Facilities from "@/components/sections/facilities";
import Location from "@/components/sections/location";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Facilities />
        <Location />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
