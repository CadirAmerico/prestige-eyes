import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Car, Check, Sparkles, Wrench } from "lucide-react";
import { services, whatsappLink, basePath } from "@/lib/site";
import { WhatsAppIcon } from "@/components/icons";

const servicesBg = `${basePath}/fortador.webp`;

const icons = {
  car: Car,
  sparkles: Sparkles,
  wrench: Wrench,
} as const;

export default function Services() {
  return (
    <section
      id="servicos"
      className="relative scroll-mt-16 overflow-hidden py-20 lg:py-28"
    >
      <div className="absolute inset-0">
        <Image
          src={servicesBg}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-brand-950/40" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-wider text-brand-300">
            Serviços
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Três serviços, uma só qualidade
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-brand-100/85">
            Tudo o que o seu veículo precisa: aluguer simples e transparente ou
            uma lavagem digna de um carro novo.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = icons[service.icon as keyof typeof icons];
            return (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-3xl border border-white/20 bg-transparent p-8 transition hover:-translate-y-1"
              >
                <div className="flex items-start justify-between">
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-white/15 text-white transition group-hover:bg-brand-500 group-hover:text-white">
                    <Icon className="size-7" />
                  </div>
                </div>
                <h3 className="mt-6 text-2xl font-bold text-white">
                  {service.title}
                </h3>
                <p className="mt-3 leading-relaxed text-brand-100/85">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm font-medium text-white/90"
                    >
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-white/20 text-white">
                        <Check className="size-3.5" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href={whatsappLink(
                      `Olá! Quero saber mais sobre o serviço de ${service.title.toLowerCase()}.`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-white hover:bg-white hover:text-brand-900"
                  >
                    <WhatsAppIcon className="size-4" />
                    Pedir informação
                  </a>
                  {service.icon !== "car" && (
                    <Link
                      href="/servicos"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-brand-900 transition hover:bg-brand-50"
                    >
                      Ver serviços e preços
                      <ArrowRight className="size-4" />
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}