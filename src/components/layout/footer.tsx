import { Stethoscope, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Consts } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 text-center md:text-left">
          <div className="space-y-6 flex flex-col items-center md:items-start">
            <a href="#" className="flex items-center gap-2">
              <Stethoscope className="h-7 w-7 text-primary" />
              <span className="text-2xl font-bold font-headline text-primary">ClínicaPerezCuartero</span>
            </a>
            <p className="max-w-xs">
              Ofreciendo atención compasiva e integral para nuestros pacientes.
            </p>
          </div>
          <div className="space-y-6">
            <h4 className="font-headline font-semibold text-lg">Contáctanos</h4>
            <ul className="space-y-2">
              <li>C. San Pablo, 75, 03690 San Vicente del Raspeig, Alicante</li>
              <li>
                <a href={`tel:${Consts.TELEFONO_CLINICA}`} className="hover:text-primary transition-colors">
                  Teléfono: {Consts.TELEFONO_CLINICA}
                </a>
              </li>
              <li>
              <a href={"mailto:" + Consts.EMAIL_CLINICA} target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Email: {Consts.EMAIL_CLINICA}
                </a>
              </li>
            </ul>
          </div>
          {/*<div className="space-y-4">
            <h4 className="font-headline font-semibold text-lg">Síguenos</h4>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>*/}
        </div>
        <div className="mt-8 border-t border-border pt-4 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Clínica. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
