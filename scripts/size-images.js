// Summarize image sizes in build/ and enforce a simple budget.
const fs = require("fs");
const path = require("path");

const exts = new Set([".avif", ".webp", ".jpg", ".jpeg", ".png"]);
const BUDGET_MB = 5; // adjust as you like

function walk(dir) {
  let total = 0;
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      const r = walk(p);
      total += r.total;
      files.push(...r.files);
    } else {
      const ext = path.extname(entry.name).toLowerCase();
      if (exts.has(ext)) {
        const size = fs.statSync(p).size;
        total += size;
        files.push({ path: p, size });
      }
    }
  }
  return { total, files };
}

const BUILD_DIR = path.join(process.cwd(), "build");
if (!fs.existsSync(BUILD_DIR)) {
  console.error("❌ build/ not found. Run `npm run build` first.");
  process.exit(2);
}

const { total, files } = walk(BUILD_DIR);
const mb = total / 1024 / 1024;
console.log(`Total images in build: ${mb.toFixed(2)} MB`);

files
  .sort((a, b) => b.size - a.size)
  .slice(0, 10)
  .forEach(({ path: p, size }) =>
    console.log(`${(size / 1024 / 1024).toFixed(2)} MB  ${p.replace(process.cwd()+"/","")}`)
  );

if (mb > BUDGET_MB) {
  console.error(`❌ Image budget exceeded (${mb.toFixed(2)} MB > ${BUDGET_MB} MB).`);
  process.exit(1);
} else {
  console.log("✅ Within budget.");
}
