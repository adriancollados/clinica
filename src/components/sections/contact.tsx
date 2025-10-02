import { Button } from "@/components/ui/button";
import { Mail, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions or want to schedule a visit? Reach out to us. Our team is ready to assist you.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <Button asChild size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
            <a href="mailto:contact@clinic.com">
              <Mail className="mr-2 h-5 w-5" /> Send an Email
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" /> Message on WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
