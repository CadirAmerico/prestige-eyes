"use client";

import Image from "next/image";
import { Monitor, Smartphone } from "lucide-react";
import { basePath } from "@/lib/site";
import InstallButton, { useInstallPrompt } from "@/components/InstallButton";
import IosInstallButton from "@/components/IosInstallButton";

export default function DownloadApp() {
  const { canInstall, installed } = useInstallPrompt();
  const disabledCls =
    "disabled:cursor-not-allowed disabled:opacity-50";

  return (
    <section id="app" className="scroll-mt-16 bg-white py-20 lg:py-28">
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

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <InstallButton
              className={`inline-flex items-center justify-center gap-2 rounded-full bg-brand-950 px-6 py-3.5 text-sm font-bold text-white shadow-lg transition enabled:hover:bg-brand-800 ${disabledCls}`}
            >
              <Smartphone className="size-5" />
              Download para Android
            </InstallButton>
            <InstallButton
              className={`inline-flex items-center justify-center gap-2 rounded-full border-2 border-brand-950 px-6 py-3.5 text-sm font-bold text-brand-950 transition enabled:hover:bg-brand-950 enabled:hover:text-white ${disabledCls}`}
            >
              <Monitor className="size-5" />
              Download para Windows
            </InstallButton>
            <IosInstallButton className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-dashed border-brand-300 px-6 py-3.5 text-sm font-bold text-brand-800 transition hover:border-brand-600 hover:text-brand-950" />
          </div>

          <p className="mt-4 text-sm text-zinc-500">
            {installed
              ? "O aplicativo já está instalado neste dispositivo."
              : "No Chrome ou Edge, clique para instalar. No iPhone, use o botão iOS e siga os passos."}
          </p>
          {!canInstall && !installed && (
            <p className="mt-2 text-xs text-zinc-400">
              Os botões ativam automaticamente quando o navegador permite a
              instalação.
            </p>
          )}
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