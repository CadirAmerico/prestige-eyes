import Image from "next/image";
import Link from "next/link";
import { site, basePath } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-brand-950 py-12 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:px-6 md:flex-row lg:px-8">
        <div className="flex items-center gap-2.5">
          <Image
            src={`${basePath}/logo-prestige.svg`}
            alt={`Logo ${site.name}`}
            width={72}
            height={72}
            priority
            className="size-9 rounded-xl ring-2 ring-brand-400/60"
          />
          <div className="leading-none">
            <p className="text-base font-bold">
              {site.name} · {site.city}
            </p>
            <p className="mt-1 text-xs text-brand-300">
              Aluguer e lavagem de viaturas
            </p>
          </div>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-brand-200">
          <Link href="#servicos" className="transition hover:text-white">
            Serviços
          </Link>
          <Link href="#frota" className="transition hover:text-white">
            Frota
          </Link>
          <Link href="#contactos" className="transition hover:text-white">
            Contactos
          </Link>
        </nav>

        <p className="text-sm text-brand-300">
          © {new Date().getFullYear()} {site.name}. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}