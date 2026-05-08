import hero from "@/assets/hero-floor.jpg";
import { Star, MapPin, ShieldCheck } from "lucide-react";

export const Hero = () => (
  <section className="relative overflow-hidden bg-warm">
    <div className="container-tight grid gap-10 py-12 md:py-20 lg:grid-cols-2 lg:items-center">
      <div>
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground">
          <MapPin className="h-3.5 w-3.5 text-accent" /> Екатеринбург и пригород
        </div>
        <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight">
          Ремонт полов <span className="text-accent">под ключ</span> в Екатеринбурге
        </h1>
        <p className="mt-5 max-w-xl text-base sm:text-lg text-muted-foreground">
          Укладываем ламинат, паркет и наливные полы 5 лет. Замер и расчёт бесплатно — мастер приедет в течение 24 часов.
        </p>

        <div className="mt-7 flex flex-col sm:flex-row gap-3">
          <a href="#request" className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground hover:opacity-90 transition shadow-soft">
            Заказать бесплатный замер
          </a>
          <a href="tel:+73433000000" className="inline-flex items-center justify-center rounded-md border border-border bg-card px-6 py-3.5 text-sm font-semibold hover:bg-secondary transition">
            +7 (343) 300-00-00
          </a>
        </div>

        <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-sm">
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-accent text-accent" />)}
            </div>
            <span className="font-semibold">4.9</span>
            <span className="text-muted-foreground">— Яндекс.Карты</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <ShieldCheck className="h-4 w-4 text-accent" />
            Гарантия 2 года по договору
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-card">
          <img src={hero} alt="Уложенный паркет в квартире в Екатеринбурге" width={1600} height={1200} className="h-full w-full object-cover" />
        </div>
        <div className="absolute -bottom-5 -left-5 hidden sm:block rounded-xl border border-border bg-card p-4 shadow-card">
          <div className="text-2xl font-extrabold">5 лет</div>
          <div className="text-xs text-muted-foreground">на рынке Екатеринбурга</div>
        </div>
        <div className="absolute -top-5 -right-5 hidden sm:block rounded-xl border border-border bg-card p-4 shadow-card">
          <div className="text-2xl font-extrabold">240+</div>
          <div className="text-xs text-muted-foreground">объектов сдано</div>
        </div>
      </div>
    </div>
  </section>
);
