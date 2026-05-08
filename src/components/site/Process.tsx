const steps = [
  { n: "01", t: "Заявка", d: "Позвоните или оставьте номер — перезвоним за 15 минут в рабочее время." },
  { n: "02", t: "Замер", d: "Бесплатно приедем на объект, посчитаем материалы и сроки." },
  { n: "03", t: "Договор и смета", d: "Фиксируем цену. Доплаты по ходу работ исключены." },
  { n: "04", t: "Работы", d: "Своя бригада, без субподряда. Уборка после каждого этапа." },
  { n: "05", t: "Сдача и гарантия", d: "Принимаете лично. Гарантия 2 года на все виды работ." },
];

export const Process = () => (
  <section id="process" className="py-16 sm:py-24 bg-secondary/40">
    <div className="container-tight">
      <div className="max-w-2xl mb-10">
        <div className="text-sm font-semibold uppercase tracking-wider text-accent">Как работаем</div>
        <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold">5 простых шагов</h2>
      </div>
      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {steps.map((s) => (
          <li key={s.n} className="rounded-xl border border-border bg-card p-5">
            <div className="text-2xl font-extrabold text-accent">{s.n}</div>
            <div className="mt-2 font-bold">{s.t}</div>
            <p className="mt-1.5 text-sm text-muted-foreground">{s.d}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);
