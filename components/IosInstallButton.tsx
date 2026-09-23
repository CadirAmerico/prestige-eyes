"use client";

import { useState } from "react";
import Image from "next/image";
import { Share, Smartphone, X } from "lucide-react";
import { basePath } from "@/lib/site";

const steps = [
  "Abra este site no Safari",
  "Toque em Partilhar (quadrado com seta para cima)",
  "Escolha “Adicionar ao Ecrã Principal” e toque em Adicionar",
];

export default function IosInstallButton({
  className,
}: {
  className?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={className}
      >
        <Smartphone className="size-4" />
        Download para iOS
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-end justify-center bg-black/60 p-4 sm:items-center"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Como instalar no iPhone"
        >
          <div
            className="w-full max-w-sm rounded-3xl bg-white p-6 text-left shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <h3 className="text-lg font-extrabold text-brand-950">
                Instalar no iPhone
              </h3>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Fechar"
                className="flex size-8 items-center justify-center rounded-full bg-zinc-100 text-zinc-600 transition hover:bg-zinc-200"
              >
                <X className="size-4" />
              </button>
            </div>

            <ol className="mt-4 space-y-3">
              {steps.map((step, i) => (
                <li key={step} className="flex items-start gap-3 text-sm text-zinc-700">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-600 text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  {i === 1 ? (
                    <span className="inline-flex flex-wrap items-center gap-1.5">
                      Toque em Partilhar
                      <Share className="size-4 text-brand-600" />
                      (quadrado com seta para cima)
                    </span>
                  ) : (
                    step
                  )}
                </li>
              ))}
            </ol>

            <Image
              src={`${basePath}/qr-app.png`}
              alt="QR code para abrir o site no iPhone"
              width={400}
              height={400}
              className="mx-auto mt-5 h-auto w-40 rounded-2xl border border-zinc-200"
            />
            <p className="mt-3 text-center text-xs text-zinc-500">
              Ou aponte a câmara para abrir o site e siga os passos
            </p>
          </div>
        </div>
      )}
    </>
  );
}