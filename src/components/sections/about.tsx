"use client";

import Image from "next/image";
import { useState } from "react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

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
    bio: "Un experto líder en salud cardiovascular, el Dr. Adams se especializa en procedimientos diagnósticos y terapéuticos avanzados. Su investigación en cardiología preventiva ha sido publicada en numerous revistas médicas.",
  },
  {
    id: "employee-3",
    name: "Sarah Jenkins, RN",
    title: "Enfermera Jefe",
    bio: "Sarah lidera nuestro equipo de enfermería con un enfoque en la comodidad y seguridad del paciente. Con 15 años de experiencia en diversos entornos clínicos, se asegura de que nuestros estándares de atención sean insuperables.",
  },
];

export default function About() {
  const [selectedMember, setSelectedMember] = useState<string | null>(null);

  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-1 gap-12 items-start">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">
              Sobre Nuestra Clínica
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Fundada en los principios de compasión, innovación y excelencia, nuestra clínica ha estado sirviendo a la comunidad por más de una década. Creemos en un enfoque holístico de la atención médica, donde cada paciente es tratado con el máximo respeto y atención personalizada. Nuestras instalaciones de última generación y nuestro equipo médico experto están aquí para apoyarlo en su viaje hacia una mejor salud.
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold font-headline text-primary text-center">
              Conoce a Nuestro Equipo
            </h3>
            <div className="flex flex-col md:flex-row gap-4 h-[450px] md:h-[400px]">
              {teamMembers.map((member) => {
                const memberImage = PlaceHolderImages.find((img) => img.id === member.id);
                const isSelected = selectedMember === member.id;

                return (
                  <Card
                    key={member.id}
                    className={cn(
                      "relative overflow-hidden cursor-pointer transition-all duration-500 ease-in-out",
                      isSelected ? "flex-[5]" : "flex-[1]"
                    )}
                    onClick={() => setSelectedMember(prev => prev === member.id ? null : member.id)}
                  >
                    {memberImage && (
                      <Image
                        src={memberImage.imageUrl}
                        alt={`Portrait of ${member.name}`}
                        fill
                        className="object-cover"
                        data-ai-hint={memberImage.imageHint}
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <CardContent className="relative z-10 flex flex-col justify-end h-full p-6 text-white">
                      <div className="transition-opacity duration-500">
                        <h4 className="text-xl font-bold font-headline">{member.name}</h4>
                        <p className="text-sm text-white/80">{member.title}</p>
                        <div
                          className={cn(
                            "transition-all duration-500 ease-in-out overflow-hidden max-h-0",
                            {
                              "max-h-40 pt-2": isSelected,
                            }
                          )}
                        >
                          <p className="text-white/90">{member.bio}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
