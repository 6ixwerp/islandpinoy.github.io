import fg from "fast-glob";
import sharp from "sharp";
import path from "node:path";

const inputs = await fg("src/assets/images/*.{png,PNG,jpg,JPG,jpeg,JPEG,webp}");
const widths = [640, 1280, 1920];

for (const file of inputs) {
  const base = path.basename(file).replace(/\.(png|jpe?g|webp)$/i, "");
  const img  = sharp(file).rotate().toColourspace("srgb");
  for (const w of widths) {
    const p = img.clone().resize({ width: w, withoutEnlargement: true });
    await p.clone().avif({ quality: 45, effort: 4 })
           .toFile(`public/img/${base}-${w}.avif`);
    await p.clone().webp({ quality: 72, effort: 5 })
           .toFile(`public/img/${base}-${w}.webp`);
  }
  console.log("✔", file);
}
console.log("Done.");
