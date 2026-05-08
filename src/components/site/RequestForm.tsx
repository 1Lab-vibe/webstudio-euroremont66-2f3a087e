import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export const RequestForm = () => {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    toast({ title: "Заявка отправлена", description: "Перезвоним в течение 15 минут." });
  };

  return (
    <section id="request" className="py-16 sm:py-24">
      <div className="container-tight">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center rounded-2xl border border-border bg-card p-6 sm:p-10 shadow-card">
          <div>
            <div className="text-sm font-semibold uppercase tracking-wider text-accent">Заявка</div>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold">Бесплатный замер за 24 часа</h2>
            <p className="mt-3 text-muted-foreground">Оставьте номер — посчитаем точную смету по вашему объекту в Екатеринбурге. Без навязывания и спама.</p>
            <ul className="mt-6 space-y-3 text-sm">
              {["Замер и расчёт — 0 ₽", "Фиксированная цена в договоре", "Свои материалы со скидкой до 15%"].map((t) => (
                <li key={t} className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" /> {t}</li>
              ))}
            </ul>
          </div>

          {sent ? (
            <div id="form-success" className="rounded-xl bg-secondary/60 p-8 text-center">
              <CheckCircle2 className="mx-auto h-10 w-10 text-accent" />
              <h3 className="mt-3 text-xl font-bold">Спасибо!</h3>
              <p className="mt-1 text-sm text-muted-foreground">Мы получили заявку и перезвоним в ближайшее время.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-4">
              <div className="grid gap-2">
                <label className="text-sm font-medium" htmlFor="name">Имя</label>
                <input id="name" required name="name" className="h-11 rounded-md border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Как к вам обращаться" />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium" htmlFor="phone">Телефон</label>
                <input id="phone" required type="tel" name="phone" className="h-11 rounded-md border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="+7 (___) ___-__-__" />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium" htmlFor="task">Что нужно сделать</label>
                <textarea id="task" name="task" rows={3} className="rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Например: уложить ламинат 45 м², квартира на Уралмаше" />
              </div>
              <button type="submit" className="h-12 rounded-md bg-accent text-sm font-semibold text-accent-foreground hover:opacity-90 transition">
                Получить расчёт
              </button>
              <p className="text-xs text-muted-foreground">Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
