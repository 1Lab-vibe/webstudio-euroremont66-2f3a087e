import { Star, Quote } from "lucide-react";

const items = [
  {
    name: "Анна К.",
    place: "ЖК Меридиан, Екатеринбург",
    text: "Перекладывали ламинат в двушке после потопа. Приехали день в день, выровняли стяжку, всё аккуратно. Цена не выросла после замера.",
    rating: 5,
  },
  {
    name: "Сергей М.",
    place: "Академический",
    text: "Делали наливной пол в кухне-гостиной 38 м². Ровно, без пыли, мебель сами вынесли. Через неделю уложили кварцвинил.",
    rating: 5,
  },
  {
    name: "Ольга и Дмитрий",
    place: "Уралмаш",
    text: "Циклевали старый паркет — думали менять, оставили. Получилось как новый. Спасибо мастеру Андрею.",
    rating: 5,
  },
];

export const Reviews = () => (
  <section id="reviews" className="py-16 sm:py-24">
    <div className="container-tight">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
        <div>
          <div className="text-sm font-semibold uppercase tracking-wider text-accent">Отзывы</div>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold">Что говорят клиенты</h2>
        </div>
        <a
          href="https://yandex.ru/maps/54/yekaterinburg/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2 text-sm font-medium hover:bg-secondary transition"
        >
          <span className="font-bold">Яндекс</span>
          <span className="text-muted-foreground">·</span>
          <div className="flex">
            {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />)}
          </div>
          <span className="font-semibold">4.9 / 5</span>
        </a>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {items.map((r) => (
          <article key={r.name} className="rounded-xl border border-border bg-card p-6 shadow-soft">
            <Quote className="h-6 w-6 text-accent/70" />
            <p className="mt-3 text-[15px] leading-relaxed">{r.text}</p>
            <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
              <div>
                <div className="font-semibold text-sm">{r.name}</div>
                <div className="text-xs text-muted-foreground">{r.place}</div>
              </div>
              <div className="flex">
                {[...Array(r.rating)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />)}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
