import fs from "node:fs";
import path from "node:path";

/**
 * Zero-maintenance gallery: images live under public/assets/<outlet-slug>/<category>/
 * and get picked up automatically at build time — no data file to edit.
 * Brand-wide shots (menus, plated food) live under public/assets/_shared/<category>/
 * and appear on every location filter + the main gallery.
 * See public/assets/README.md for the exact convention.
 */

const ASSETS_ROOT = path.join(process.cwd(), "public", "assets");
const SHARED_DIR = "_shared";
const SHARED_SLUG = "shared";
const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

/** Folder names under public/assets → outlet slug (must match outlets.ts). */
const ASSET_DIR_TO_SLUG: Record<string, string> = {
  "hsr-layout": "hsr-layout",
  nagarbhavi: "nagarbhavi",
  Nagarbhavi: "nagarbhavi",
  rajajinagar: "rajajinagar",
  "rr-nagar": "rajajinagar",
};

const SKIP_ASSET_DIRS = new Set(["README.md"]);

function resolveOutletSlug(dirName: string): string | null {
  if (dirName === SHARED_DIR || SKIP_ASSET_DIRS.has(dirName)) return null;
  return ASSET_DIR_TO_SLUG[dirName] ?? dirName;
}

export type GalleryImage = {
  src: string;
  outletSlug: string;
  category: string;
  fileName: string;
};

function listFiles(dir: string): string[] {
  try {
    return fs
      .readdirSync(dir, { withFileTypes: true })
      .filter(
        (entry) =>
          entry.isFile() &&
          IMAGE_EXTENSIONS.has(path.extname(entry.name).toLowerCase())
      )
      .map((entry) => entry.name)
      .sort();
  } catch {
    return [];
  }
}

function listDirs(dir: string): string[] {
  try {
    return fs
      .readdirSync(dir, { withFileTypes: true })
      .filter((entry) => entry.isDirectory())
      .map((entry) => entry.name)
      .sort();
  } catch {
    return [];
  }
}

function collectFromOutlet(
  outletDirName: string,
  outletSlug: string
): GalleryImage[] {
  const images: GalleryImage[] = [];
  const outletDir = path.join(ASSETS_ROOT, outletDirName);
  for (const category of listDirs(outletDir)) {
    const categoryDir = path.join(outletDir, category);
    for (const fileName of listFiles(categoryDir)) {
      images.push({
        src: `/assets/${outletDirName}/${category}/${fileName}`,
        outletSlug,
        category,
        fileName,
      });
    }
  }
  return images;
}

/** Every image found under public/assets, across all outlets and shared. */
export function getAllGalleryImages(): GalleryImage[] {
  const images: GalleryImage[] = [];
  for (const dirName of listDirs(ASSETS_ROOT)) {
    if (dirName === SHARED_DIR) {
      images.push(...collectFromOutlet(SHARED_DIR, SHARED_SLUG));
      continue;
    }
    const outletSlug = resolveOutletSlug(dirName);
    if (!outletSlug) continue;
    images.push(...collectFromOutlet(dirName, outletSlug));
  }
  return images;
}

/** Images for one outlet, plus brand-shared photography. */
export function getOutletGalleryImages(outletSlug: string): GalleryImage[] {
  return getAllGalleryImages().filter(
    (img) => img.outletSlug === outletSlug || img.outletSlug === SHARED_SLUG
  );
}

export { SHARED_SLUG };
