"use client";

import { motion } from "framer-motion";
import { outlets } from "@/data/outlets";
import { stagger, viewportOnce } from "@/lib/motion";
import LocationCard from "./LocationCard";

export default function LocationsGrid({
  showSuitableFor = false,
}: {
  showSuitableFor?: boolean;
}) {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8"
    >
      {outlets.map((outlet, index) => (
        <LocationCard
          key={outlet.id}
          outlet={outlet}
          index={index}
          showSuitableFor={showSuitableFor}
        />
      ))}
    </motion.div>
  );
}
