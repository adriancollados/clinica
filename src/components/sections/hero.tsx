import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero");

  return (
    <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-white">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center px-4 space-y-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-headline tracking-tight">
          Tu bienestar, nuestra prioridad
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/90">
          Experimenta una atención médica de clase mundial con un toque compasivo. Nuestro equipo de expertos está dedicado a tu bienestar.
        </p>
        <div>
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <a href="#contact">Reservar una cita</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
