import { Layers, Hammer, Droplets, Square, Wrench, Ruler } from "lucide-react";

const services = [
  { icon: Layers, title: "Укладка ламината", price: "от 350 ₽/м²", desc: "Подложка, плинтус, порожки. Уборка после работ." },
  { icon: Square, title: "Паркет и инженерная доска", price: "от 950 ₽/м²", desc: "Ёлка, палуба, художественный набор. Финиш — масло или лак." },
  { icon: Droplets, title: "Наливные полы", price: "от 450 ₽/м²", desc: "Самовыравнивающиеся смеси под любое финишное покрытие." },
  { icon: Hammer, title: "Стяжка", price: "от 550 ₽/м²", desc: "Полусухая и мокрая, с армированием. Подготовка основания." },
  { icon: Wrench, title: "Циклёвка и реставрация", price: "от 600 ₽/м²", desc: "Восстановим старый паркет без замены — сэкономим бюджет." },
  { icon: Ruler, title: "Демонтаж покрытий", price: "от 150 ₽/м²", desc: "Аккуратно снимем старый пол, вывезем мусор." },
];

export const Services = () => (
  <section id="services" className="py-16 sm:py-24 bg-secondary/40">
    <div className="container-tight">
      <div className="max-w-2xl mb-12">
        <div className="text-sm font-semibold uppercase tracking-wider text-accent">Услуги</div>
        <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold">Делаем пол любой сложности</h2>
        <p className="mt-3 text-muted-foreground">От простой замены ламината до комплексной подготовки основания и укладки художественного паркета.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div key={s.title} className="group rounded-xl border border-border bg-card p-6 hover:shadow-card hover:-translate-y-0.5 transition-all">
            <div className="grid h-11 w-11 place-items-center rounded-lg bg-accent/10 text-accent">
              <s.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
            <div className="mt-4 text-sm font-semibold text-accent">{s.price}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
