import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Stethoscope, HeartPulse, Brain } from "lucide-react";
import { ToothIcon, BoneIcon } from "@/components/icons";

const services = [
  {
    icon: HeartPulse,
    title: "Cardiology",
    description: "Expert care for your heart, from preventative screenings to advanced treatments for complex conditions.",
  },
  {
    icon: ToothIcon,
    title: "Dentistry",
    description: "Comprehensive dental services, including routine check-ups, cosmetic procedures, and restorative care.",
  },
  {
    icon: Brain,
    title: "Neurology",
    description: "Specialized treatment for disorders of the nervous system, including the brain, spinal cord, and nerves.",
  },
  {
    icon: BoneIcon,
    title: "Orthopedics",
    description: "Advanced care for bones, joints, ligaments, and muscles. We help you get back to moving freely.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer a wide range of specialized medical services to meet your health needs.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center group hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="items-center">
                <div className="bg-primary/10 p-4 rounded-full group-hover:bg-primary transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline pt-4">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
