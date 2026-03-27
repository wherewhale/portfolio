"use client";

import { CERTIFICATIONS } from "@/constants/profile";
import { motion } from "framer-motion";

export default function ProfileCertificationsSection() {
  return (
    <section id="certifications" className="scroll-mt-32 flex flex-col gap-8">
      <h2 className="text-2xl font-bold border-b pb-4">자격증</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {CERTIFICATIONS.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="p-5 border border-muted-foreground/20 rounded-xl bg-background hover:border-primary/50 transition-colors flex flex-col gap-2 relative overflow-hidden"
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-muted group-hover:bg-primary transition-colors" />

            <div className="flex justify-between items-start">
              <h3 className="font-semibold text-foreground">{cert.name}</h3>
              <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-md">
                {cert.date}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
