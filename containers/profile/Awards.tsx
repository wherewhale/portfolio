"use client";

import { AWARDS } from "@/constants/profile";
import { motion } from "framer-motion";

function ProfileAwardsSection() {
  return (
    <section id="awards" className="scroll-mt-32 flex flex-col gap-8">
      <h2 className="text-2xl font-bold border-b pb-4">수상 내역</h2>

      <div className="flex flex-col">
        {AWARDS.map((award, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group flex flex-col md:flex-row md:items-center justify-between border-b border-muted py-6 transition-colors hover:bg-muted/30 px-4 -mx-4 rounded-lg"
          >
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                {award.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {award.description}
              </p>
            </div>
            <span className="text-sm font-mono text-primary/80 mt-2 md:mt-0 shrink-0">
              {award.date}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default ProfileAwardsSection;
