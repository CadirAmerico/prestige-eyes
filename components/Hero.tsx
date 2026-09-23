import Image from "next/image";
import { CheckCircle2, Smartphone } from "lucide-react";
import { whatsappLink, site } from "@/lib/site";
import { WhatsAppIcon } from "@/components/icons";
import InstallButton from "@/components/InstallButton";
import IosInstallButton from "@/components/IosInstallButton";

const heroImage =
  "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/03/2024_Renault_Captur_II_Automesse_Ludwigsburg_2024_IMG_1506.jpg/1920px-2024_Renault_Captur_II_Automesse_Ludwigsburg_2024_IMG_1506.jpg";
const heroVideoId = "Buj8aSQJd0w";
const heroVideoCredit = "Vídeo: Jet Vap · YouTube";
const heroImageCredit = "Foto: Alexander-93 · CC BY-SA 4.0";

const highlights = [
  "Frota moderna e revisada",
  "Seguro incluído",
  "Lavagem profissional",
];

const stats = [
  { value: "25+", label: "Carros na frota" },
  { value: "1.500+", label: "Clientes satisfeitos" },
  { value: "10+", label: "Anos de experiência" },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-brand-950">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={heroImage}
          alt="Renault Captur 2024"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <iframe
          title="Vídeo de lavagem a vapor"
          aria-hidden="true"
          tabIndex={-1}
          src={`https://www.youtube-nocookie.com/embed/${heroVideoId}?autoplay=1&mute=1&loop=1&playlist=${heroVideoId}&controls=0&disablekb=1&fs=0&iv_load_policy=3&modestbranding=1&playsinline=1&rel=0`}
          allow="autoplay; encrypted-media; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[56.25vw] w-screen min-h-full min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950/95 via-brand-950/70 to-brand-950/20" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-brand-950 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="max-w-2xl">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-200 ring-1 ring-white/20 backdrop-blur">
            <CheckCircle2 className="size-4" />
            Eiras · {site.city}
          </p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Alugue um carro ou deixe o seu{" "}
            <span className="text-brand-300">impecável</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85">
            {site.name} oferece aluguer de viaturas e lavagem profissional em{" "}
            {site.city}. Qualidade, transparência e preços acessíveis para
            todos.
          </p>

          <ul className="mt-6 space-y-2">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm font-medium text-white"
              >
                <CheckCircle2 className="size-5 text-brand-400" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#frota"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-brand-900 shadow-lg transition hover:bg-brand-50"
            >
              Ver frota
            </a>
            <a
              href={whatsappLink(
                "Olá! Quero saber mais sobre os vossos serviços.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-400"
            >
              <WhatsAppIcon className="size-4" />
              Pedir orçamento
            </a>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <InstallButton className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm font-bold text-white ring-1 ring-white/25 backdrop-blur transition enabled:hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-50">
              <Smartphone className="size-4" />
              App Android
            </InstallButton>
            <IosInstallButton className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm font-bold text-white ring-1 ring-white/25 backdrop-blur transition hover:bg-white/20" />
          </div>
        </div>

        <div className="mt-12 grid max-w-2xl grid-cols-3 gap-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl bg-white/10 px-4 py-4 text-center ring-1 ring-white/15 backdrop-blur"
            >
              <p className="text-2xl font-extrabold text-white lg:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-[11px] font-medium leading-tight text-brand-200">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-2 right-3 text-right text-[10px] leading-tight text-white/60">
        <p>{heroVideoCredit}</p>
        <p>{heroImageCredit}</p>
      </div>
    </section>
  );
}