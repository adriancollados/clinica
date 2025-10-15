import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Stethoscope, HeartPulse, Brain } from "lucide-react";
import { ToothIcon, BoneIcon } from "@/components/icons";
import Image from "next/image";

const MassageIcon = (props: { className?: string }) => (
  <Image
    src={"/masaje%20descarga.jpeg"}
    alt="Masajes de descarga"
    width={100}
    height={100}
    className={props.className}
  />
);

 const RehabilitacionIcon = (props: { className?: string }) => (
  <Image
    src={"/rehabilitacion.png"}
    alt="Rehabilitación"
     width={100}
     height={100}
    className={props.className}
  />
);
const MasajesDescontracturantesIcon = (props: { className?: string }) => (
  <Image
    src={"/masaje.png"}
    alt="Masajes descontracturantes"
     width={100}
     height={100}
    className={props.className}
  />
);


const services = [
  {
    icon: MassageIcon,
    title: "Masajes de descarga",
    description: "Atención experta para tu corazón, desde exámenes preventivos hasta tratamientos avanzados para condiciones complejas.",
  },
  {
    icon: MasajesDescontracturantesIcon,
    title: "Masajes descontracturantes",
    description: "Servicios dentales integrales, incluyendo revisiones de rutina, procedimientos cosméticos y cuidado restaurador.",
  },
  {
    icon: RehabilitacionIcon,
    title: "Rehabilitación",
    description: "Tratamiento especializado para trastornos del sistema nervioso, incluyendo cerebro, médula espinal y nervios.",
  },
  {
    icon: BoneIcon,
    title: "Estudio de la pisada",
    description: "Atención avanzada para huesos, articulaciones, ligamentos y músculos. Te ayudamos a volver a moverte libremente.",
  },
  {
    icon: BoneIcon,
    title: "Plantillas a medida",
    description: "Atención avanzada para huesos, articulaciones, ligamentos y músculos. Te ayudamos a volver a moverte libremente.",
  },
  {
    icon: BoneIcon,
    title: "Ortopedia",
    description: "Atención avanzada para huesos, articulaciones, ligamentos y músculos. Te ayudamos a volver a moverte libremente.",
  },
  {
    icon: BoneIcon,
    title: "Ortopedia",
    description: "Atención avanzada para huesos, articulaciones, ligamentos y músculos. Te ayudamos a volver a moverte libremente.",
  },
  {
    icon: BoneIcon,
    title: "Ortopedia",
    description: "Atención avanzada para huesos, articulaciones, ligamentos y músculos. Te ayudamos a volver a moverte libremente.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos una amplia gama de servicios médicos especializados para satisfacer tus necesidades de salud.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center group hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="items-center">
                <div className="">
                  <service.icon className="h-32 w-32 text-primary" />
                </div>
                <CardTitle className="font-headline pt-4 text-base md:text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
