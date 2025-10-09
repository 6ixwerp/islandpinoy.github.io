// Usage: node scripts/compare-avif-webp.js [width]
// Example: node scripts/compare-avif-webp.js 1280
const fs = require("fs");
const path = require("path");

const WIDTH = process.argv[2] || "1280"; // default width to compare
const dir = path.join(process.cwd(), "public", "img");

if (!fs.existsSync(dir)) {
  console.error("public/img not found.");
  process.exit(1);
}

const files = fs.readdirSync(dir);
const byBase = new Map(); // key: base (e.g., food17), value: { webp, avif }

const r = new RegExp(`^(.*)-${WIDTH}\\.(webp|avif)$`, "i");

for (const f of files) {
  const m = f.match(r);
  if (!m) continue;
  const base = m[1];
  const ext = m[2].toLowerCase();
  const p = path.join(dir, f);
  const size = fs.statSync(p).size;
  if (!byBase.has(base)) byBase.set(base, {});
  byBase.get(base)[ext] = { size, file: f };
}

const rows = [];
for (const [base, v] of byBase) {
  if (!v.webp || !v.avif) continue; // need both to compare
  const w = v.webp.size, a = v.avif.size;
  const diff = w - a;
  const pct = w ? (diff * 100.0) / w : 0;
  rows.push({ base, width: WIDTH, webpKB: w/1024, avifKB: a/1024, diffKB: diff/1024, pct });
}

rows.sort((x, y) => y.pct - x.pct);

const pad = (s, n) => String(s).padEnd(n);
console.log(pad("Image", 14), pad("W", 5), pad("WebP (KB)", 12), pad("AVIF (KB)", 12), pad("Δ KB", 10), "Savings");
for (const r of rows) {
  console.log(
    pad(r.base, 14),
    pad(r.width, 5),
    pad(r.webpKB.toFixed(1), 12),
    pad(r.avifKB.toFixed(1), 12),
    pad(r.diffKB.toFixed(1), 10),
    `${r.pct.toFixed(1)}%`
  );
}
