export const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="container-tight flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <div className="flex items-center gap-2">
        <span className="grid h-7 w-7 place-items-center rounded-md bg-primary text-primary-foreground text-xs font-extrabold">Е</span>
        <span>© {new Date().getFullYear()} Евроремонт66 · Ремонт полов в Екатеринбурге</span>
      </div>
      <div className="flex gap-5">
        <a href="#services" className="hover:text-foreground">Услуги</a>
        <a href="#contacts" className="hover:text-foreground">Контакты</a>
      </div>
    </div>
  </footer>
);
