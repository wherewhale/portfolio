"use client";

import { SKILL_DESCRIPTIONS } from "@/constants/profile";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function ProfileSkillsSection() {
  return (
    <section id="skills" className="scroll-mt-32 flex flex-col gap-8">
      <h2 className="text-2xl font-bold border-b pb-4">기술</h2>

      <div className="flex flex-col gap-10">
        {SKILL_DESCRIPTIONS.map((skillGroup, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8"
          >
            {/* 좌측: 기술 카테고리명 */}
            <h3 className="w-40 text-sm font-bold text-muted-foreground uppercase tracking-wider shrink-0 mt-1">
              {skillGroup.category}
            </h3>

            {/* 우측: 상세 역량 설명 리스트 */}
            <ul className="flex-1 flex flex-col gap-4">
              {skillGroup.items.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + i * 0.05 }}
                  className="flex items-start gap-3 bg-muted/20 p-4 rounded-lg border border-transparent hover:border-muted-foreground/20 transition-colors"
                >
                  {/* 체크 아이콘 */}
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  {/* 설명 텍스트 */}
                  <span className="text-foreground leading-relaxed break-keep">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
