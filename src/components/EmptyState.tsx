export default function EmptyState({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <div className="border border-dashed border-line px-6 py-12 text-center">
      <h3 className="font-display text-2xl text-foreground">{title}</h3>
      <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted">{body}</p>
    </div>
  );
}
