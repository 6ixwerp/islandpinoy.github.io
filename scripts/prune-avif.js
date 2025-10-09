// Remove AVIFs that don't beat WebP by a given %.
// Usage:
//   node scripts/prune-avif.js [width] --threshold=0.2 [--apply] [--dir=public/img] [--heroes=food17,food2,...]
//
// Examples:
//   node scripts/prune-avif.js 1280 --threshold=0.2
//   node scripts/prune-avif.js 1280 --threshold=0.2 --apply
//   node scripts/prune-avif.js 1280 --threshold=0.2 --heroes=food17,food2,food3,food1,food9 --apply
//
const fs = require("fs");
const path = require("path");

const args = process.argv.slice(2);
let widthFilter = null;
let threshold = 0.2;         // 20%
let apply = false;
let dir = path.join(process.cwd(), "public", "img");
let heroes = new Set();

for (const a of args) {
  if (/^\d+$/.test(a)) widthFilter = a;
  else if (a.startsWith("--threshold=")) threshold = parseFloat(a.split("=")[1] || "0.2");
  else if (a === "--apply") apply = true;
  else if (a.startsWith("--dir=")) dir = path.isAbsolute(a.split("=")[1]) ? a.split("=")[1] : path.join(process.cwd(), a.split("=")[1]);
  else if (a.startsWith("--heroes=")) heroes = new Set(a.split("=")[1].split(",").map(s => s.trim()).filter(Boolean));
}

if (!fs.existsSync(dir)) {
  console.error(`❌ Directory not found: ${dir}`);
  process.exit(2);
}

const files = fs.readdirSync(dir);
const groups = new Map(); // key: base@width -> { webp:{file,size}, avif:{file,size}, base, width }

const rx = /^(.+)-(\d+)\.(webp|avif)$/i;
for (const f of files) {
  const m = f.match(rx);
  if (!m) continue;
  const [ , base, width, ext ] = m;
  if (widthFilter && width !== String(widthFilter)) continue;
  const key = `${base}@${width}`;
  const p = path.join(dir, f);
  const size = fs.statSync(p).size;
  if (!groups.has(key)) groups.set(key, { base, width, webp: null, avif: null });
  groups.get(key)[ext.toLowerCase()] = { file: f, size };
}

const rows = [];
let bytesPlanned = 0;
let deletions = [];

for (const { base, width, webp, avif } of groups.values()) {
  if (!webp || !avif) continue; // need both to compare
  const w = webp.size, a = avif.size;
  const diff = w - a;
  const pct = w ? (diff / w) : 0; // savings %
  const keepBecauseHero = heroes.has(base);
  const deleteAVIF = !keepBecauseHero && (pct < threshold || a >= w); // delete if savings < threshold OR avif is bigger

  if (deleteAVIF) {
    bytesPlanned += a;
    deletions.push(path.join(dir, avif.file));
  }

  rows.push({
    base, width,
    webpKB: (w/1024).toFixed(1),
    avifKB: (a/1024).toFixed(1),
    deltaKB: ((diff)/1024).toFixed(1),
    savings: (pct*100).toFixed(1) + "%",
    action: deleteAVIF ? "DELETE AVIF" : (keepBecauseHero ? "KEEP (hero)" : "KEEP")
  });
}

rows.sort((a,b) => parseFloat(b.savings) - parseFloat(a.savings));

const pad = (s, n) => String(s).padEnd(n);
console.log(pad("Image",14), pad("W",5), pad("WebP (KB)",12), pad("AVIF (KB)",12), pad("Δ KB",9), pad("Savings",9), "Action");
for (const r of rows) {
  console.log(
    pad(r.base,14),
    pad(r.width,5),
    pad(r.webpKB,12),
    pad(r.avifKB,12),
    pad(r.deltaKB,9),
    pad(r.savings,9),
    r.action
  );
}

console.log(`\nPlanned deletions: ${deletions.length}`);
console.log(`Would free: ${(bytesPlanned/1024/1024).toFixed(2)} MB`);
if (apply) {
  for (const f of deletions) {
    try { fs.unlinkSync(f); console.log("🗑️  Deleted", path.basename(f)); }
    catch (e) { console.error("Failed to delete", f, e.message); }
  }
  console.log("✔ Done.");
} else {
  console.log("Dry run. Add --apply to actually delete.");
}
