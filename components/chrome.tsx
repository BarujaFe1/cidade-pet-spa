import { site, whatsappUrl } from "@/lib/site";

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12.04 2a9.9 9.9 0 0 0-8.6 14.9L2 22l5.25-1.38A9.9 9.9 0 1 0 12.04 2Zm0 1.8a8.1 8.1 0 1 1-4.13 15.08l-.3-.18-3.06.8.82-2.98-.2-.31a8.1 8.1 0 0 1 6.87-12.4Zm-3.5 4.1c-.19 0-.5.07-.76.35-.26.28-1 .98-1 2.4 0 1.42 1.03 2.79 1.17 2.98.14.19 2 3.28 4.96 4.46 2.45.98 2.95.79 3.48.74.53-.05 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.55-.33-.28-.14-1.68-.83-1.94-.92-.26-.1-.45-.14-.64.14-.19.28-.74.92-.9 1.11-.17.19-.33.21-.62.07a7.65 7.65 0 0 1-2.26-1.4 8.5 8.5 0 0 1-1.57-1.96c-.16-.28-.02-.43.12-.57.13-.13.29-.33.43-.5.14-.16.19-.28.29-.47.09-.19.05-.35-.02-.5-.08-.14-.65-1.55-.89-2.12-.23-.56-.47-.48-.65-.49h-.55Z" />
    </svg>
  );
}

export function CtaButton({
  children,
  message,
  variant = "primary",
  className = "",
}: {
  children: React.ReactNode;
  message?: string;
  variant?: "primary" | "outline" | "light";
  className?: string;
}) {
  const styles =
    variant === "primary"
      ? "bg-sage-deep text-parchment hover:bg-ink"
      : variant === "light"
        ? "bg-parchment text-sage-deep hover:bg-cream-deep"
        : "border border-sage-deep/30 text-sage-deep hover:border-sage-deep hover:bg-sage-soft";
  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-base font-semibold transition-colors ${styles} ${className}`}
    >
      <WhatsAppIcon />
      {children}
    </a>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-xs font-bold uppercase tracking-[0.22em] text-clay-deep">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {description ? <p className="mt-4 text-base leading-relaxed text-ink-soft">{description}</p> : null}
    </div>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/95 backdrop-blur">
      <div className="bg-sage-deep px-4 py-1.5 text-center text-[11px] font-medium tracking-wide text-parchment/90 sm:text-xs">
        Conceito comercial não oficial · Demonstração preparada para apresentação
      </div>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#inicio" className="flex items-baseline gap-2">
          <span className="font-display text-xl font-semibold text-ink sm:text-2xl">
            Cidade Pet Spa
          </span>
          <span className="hidden text-xs font-medium uppercase tracking-[0.18em] text-sage-deep sm:inline">
            São Carlos
          </span>
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium text-ink-soft lg:flex" aria-label="Navegação principal">
          <a className="hover:text-ink" href="#servicos">Serviços</a>
          <a className="hover:text-ink" href="#diferenciais">Diferenciais</a>
          <a className="hover:text-ink" href="#como-funciona">Como funciona</a>
          <a className="hover:text-ink" href="#galeria">Espaço</a>
          <a className="hover:text-ink" href="#localizacao">Onde estamos</a>
        </nav>
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-sage-deep px-4 py-2.5 text-sm font-semibold text-parchment transition-colors hover:bg-ink sm:px-5"
        >
          <WhatsAppIcon className="h-4 w-4" />
          Agendar
        </a>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-ink text-parchment/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-semibold text-parchment">{site.brand.name}</p>
          <p className="mt-2 text-sm leading-relaxed">
            {site.brand.tagline}.<br />
            {site.address.full}
          </p>
        </div>
        <div className="text-sm">
          <p className="font-semibold uppercase tracking-[0.18em] text-parchment/60">Contato</p>
          <ul className="mt-3 space-y-2">
            <li>
              <a className="hover:text-parchment" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                WhatsApp: {site.whatsapp.display}
              </a>
            </li>
            <li>
              <a className="hover:text-parchment" href={site.phone.href}>
                Telefone: {site.phone.display}
              </a>
            </li>
            <li>
              <a className="hover:text-parchment" href={site.social.instagram} target="_blank" rel="noopener noreferrer">
                Instagram: {site.social.instagramHandle}
              </a>
            </li>
          </ul>
        </div>
        <div className="text-sm">
          <p className="font-semibold uppercase tracking-[0.18em] text-parchment/60">Como chegar</p>
          <ul className="mt-3 space-y-2">
            <li>
              <a className="hover:text-parchment" href={site.location.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                Abrir no Google Maps
              </a>
            </li>
            <li>
              <a className="hover:text-parchment" href={site.location.wazeUrl} target="_blank" rel="noopener noreferrer">
                Abrir no Waze
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-parchment/15">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs leading-relaxed text-parchment/60 sm:px-6">
          {site.footer.demoNotice} Dados públicos revalidados em 03/09/2026 — ver relatório de implementação.
        </p>
      </div>
    </footer>
  );
}
