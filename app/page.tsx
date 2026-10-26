import { CtaButton, SectionHeading, SiteFooter, SiteHeader } from "@/components/chrome";
import { site, whatsappUrl } from "@/lib/site";

function Stars() {
  return (
    <div className="flex items-center gap-1" role="img" aria-label={`Nota ${site.reputation.score} de 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-clay" aria-hidden="true">
          <path d="M10 1.5 12.6 7l6 .6-4.5 4 1.3 5.9L10 14.4 4.6 17.5l1.3-5.9-4.5-4 6-.6L10 1.5Z" />
        </svg>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="inicio">
        {/* 1 — HERO */}
        <section className="overflow-hidden bg-cream">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-12 sm:px-6 sm:pt-16 lg:grid-cols-2 lg:gap-14 lg:pb-24 lg:pt-20">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-sage-deep/25 bg-sage-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-sage-deep">
                Banho · Tosa · Estética — São Carlos/SP
              </p>
              <h1 className="mt-5 font-display text-4xl font-medium leading-[1.08] text-ink sm:text-5xl lg:text-6xl">
                Cuidado que eles sentem. Tranquilidade que você percebe.
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
                {site.hero.subheadline}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <CtaButton>{site.hero.primaryCta}</CtaButton>
                <a
                  href="#servicos"
                  className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-base font-semibold text-sage-deep underline-offset-4 hover:underline"
                >
                  Conhecer os serviços
                </a>
              </div>
              <div className="mt-8 flex items-center gap-3 border-t border-ink/10 pt-6">
                <Stars />
                <p className="text-sm text-ink-soft">
                  <strong className="font-semibold text-ink">{site.reputation.score}</strong> ·{" "}
                  {site.reputation.count}+ {site.reputation.countLabel} públicas
                </p>
              </div>
            </div>

            {/* Prova visual imediata — composição conceitual (fotos reais entram aqui após autorização) */}
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="relative overflow-hidden rounded-t-[999px] rounded-b-[2rem] bg-gradient-to-b from-sage-soft via-cream-deep to-clay-soft px-8 pb-10 pt-16 text-center shadow-xl shadow-ink/10">
                <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-clay font-display text-5xl font-semibold text-parchment">
                  C
                </div>
                <svg viewBox="0 0 300 40" className="mx-auto mt-8 w-3/4 text-sage-deep/50" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M5 28c25-14 45 6 70-4s45 6 70-4 45 6 70-4 45 8 80-2" strokeLinecap="round" />
                  <path d="M5 36c25-10 45 4 70-3s45 4 70-3 45 4 70-3 45 6 80-1" strokeLinecap="round" opacity="0.5" />
                </svg>
                <p className="mt-6 font-display text-2xl font-medium text-ink">Um banho sem pressa,</p>
                <p className="mt-1 text-sm uppercase tracking-[0.22em] text-ink-soft">do jeito que eles gostam</p>
              </div>
              <div className="absolute -bottom-5 left-1/2 w-[92%] -translate-x-1/2 rounded-2xl border border-ink/10 bg-parchment px-5 py-4 shadow-lg shadow-ink/10">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-ink">Agendamento pelo WhatsApp</p>
                    <p className="text-xs text-ink-soft">Resposta direta da equipe · {site.whatsapp.display}</p>
                  </div>
                  <a
                    href={whatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 rounded-full bg-sage-deep px-4 py-2 text-sm font-semibold text-parchment hover:bg-ink"
                  >
                    Chamar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2 — PROVA DE REPUTAÇÃO */}
        <section id="reputacao" className="border-y border-ink/10 bg-parchment">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-12 text-center sm:px-6 lg:flex-row lg:justify-between lg:text-left">
            <div className="flex items-center gap-5">
              <p className="font-display text-6xl font-semibold text-sage-deep sm:text-7xl">
                {site.reputation.score}
              </p>
              <div className="text-left">
                <Stars />
                <p className="mt-2 text-base font-semibold text-ink">
                  {site.reputation.count}+ {site.reputation.countLabel} públicas
                </p>
                <p className="mt-1 max-w-xs text-xs leading-relaxed text-ink-soft">
                  Via {site.reputation.sourceName} ({site.reputation.sourceNote}) · verificado em{" "}
                  {site.reputation.verifiedOn}
                </p>
              </div>
            </div>
            <p className="max-w-md text-base leading-relaxed text-ink-soft">
              A reputação já existe — este espaço organiza o que clientes públicos já dizem e
              transforma em confiança para quem chega agora.
            </p>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-ink/20 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink hover:bg-cream"
            >
              Ver no Instagram · {site.social.instagramHandle}
            </a>
          </div>
        </section>

        {/* 3 — SERVIÇOS */}
        <section id="servicos" className="scroll-mt-24 bg-cream">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
            <SectionHeading
              eyebrow="Serviços"
              title="O essencial, bem feito"
              description="Banho, tosa e estética — sem promessas de saúde, sem enrolação. O que seu pet precisa, com o cuidado que ele merece."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {site.services.map((service, i) => (
                <article
                  key={service.title}
                  className="rounded-3xl border border-ink/10 bg-parchment p-7 shadow-sm transition-shadow hover:shadow-md"
                >
                  <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-clay-deep">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-medium text-ink">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{service.description}</p>
                </article>
              ))}
            </div>
            <div className="mt-10 text-center">
              <p className="text-sm text-ink-soft">Valores e disponibilidade, direto com a equipe:</p>
              <CtaButton className="mt-4" message="Olá! Quero saber valores e disponibilidade de banho/tosa para o meu pet.">
                Pedir orçamento no WhatsApp
              </CtaButton>
            </div>
          </div>
        </section>

        {/* 4 — DIFERENCIAIS */}
        <section id="diferenciais" className="scroll-mt-24 bg-sage-deep text-parchment">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-parchment/70">
                Por que ficar
              </p>
              <h2 className="mt-3 font-display text-3xl font-medium leading-tight sm:text-4xl">
                Acolhimento que se percebe nos detalhes
              </h2>
            </div>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {site.differentials.map((item) => (
                <div key={item.title} className="border-t border-parchment/25 pt-6">
                  <h3 className="font-display text-xl font-medium">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-parchment/80">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5 — COMO FUNCIONA */}
        <section id="como-funciona" className="scroll-mt-24 bg-cream">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
            <SectionHeading
              eyebrow="Como funciona"
              title="Agendar é uma conversa"
              description="Sem aplicativo, sem cadastro, sem complicação."
            />
            <ol className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
              {site.steps.map((step, i) => (
                <li
                  key={step.title}
                  className="flex gap-4 rounded-2xl border border-ink/10 bg-parchment p-6"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-clay-soft font-display text-lg font-semibold text-clay-deep">
                    {i + 1}
                  </span>
                  <span>
                    <strong className="block font-display text-lg font-medium text-ink">{step.title}</strong>
                    <span className="mt-1 block text-sm leading-relaxed text-ink-soft">{step.description}</span>
                  </span>
                </li>
              ))}
            </ol>
            <div className="mt-10 text-center">
              <CtaButton>Começar agora</CtaButton>
            </div>
          </div>
        </section>

        {/* 6 — GALERIA CONCEITO */}
        <section id="galeria" className="scroll-mt-24 border-y border-ink/10 bg-parchment">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
            <SectionHeading
              eyebrow="O espaço"
              title="Um ambiente pensado para acalmar"
              description={site.galleryNote}
            />
            <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {[
                { label: "Salão de banho", tone: "from-sage-soft to-cream-deep" },
                { label: "Mesa de tosa", tone: "from-cream-deep to-clay-soft" },
                { label: "Detalhes de cuidado", tone: "from-clay-soft to-sage-soft" },
                { label: "Recepção", tone: "from-sage-soft via-cream-deep to-cream" },
              ].map((slot) => (
                <figure
                  key={slot.label}
                  className={`flex aspect-[3/4] flex-col justify-end rounded-3xl bg-gradient-to-b p-5 ${slot.tone} border border-ink/10`}
                >
                  <div className="mb-auto mt-6 h-px w-10 bg-ink/20" aria-hidden="true" />
                  <figcaption className="rounded-full bg-parchment/90 px-4 py-2 text-center text-xs font-semibold uppercase tracking-[0.14em] text-ink">
                    {slot.label}
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="mx-auto mt-6 max-w-xl text-center text-xs leading-relaxed text-ink-soft">
              Espaços reservados para as fotos reais do negócio — nenhuma imagem do Instagram foi
              copiada para esta demonstração.
            </p>
          </div>
        </section>

        {/* 7 — LOCALIZAÇÃO */}
        <section id="localizacao" className="scroll-mt-24 bg-cream">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-clay-deep">Onde estamos</p>
              <h2 className="mt-3 font-display text-3xl font-medium leading-tight sm:text-4xl">
                No coração de São Carlos
              </h2>
              <address className="mt-5 text-lg not-italic leading-relaxed text-ink">
                {site.address.street}
                <br />
                {site.address.district} — {site.address.city}/{site.address.state}
                <br />
                <span className="text-ink-soft">CEP {site.address.cep}</span>
              </address>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href={site.location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-parchment transition-colors hover:bg-sage-deep"
                >
                  Abrir no Google Maps
                </a>
                <a
                  href={site.location.wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-ink/20 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink"
                >
                  Abrir no Waze
                </a>
              </div>
            </div>
            <div className="rounded-3xl border border-ink/10 bg-parchment p-8 text-center shadow-sm">
              <svg viewBox="0 0 24 24" className="mx-auto h-12 w-12 text-clay" fill="currentColor" aria-hidden="true">
                <path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
              </svg>
              <p className="mt-4 font-display text-xl font-medium text-ink">{site.address.street}</p>
              <p className="mt-1 text-sm text-ink-soft">
                Fácil de chegar, fácil de estacionar por perto — confirme a rota no app de sua preferência.
              </p>
            </div>
          </div>
        </section>

        {/* 8 — CTA FINAL */}
        <section id="contato" className="scroll-mt-24 bg-sage-deep text-parchment">
          <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:py-24">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-parchment/70">
              {site.brand.city}
            </p>
            <h2 className="mt-3 font-display text-3xl font-medium leading-tight sm:text-5xl">
              Pronto para agendar o próximo banho?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-parchment/85">
              Chame no WhatsApp, conte sobre seu pet e escolha o melhor horário. Simples assim.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4">
              <CtaButton variant="light" className="w-full sm:w-auto">
                {site.hero.primaryCta} · {site.whatsapp.display}
              </CtaButton>
              <p className="text-sm text-parchment/75">
                Prefere ligar?{" "}
                <a href={site.phone.href} className="font-semibold text-parchment underline underline-offset-4">
                  {site.phone.display}
                </a>{" "}
                ·{" "}
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-parchment underline underline-offset-4"
                >
                  {site.social.instagramHandle}
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
