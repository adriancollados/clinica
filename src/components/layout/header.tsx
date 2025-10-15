import { Stethoscope } from "lucide-react";

export default function Header() {
  const navLinks = [
    { name: "Nosotros", href: "#about" },
    { name: "Servicios", href: "#services" },
    { name: "Instalaciones", href: "#facilities" },
    { name: "Ubicación", href: "#location" },
    { name: "Contacto", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <a href="#" className="flex items-center gap-2">
          <Stethoscope className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold font-headline text-primary">ClínicaPerezCuartero</span>
        </a>
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-medium text-foreground/70 transition-colors hover:text-primary"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
