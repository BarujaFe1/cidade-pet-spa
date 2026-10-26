# IMPLEMENTATION_REPORT — Cidade Pet Spa (conceito comercial demo)

- **Projeto:** `C:\Users\BarujaFe\vercel-sites\cidade-pet-spa`
- **Produção:** https://cidade-pet-spa.vercel.app
- **Data de execução:** 03/09/2026 (end-to-end, NORMAL/BUILD MODE)
- **Stack:** Next.js 16.3.4 + TypeScript + App Router + Tailwind CSS v4, página estática, zero backend/auth/CMS

## 1. O que foi feito

One-page mobile-first em pt-BR com as 8 seções exigidas: Hero (headline exigida +
CTA WhatsApp), Prova de reputação (com fonte explícita), Serviços (banho/tosa/estética),
Diferenciais (tom aspiracional, sem promessas factuais), Como funciona (4 passos),
Galeria conceito (placeholders premium, sem fotos do Instagram), Localização
(endereço + botões Google Maps/Waze, sem embed pesado) e CTA final. Config central em
`lib/site.ts` (telefones, links, endereço, reputação, flags demo) — troca de fotos/número
em 1 arquivo. Guardrails demo: `noindex, nofollow` (metadata + `robots.ts` com
`Disallow: /`), sem schema LocalBusiness, wordmark tipográfico, faixa e rodapé
"Conceito comercial não oficial". Paleta creme/sálvia/terracota/grafite/branco quente;
tipografia Fraunces + Inter; sem glassmorphism/WebGL/animações pesadas.

## 2. Fontes revalidadas em 03/09/2026

| Dado usado | Status | Fonte |
|---|---|---|
| Nome: Cidade Pet Spa (fantasia); Razão: Cidade Pet Spa Ltda; CNPJ 49.698.826/0001-65; CNAE higiene/embelezamento; abertura 24/02/2023 | Confirmado | banhoetosapetpertodemim.com (ficha CNPJ) |
| Endereço: Rua Dona Alexandrina, 1553 — Centro / Vila Monteiro (Gleba I), São Carlos/SP, CEP 13560-290 (mesma rua+número+CEP; bairro diverge entre fontes) | Confirmado | TutorCanino (fetch direto) + OndePet + ficha CNPJ |
| Instagram `instagram.com/cidadepetspa` | Confirmado | Link direto no TutorCanino + OndePet |
| WhatsApp +55 16 99602-1599 → `wa.me/5516996021599` (com mensagem pré-preenchida) | Revalidado em agregador independente | OndePet, ranking "Pet shops em São Carlos" |
| Fixo (16) 3307-1533 (uso secundário `tel:`) | Confirmado | Ficha derivada de CNPJ |
| Reputação "4,9 · 216 avaliações" exibida COMO "Via TutorCanino (agregador · dados derivados do Google Maps) · verificado em 03/09/2026" | Agregador, não Google direto | TutorCanino (fetch direto; decisão do contratante: exibir com fonte) |
| Coordenadas/PlaceId p/ Maps e Waze (`ChIJLXP5C3R3uJQRYmd4Ie9fqGo`) | Confirmado | Links da ficha TutorCanino |
| `ondepet.com/pet-shops/sao-carlos/cidade-pet-spa/` | 403 no fetch — usada só a página de ranking | — |

## 3. Dados omitidos por incerteza (nada inventado)

- **Horário de funcionamento** (seg–sáb 08:00–18:30 aparece só no TutorCanino, fonte única agregadora) — omitido; CTA final sem horário.
- **Número exato de avaliações como claim Google** — exibido somente com atribuição ao agregador; nenhum review textual copiado; nenhum depoimento (todos falsos por definição).
- **Serviços além de banho/tosa/estética genérica** — sem veterinária, creche, hotel ou leva-e-traz (não confirmados).
- **Fotos, logo, anos, premiações, certificações** — galeria com 4 slots conceituais rotulados ("Salão de banho", "Mesa de tosa", "Detalhes de cuidado", "Recepção") + nota de autorização; nenhuma imagem do Instagram baixada/republicada.

## 4. Testes (todos com evidência local)

- `tsc --noEmit` — PASS; `eslint` — PASS; `next build` — PASS (rota `/` estática + `/robots.txt`).
- Smoke em servidor prod local (`next start`): HTTP 200, `noindex,nofollow`, `robots Disallow: /`, 7 links `wa.me/5516996021599`, links Maps/Waze/Instagram/`tel:` presentes.
- `scripts/verify.mjs` (Playwright + Chrome real): viewports 390/768/1440 — 8/8 seções presentes, `overflowX = 0`, zero erros de console → PASS. Screenshots full-page em `screenshots/` (inspecionados visualmente: mobile e desktop aprovados).
- Lighthouse (Chrome real, build local): mobile perf 97 / a11y **100** (após corrigir `aria-label` em `div` sem `role` → `role="img"`) / best-practices 100; desktop perf 100 / a11y 95 (pré-correção) / best-practices 100. SEO 63 **intencional**: `is-crawlable = 0` por `noindex` + `Disallow` (exigência do modo demo). Relatórios em `lighthouse/`.
- Produção verificada pós-deploy: 200, `noindex`, `wa.me`, headline, aviso demo e `robots.txt` OK.

## 5. Deploy

`vercel deploy --prod` (token do contratante, usado só como env var, nunca commitado):
**https://cidade-pet-spa.vercel.app** (projeto `barujafe1s-projects/cidade-pet-spa`).
Nota: o deploy inicial falhou porque a máquina tem `VERCEL_ORG_ID`/`VERCEL_PROJECT_ID`
globais apontando para outro projeto — contornado limpando as vars no processo;
recomendo revisar essas vars globais. Vínculo criado em `.vercel/` (não commitado).

## 6. Verdict

**COMPLETE.** Demo comercial no ar, WhatsApp validado via fonte independente, reputação
com atribuição honesta, nada inventado, guardrails de demo ativos e testes verdes
(exceto SEO, deprimido de propósito pelo `noindex`). Próximo passo comercial: apresentar
ao prospect e, com autorização, trocar placeholders por fotos reais, confirmar horários
oficiais e (só então) avaliar indexação + schema LocalBusiness.
