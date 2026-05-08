import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const Contacts = () => (
  <section id="contacts" className="py-16 sm:py-24 bg-secondary/40">
    <div className="container-tight grid gap-8 lg:grid-cols-2">
      <div>
        <div className="text-sm font-semibold uppercase tracking-wider text-accent">Контакты</div>
        <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold">Свяжитесь напрямую</h2>
        <p className="mt-3 text-muted-foreground max-w-md">Работаем по Екатеринбургу и в радиусе 30 км. Выезд мастера для замера — бесплатно.</p>

        <dl className="mt-8 space-y-5">
          <div className="flex items-start gap-3">
            <Phone className="h-5 w-5 text-accent mt-0.5" />
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Телефон</dt>
              <dd><a href="tel:+73433000000" className="text-lg font-semibold hover:text-accent">+7 (343) 300-00-00</a></dd>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="h-5 w-5 text-accent mt-0.5" />
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Почта</dt>
              <dd><a href="mailto:info@euroremont66.ru" className="font-semibold hover:text-accent">info@euroremont66.ru</a></dd>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-accent mt-0.5" />
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Адрес офиса</dt>
              <dd className="font-semibold">г. Екатеринбург, ул. Малышева, 51</dd>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="h-5 w-5 text-accent mt-0.5" />
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Часы работы</dt>
              <dd className="font-semibold">Пн–Сб, 9:00 — 20:00</dd>
            </div>
          </div>
        </dl>
      </div>

      <div className="overflow-hidden rounded-2xl border border-border shadow-soft">
        <iframe
          title="Карта Екатеринбург"
          src="https://yandex.ru/map-widget/v1/?ll=60.597474%2C56.838011&z=12"
          width="100%"
          height="100%"
          className="min-h-[360px] w-full border-0"
          loading="lazy"
        />
      </div>
    </div>
  </section>
);
