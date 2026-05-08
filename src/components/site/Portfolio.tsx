import before1 from "@/assets/before-1.jpg";
import after1 from "@/assets/after-1.jpg";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";

export const Portfolio = () => (
  <section id="portfolio" className="py-16 sm:py-24">
    <div className="container-tight">
      <div className="max-w-2xl mb-10">
        <div className="text-sm font-semibold uppercase tracking-wider text-accent">Работы</div>
        <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold">До и после</h2>
        <p className="mt-3 text-muted-foreground">Реальные объекты в Екатеринбурге за последние 12 месяцев.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <figure className="overflow-hidden rounded-xl border border-border shadow-soft">
          <img src={before1} alt="Старый паркет до реставрации" loading="lazy" width={1024} height={1024} className="aspect-[4/3] w-full object-cover" />
          <figcaption className="bg-card px-4 py-3 text-sm font-semibold">До · ул. Малышева, 88 м²</figcaption>
        </figure>
        <figure className="overflow-hidden rounded-xl border border-border shadow-soft">
          <img src={after1} alt="Восстановленный паркет после циклёвки" loading="lazy" width={1024} height={1024} className="aspect-[4/3] w-full object-cover" />
          <figcaption className="bg-card px-4 py-3 text-sm font-semibold">После · циклёвка + лак, 4 дня</figcaption>
        </figure>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        {[
          { src: p1, label: "Стяжка, ЖК Мичуринский" },
          { src: p2, label: "Кварцвинил, Академический" },
          { src: p3, label: "Ёлка, Центр" },
        ].map((it) => (
          <figure key={it.label} className="overflow-hidden rounded-xl border border-border shadow-soft">
            <img src={it.src} alt={it.label} loading="lazy" width={1024} height={1024} className="aspect-square w-full object-cover" />
            <figcaption className="bg-card px-4 py-3 text-xs text-muted-foreground">{it.label}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);
