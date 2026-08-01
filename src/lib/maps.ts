/**
 * Google Maps helpers that work without an API key.
 * Uses the plain "maps?q=" embed and "maps/dir" deep link formats, keyed off
 * a free-text query (address, or "address, landmark" for better accuracy).
 *
 * TODO: once official Place IDs / verified pins are available per outlet,
 * swap `mapsEmbedSrc` to use `https://www.google.com/maps/embed/v1/place`
 * with a Maps Embed API key for a more precise, branded pin.
 */

export function mapsEmbedSrc(query: string) {
  return `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
}

export function mapsDirectionsUrl(query: string) {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(query)}`;
}
