import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";

export default function Location() {
  const mapImage = PlaceHolderImages.find((img) => img.id === "map");

  return (
    <section id="location" className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">
            Encuéntranos Aquí
          </h2>
          <p className="text-lg text-muted-foreground">
            Estamos convenientemente ubicados en el corazón de Wellness City.
          </p>
        </div>
        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden shadow-lg">
            <CardContent className="p-0">
              {mapImage && (
                <div className="w-full aspect-[2/1] relative">
                  <Image
                    src={mapImage.imageUrl}
                    alt={mapImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint={mapImage.imageHint}
                  />
                </div>
              )}
              <div className="p-6 bg-card text-center">
                <p className="text-xl font-semibold text-card-foreground">
                  123 Health St, Wellness City, 54321
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
