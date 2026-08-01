/**
 * Curate, crop camera timestamps, resize and export WebP for outlet galleries.
 * Run: node scripts/optimize-outlet-images.mjs
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.join(process.cwd(), "public", "assets");

/** Remove typical bottom-left date stamp on CCTV-style exports. */
function cropTimestamp(meta, enabled) {
  if (!enabled) {
    return { left: 0, top: 0, width: meta.width, height: meta.height };
  }
  const left = Math.min(Math.round(meta.width * 0.06), 140);
  const bottom = Math.min(Math.round(meta.height * 0.045), 56);
  return {
    left,
    top: 0,
    width: meta.width - left,
    height: meta.height - bottom,
  };
}

async function exportWebp(input, output, { maxWidth, quality, stripStamp }) {
  const pipeline = sharp(input).rotate();
  const meta = await pipeline.metadata();
  const region = cropTimestamp(meta, stripStamp);
  let img = sharp(input).rotate().extract(region);

  if (region.width > maxWidth) {
    img = img.resize({ width: maxWidth, withoutEnlargement: true });
  }

  await fs.promises.mkdir(path.dirname(output), { recursive: true });
  await img.webp({ quality, effort: 6, smartSubsample: true }).toFile(output);

  const stat = await fs.promises.stat(output);
  return { output, bytes: stat.size };
}

const jobs = [
  // —— Nagarbhavi ——
  {
    input: "Nagarbhavi/n2.jpeg",
    output: "nagarbhavi/ambience/tropical-dining.webp",
    maxWidth: 1600,
    quality: 82,
    stripStamp: false,
  },
  {
    input: "Nagarbhavi/n4.webp",
    output: "nagarbhavi/ambience/lounge-seating.webp",
    maxWidth: 1600,
    quality: 82,
    stripStamp: false,
  },
  {
    input: "Nagarbhavi/n5.webp",
    output: "nagarbhavi/ambience/dining-hall.webp",
    maxWidth: 1920,
    quality: 84,
    stripStamp: false,
  },
  {
    input: "Nagarbhavi/n6.webp",
    output: "nagarbhavi/ambience/logo-staircase.webp",
    maxWidth: 1400,
    quality: 82,
    stripStamp: false,
  },
  {
    input: "Nagarbhavi/DSC09878.JPG",
    output: "nagarbhavi/ambience/bar-lounge.webp",
    maxWidth: 1600,
    quality: 80,
    stripStamp: false,
  },
  {
    input: "Nagarbhavi/DSC09891.JPG",
    output: "nagarbhavi/ambience/neon-dining.webp",
    maxWidth: 1600,
    quality: 80,
    stripStamp: false,
  },
  {
    input: "Nagarbhavi/DSC09908.JPG",
    output: "nagarbhavi/ambience/patio-seating.webp",
    maxWidth: 1600,
    quality: 80,
    stripStamp: false,
  },
  {
    input: "Nagarbhavi/DSC09931.JPG",
    output: "nagarbhavi/ambience/evening-ambience.webp",
    maxWidth: 1920,
    quality: 82,
    stripStamp: false,
  },
  {
    input: "Nagarbhavi/DSC09946.JPG",
    output: "nagarbhavi/ambience/group-dining.webp",
    maxWidth: 1600,
    quality: 80,
    stripStamp: false,
  },
  {
    input: "Nagarbhavi/DSC09653.JPG",
    output: "nagarbhavi/guest-moments/celebration-table.webp",
    maxWidth: 1400,
    quality: 80,
    stripStamp: false,
  },
  {
    input: "Nagarbhavi/DSC09756.JPG",
    output: "nagarbhavi/ambience/window-booths.webp",
    maxWidth: 1600,
    quality: 80,
    stripStamp: false,
  },

  // —— Rajajinagar (RR Nagar) ——
  {
    input: "rr-nagar/r7.jpg",
    output: "rajajinagar/ambience/terrace-day.webp",
    maxWidth: 1920,
    quality: 82,
    stripStamp: true,
  },
  {
    input: "rr-nagar/raj.jpg",
    output: "rajajinagar/ambience/terrace-wide.webp",
    maxWidth: 1920,
    quality: 82,
    stripStamp: true,
  },
  {
    input: "rr-nagar/r.jpg",
    output: "rajajinagar/ambience/terrace-overview.webp",
    maxWidth: 1920,
    quality: 82,
    stripStamp: true,
  },
  {
    input: "rr-nagar/r1.jpg",
    output: "rajajinagar/ambience/terrace-evening.webp",
    maxWidth: 1920,
    quality: 82,
    stripStamp: true,
  },
  {
    input: "rr-nagar/r8.jpg",
    output: "rajajinagar/ambience/dining-interior.webp",
    maxWidth: 1600,
    quality: 82,
    stripStamp: true,
  },
  {
    input: "rr-nagar/r2.jpg",
    output: "rajajinagar/ambience/terrace-angle.webp",
    maxWidth: 1600,
    quality: 82,
    stripStamp: true,
  },
  {
    input: "rr-nagar/r3.jpg",
    output: "rajajinagar/ambience/rooftop-garden.webp",
    maxWidth: 1600,
    quality: 82,
    stripStamp: true,
  },
  {
    input: "rr-nagar/r9.jpg",
    output: "rajajinagar/ambience/terrace-seating.webp",
    maxWidth: 1600,
    quality: 82,
    stripStamp: true,
  },
  {
    input: "rr-nagar/r10.jpg",
    output: "rajajinagar/ambience/terrace-panorama.webp",
    maxWidth: 1920,
    quality: 80,
    stripStamp: true,
  },
  {
    input: "rr-nagar/ambience/terrace-fountain.webp",
    output: "rajajinagar/ambience/terrace-fountain.webp",
    maxWidth: 1600,
    quality: 82,
    stripStamp: false,
  },
  {
    input: "rr-nagar/ambience/terrace-signage.webp",
    output: "rajajinagar/ambience/terrace-signage.webp",
    maxWidth: 1600,
    quality: 82,
    stripStamp: false,
  },
];

async function main() {
  const results = [];
  for (const job of jobs) {
    const input = path.join(ROOT, job.input);
    const output = path.join(ROOT, job.output);
    if (!fs.existsSync(input)) {
      console.warn("skip (missing):", job.input);
      continue;
    }
    const info = await exportWebp(input, output, job);
    results.push({ ...job, ...info, kb: Math.round(info.bytes / 1024) });
    console.log(`${job.output} — ${Math.round(info.bytes / 1024)} KB`);
  }
  console.log(`\nDone: ${results.length} files.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
