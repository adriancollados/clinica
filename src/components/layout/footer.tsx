import { Stethoscope, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <a href="#" className="flex items-center gap-2">
              <Stethoscope className="h-7 w-7 text-primary" />
              <span className="text-2xl font-bold font-headline text-primary">Clinic</span>
            </a>
            <p className="max-w-xs">
              Providing compassionate and comprehensive healthcare for our community.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-headline font-semibold text-lg">Contact Us</h4>
            <ul className="space-y-2">
              <li>123 Health St, Wellness City, 54321</li>
              <li>
                <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                  Phone: (123) 456-7890
                </a>
              </li>
              <li>
                <a href="mailto:contact@clinic.com" className="hover:text-primary transition-colors">
                  Email: contact@clinic.com
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-headline font-semibold text-lg">Follow Us</h4>
            <div className="flex space-x-4">
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
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-4 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
