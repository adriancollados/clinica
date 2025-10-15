import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import Image from "next/image";
import { Consts } from "@/lib/constants";

function WhatsappIcon(props: { className?: string }) {
    return (
        <Image
            src="/whatsapp.png"
            alt="WhatsApp"
            width={20}
            height={20}
            className={props.className}
        />
    );
}

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">
            Ponte en Contacto
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes preguntas o quieres programar una cita? Contáctanos. Nuestro equipo está listo para ayudarte.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <Button asChild size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
            <a href={"mailto:" + Consts.EMAIL_CLINICA} target="_blank">
              <Mail className="mr-2 h-8 w-8" /> Enviar un Correo
            </a>
          </Button>
          <Button asChild size="lg" className="w-full sm:w-auto bg-[#25D366] text-white hover:bg-[#128C7E] transition-transform duration-300 hover:scale-105">
            <a href={`https://wa.me/${Consts.TELEFONO_CLINICA}`} target="_blank" rel="noopener noreferrer">
              <WhatsappIcon className="mr-2 h-8 w-8" /> WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
