"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Monitor, Smartphone } from "lucide-react";
import { basePath } from "@/lib/site";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export default function DownloadApp() {
  const [deferred, setDeferred] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [installed, setInstalled] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(display-mode: standalone)").matches,
  );

  useEffect(() => {
    const onPrompt = (e: Event) => {
      e.preventDefault();
      setDeferred(e as BeforeInstallPromptEvent);
    };
    const onInstalled = () => {
      setInstalled(true);
      setDeferred(null);
    };
    window.addEventListener("beforeinstallprompt", onPrompt);
    window.addEventListener("appinstalled", onInstalled);
    return () => {
      window.removeEventListener("beforeinstallprompt", onPrompt);
      window.removeEventListener("appinstalled", onInstalled);
    };
  }, []);

  const install = async () => {
    if (!deferred) return;
    await deferred.prompt();
    await deferred.userChoice;
    setDeferred(null);
  };

  return (
    <section
      id="app"
      className="scroll-mt-16 bg-white py-20 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-brand-600">
            Aplicativo
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-brand-950 sm:text-4xl">
            Leve a Prestige Eyes consigo
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-zinc-600">
            Instale o aplicativo no telemóvel ou computador: acesso rápido,
            ecrã cheio e sem precisar da Play Store.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={install}
              disabled={!deferred || installed}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-950 px-6 py-3.5 text-sm font-bold text-white shadow-lg transition enabled:hover:bg-brand-800 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Smartphone className="size-5" />
              {installed ? "Instalado no Android" : "Download para Android"}
            </button>
            <button
              type="button"
              onClick={install}
              disabled={!deferred || installed}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-brand-950 px-6 py-3.5 text-sm font-bold text-brand-950 transition enabled:hover:bg-brand-950 enabled:hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Monitor className="size-5" />
              {installed ? "Instalado no Windows" : "Download para Windows"}
            </button>
          </div>

          <p className="mt-4 text-sm text-zinc-500">
            {installed
              ? "O aplicativo já está instalado neste dispositivo."
              : "No Chrome ou Edge, clique para instalar. No iPhone: Partilhar → Adicionar ao ecrã principal."}
          </p>
        </div>

        <div className="mx-auto w-full max-w-xs rounded-3xl border border-zinc-200 bg-zinc-50 p-6 text-center shadow-sm">
          <Image
            src={`${basePath}/qr-app.png`}
            alt="QR code para instalar o aplicativo Prestige Eyes"
            width={400}
            height={400}
            className="h-auto w-full rounded-2xl"
          />
          <p className="mt-4 text-sm font-medium text-zinc-600">
            Aponte a câmara do telemóvel para instalar
          </p>
        </div>
      </div>
    </section>
  );
}