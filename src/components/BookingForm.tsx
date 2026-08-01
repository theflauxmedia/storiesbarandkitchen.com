import { outlets } from "@/data/outlets";
import { ButtonLink } from "./Button";

/** Per-outlet ReserveGo table reservation links. */
export default function BookingForm() {
  return (
    <div className="surface divide-y divide-line">
      {outlets.map((outlet, i) => (
        <div
          key={outlet.slug}
          className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between md:p-7"
        >
          <div className="min-w-0">
            <span className="chapter-num">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-2 font-display text-xl text-foreground md:text-2xl">
              {outlet.fullTitle}
            </h3>
            <p className="mt-1 text-sm text-muted">{outlet.hours}</p>
            <p className="mt-1 text-sm text-muted">{outlet.address}</p>
          </div>
          <ButtonLink
            href={outlet.reservationUrl}
            external
            className="w-full shrink-0 sm:w-auto"
          >
            Reserve a Table
          </ButtonLink>
        </div>
      ))}
      <p className="px-6 py-4 text-xs leading-relaxed text-muted md:px-7">
        You&apos;ll be taken to our secure online reservation system for the
        selected outlet. Table availability is confirmed only once the booking
        is completed on ReserveGo.
      </p>
    </div>
  );
}
