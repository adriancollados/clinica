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
            Estamos convenientemente ubicados en el corazón de Wellness City.
          </p>
        </div>
        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden shadow-lg">
            <CardContent className="p-0">
              <div className="w-full aspect-w-16 aspect-h-9 md:aspect-h-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.649615965207!2d-3.703790184596956!3d40.41677537936497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422880a87895e5%3A0x299a4e71937392a4!2sPuerta%20del%20Sol%2C%20Madrid!5e0!3m2!1ses!2ses!4v1620054857474!5m2!1ses!2ses"
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
