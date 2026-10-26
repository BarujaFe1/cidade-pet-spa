/* Smoke + viewport verification for Cidade Pet Spa demo (run against prod server). */
import { chromium } from "playwright-core";
import fs from "node:fs";
import path from "node:path";

const BASE = process.env.BASE_URL || "http://localhost:3123/";
const OUT = path.join(process.cwd(), "screenshots");
fs.mkdirSync(OUT, { recursive: true });

const viewports = [
  { name: "390", width: 390, height: 844 },
  { name: "768", width: 768, height: 1024 },
  { name: "1440", width: 1440, height: 900 },
];

const requiredIds = [
  "inicio", "reputacao", "servicos", "diferenciais",
  "como-funciona", "galeria", "localizacao", "contato",
];

const browser = await chromium.launch({ channel: "chrome" });
const results = [];

for (const vp of viewports) {
  const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });
  const errors = [];
  page.on("pageerror", (e) => errors.push(String(e)));
  page.on("console", (m) => { if (m.type() === "error") errors.push(m.text()); });
  await page.goto(BASE, { waitUntil: "networkidle" });

  const data = await page.evaluate((ids) => {
    const missing = ids.filter((id) => !document.getElementById(id));
    const robots = document.querySelector('meta[name="robots"]')?.getAttribute("content") ?? null;
    const waLinks = [...document.querySelectorAll('a[href*="wa.me/5516996021599"]')].length;
    const overflowX = document.documentElement.scrollWidth - document.documentElement.clientWidth;
    return {
      title: document.title,
      missingSections: missing,
      robots,
      waLinks,
      overflowX,
      anchorCount: document.querySelectorAll("a[href]").length,
    };
  }, requiredIds);

  await page.screenshot({ path: path.join(OUT, `viewport-${vp.name}.png`), fullPage: true });
  results.push({ viewport: vp.name, consoleErrors: errors, ...data });
  await page.close();
}
await browser.close();

console.log(JSON.stringify(results, null, 2));
const failed = results.filter(
  (r) => r.missingSections.length > 0 || r.overflowX > 1 || r.waLinks === 0 || r.consoleErrors.length > 0
);
if (failed.length > 0) {
  console.error("VERIFY: FAIL");
  process.exit(1);
}
console.log("VERIFY: PASS");
