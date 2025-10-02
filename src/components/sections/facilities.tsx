import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Facilities() {
  const facilityImages = PlaceHolderImages.filter(img => img.id.startsWith("facility-"));

  return (
    <section id="facilities" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">
            Our World-Class Facilities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Equipped with the latest technology in a comfortable and clean environment.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {facilityImages.map((image) => (
              <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="aspect-w-3 aspect-h-2">
                        <Image
                          src={image.imageUrl}
                          alt={image.description}
                          width={600}
                          height={400}
                          className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
                          data-ai-hint={image.imageHint}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="ml-12" />
          <CarouselNext className="mr-12" />
        </Carousel>
      </div>
    </section>
  );
}
