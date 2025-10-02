import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Services from "@/components/sections/services";
import Facilities from "@/components/sections/facilities";
import Location from "@/components/sections/location";
import Contact from "@/components/sections/contact";
import ScrollTracker from "@/components/layout/scroll-tracker";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ScrollTracker />
        <About />
        <ScrollTracker />
        <Services />
        <ScrollTracker />
        <Facilities />
        <ScrollTracker />
        <Location />
        <ScrollTracker />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
