"use client";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { useState } from "react";

// Librería Lightbox
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function Facilities() {
  const facilityImages = PlaceHolderImages.filter(img => img.id.startsWith("facility-"));

  // Estado para el lightbox
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section id="facilities" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">
            Nuestras instalaciones
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Equipadas con la última tecnología en un ambiente cómodo y limpio.
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
            {facilityImages.map((image, index) => (
              <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="overflow-hidden"
                    onClick={() => {
                        setCurrentIndex(index);
                        setLightboxOpen(true);
                      }}>
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

        {/* Lightbox */}
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={facilityImages.map(img => ({ src: img.imageUrl, title: img.description }))}
          index={currentIndex}
        />
      </div>
    </section>
  );
}
