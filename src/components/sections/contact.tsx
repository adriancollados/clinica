import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

function WhatsappIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91s-4.45-9.91-9.91-9.91z" />
            <path d="M17.22 14.23c-.15-.08-1.06-.52-1.22-.58-.17-.06-.29-.09-.42.09-.12.18-.46.58-.57.7-.1.12-.2.13-.37.04-.17-.09-1.02-.38-1.94-1.2-.72-.63-1.2-1.4-1.34-1.64-.14-.24-.02-.37.07-.48.08-.1.18-.26.27-.39.1-.12.13-.21.2-.36.06-.15.03-.28-.02-.37-.05-.09-.42-1.02-.57-1.4-.15-.38-.3-.32-.42-.32h-.4c-.12 0-.3.04-.46.22-.16.18-.62.6-1.02 1.58-.4 1 .23 2.34.6 3.02.37.68 1.4 2.43 3.38 3.53.5.29.84.47 1.13.6.45.2.83.17 1.14.1.34-.07 1.06-.43 1.2-.85.16-.41.16-.76.11-.85-.05-.08-.17-.13-.32-.21z" />
        </svg>
    );
}

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">
            Ponte en Contacto
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes preguntas o quieres programar una visita? Contáctanos. Nuestro equipo está listo para ayudarte.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <Button asChild size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
            <a href="mailto:contact@clinic.com">
              <Mail className="mr-2 h-5 w-5" /> Enviar un Correo
            </a>
          </Button>
          <Button asChild size="icon" variant="outline" className="w-12 h-12 sm:w-auto sm:h-auto rounded-full p-3 sm:rounded-md">
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
              <WhatsappIcon className="h-6 w-6" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
