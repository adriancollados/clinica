import { Card, CardContent } from "@/components/ui/card";

export default function Location() {
  return (
    <section id="location" className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">
            Encuéntranos Aquí
          </h2>
          <p className="text-lg text-muted-foreground">
            Estamos convenientemente ubicados junto al polideportivo de San Vicente del Raspeig.
          </p>
        </div>
        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden shadow-lg">
            <CardContent className="p-0">
              <div className="w-full aspect-w-16 aspect-h-9 md:aspect-h-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6253.306724648398!2d-0.5230096!3d38.4032632!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6231e350c8ed4d%3A0x82b0c4539eba972b!2sFISIOTERAPIA%20PODOLOGIA%20P%C3%A9rez%20Cuartero!5e0!3m2!1ses!2ses!4v1759507564608!5m2!1ses!2ses"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de la Clínica"
                ></iframe>
              </div>
              <div className="p-6 bg-card text-center">
                <p className="text-xl font-semibold text-card-foreground">
                  C. San Pablo, 75, 03690 San Vicente del Raspeig
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
