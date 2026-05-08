import { Phone } from "lucide-react";

const nav = [
  { href: "#services", label: "Услуги" },
  { href: "#portfolio", label: "Работы" },
  { href: "#process", label: "Как работаем" },
  { href: "#prices", label: "Цены" },
  { href: "#contacts", label: "Контакты" },
];

export const Header = () => (
  <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
    <div className="container-tight flex h-16 items-center justify-between">
      <a href="#" className="flex items-center gap-2">
        <span className="grid h-9 w-9 place-items-center rounded-md bg-primary text-primary-foreground font-extrabold">Е</span>
        <span className="font-extrabold tracking-tight">Евроремонт<span className="text-accent">66</span></span>
      </a>
      <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
        {nav.map((n) => (
          <a key={n.href} href={n.href} className="hover:text-foreground transition-colors">{n.label}</a>
        ))}
      </nav>
      <a href="tel:+73433000000" className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground hover:opacity-90 transition">
        <Phone className="h-4 w-4" />
        <span className="hidden sm:inline">+7 (343) 300-00-00</span>
        <span className="sm:hidden">Позвонить</span>
      </a>
    </div>
  </header>
);
