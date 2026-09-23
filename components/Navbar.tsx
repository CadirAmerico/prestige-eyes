"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { whatsappLink, site, basePath } from "@/lib/site";
import { WhatsAppIcon } from "@/components/icons";

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#frota", label: "Frota" },
  { href: "#contactos", label: "Contactos" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-950/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="#inicio"
          className="flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <Image
            src={`${basePath}/logo-prestige.svg`}
            alt={`Logo ${site.name}`}
            width={72}
            height={72}
            priority
            className="size-10 rounded-xl ring-2 ring-brand-400/60"
          />
          <span className="flex flex-col leading-none">
            <span className="text-lg font-bold text-white">
              {site.name}
            </span>
            <span className="text-xs font-medium text-brand-300">
              Aluguer &amp; Lavagem · {site.city}
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-brand-100 transition hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={whatsappLink(
              "Olá! Gostaria de fazer uma reserva de aluguer ou lavagem.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-400"
          >
            <WhatsAppIcon className="size-4" />
            WhatsApp
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-10 items-center justify-center rounded-md text-white transition hover:bg-white/10 lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-brand-950 px-4 pb-6 pt-2 lg:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-brand-100 transition hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={whatsappLink(
                "Olá! Gostaria de fazer uma reserva de aluguer ou lavagem.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-4 py-2.5 text-sm font-semibold text-white"
            >
              <WhatsAppIcon className="size-4" />
              Contactar via WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}