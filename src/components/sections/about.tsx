import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const teamMembers = [
  {
    id: "employee-1",
    name: "Dr. Emily Carter",
    title: "Chief Medical Officer",
    bio: "Dr. Carter has over 20 years of experience in internal medicine and is dedicated to providing patient-centered care. She founded our clinic with the vision of creating a space where technology and compassion meet.",
  },
  {
    id: "employee-2",
    name: "Dr. Ben Adams",
    title: "Head of Cardiology",
    bio: "A leading expert in cardiovascular health, Dr. Adams specializes in advanced diagnostic and therapeutic procedures. His research in preventative cardiology has been published in numerous medical journals.",
  },
  {
    id: "employee-3",
    name: "Sarah Jenkins, RN",
    title: "Head Nurse",
    bio: "Sarah leads our nursing team with a focus on patient comfort and safety. With 15 years of experience in various clinical settings, she ensures our standards of care are second to none.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">
              About Our Clinic
            </h2>
            <p className="text-lg text-muted-foreground">
              Founded on the principles of compassion, innovation, and excellence, our clinic has been serving the community for over a decade. We believe in a holistic approach to healthcare, where every patient is treated with the utmost respect and personalized attention. Our state-of-the-art facility and expert medical team are here to support you on your journey to better health.
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold font-headline text-primary">
              Meet Our Team
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
