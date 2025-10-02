import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const teamMembers = [
  {
    id: "employee-1",
    name: "Dra. Emily Carter",
    title: "Directora Médica",
    bio: "La Dra. Carter tiene más de 20 años de experiencia en medicina interna y se dedica a brindar atención centrada en el paciente. Fundó nuestra clínica con la visión de crear un espacio donde la tecnología y la compasión se encuentran.",
  },
  {
    id: "employee-2",
    name: "Dr. Ben Adams",
    title: "Jefe de Cardiología",
    bio: "Un experto líder en salud cardiovascular, el Dr. Adams se especializa en procedimientos diagnósticos y terapéuticos avanzados. Su investigación en cardiología preventiva ha sido publicada en numerosas revistas médicas.",
  },
  {
    id: "employee-3",
    name: "Sarah Jenkins, RN",
    title: "Enfermera Jefe",
    bio: "Sarah lidera nuestro equipo de enfermería con un enfoque en la comodidad y seguridad del paciente. Con 15 años de experiencia en diversos entornos clínicos, se asegura de que nuestros estándares de atención sean insuperables.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">
              Sobre Nuestra Clínica
            </h2>
            <p className="text-lg text-muted-foreground">
              Fundada en los principios de compasión, innovación y excelencia, nuestra clínica ha estado sirviendo a la comunidad por más de una década. Creemos en un enfoque holístico de la atención médica, donde cada paciente es tratado con el máximo respeto y atención personalizada. Nuestras instalaciones de última generación y nuestro equipo médico experto están aquí para apoyarlo en su viaje hacia una mejor salud.
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold font-headline text-primary">
              Conoce a Nuestro Equipo
            </h3>
            <Accordion type="single" collapsible className="w-full">
              {teamMembers.map((member) => {
                const memberImage = PlaceHolderImages.find((img) => img.id === member.id);
                return (
                  <AccordionItem value={member.id} key={member.id}>
                    <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                      {member.name} - <span className="text-muted-foreground font-normal ml-2">{member.title}</span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col sm:flex-row gap-4 pt-2">
                        {memberImage && (
                          <div className="flex-shrink-0">
                            <Image
                              src={memberImage.imageUrl}
                              alt={`Portrait of ${member.name}`}
                              width={100}
                              height={100}
                              className="rounded-full object-cover"
                              data-ai-hint={memberImage.imageHint}
                            />
                          </div>
                        )}
                        <p className="text-muted-foreground">{member.bio}</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
