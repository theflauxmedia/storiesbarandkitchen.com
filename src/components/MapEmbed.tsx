import { mapsEmbedSrc } from "@/lib/maps";

export default function MapEmbed({
  query,
  title,
}: {
  query: string;
  title: string;
}) {
  return (
    <div className="surface overflow-hidden">
      <iframe
        title={`Map — ${title}`}
        src={mapsEmbedSrc(query)}
        width="100%"
        height="360"
        className="block min-h-[280px] w-full"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
