"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { List, X } from "lucide-react";

export interface TocSection {
  id: string;
  title: string;
}

interface TableOfContentsProps {
  sections: TocSection[];
}

export default function TableOfContents({ sections }: TableOfContentsProps) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id || "");
  const [isMobileTocOpen, setIsMobileTocOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -60% 0px" },
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]); // sections가 변경될 때마다 옵저버 재실행

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileTocOpen(false); // 이동 후 모바일 메뉴 닫기
    }
  };

  return (
    <>
      {/* 데스크톱 우측 고정 Stepper (목차) */}
      <aside className="hidden lg:block w-48 shrink-0 sticky top-32 h-fit">
        <nav className="flex flex-col gap-4">
          <span className="font-bold text-sm text-muted-foreground uppercase tracking-wider mb-2">
            Contents
          </span>
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`text-left text-sm transition-all duration-300 border-l-2 pl-4 py-1 cursor-pointer
                ${
                  activeSection === section.id
                    ? "border-primary text-primary font-bold"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
            >
              {section.title}
            </button>
          ))}
        </nav>
      </aside>

      {/* 모바일 하단 플로팅 버튼 */}
      <div className="fixed bottom-6 right-6 lg:hidden z-50">
        <button
          onClick={() => setIsMobileTocOpen(!isMobileTocOpen)}
          className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg active:scale-95 transition-transform cursor-pointer"
          aria-label="목차 열기"
        >
          {isMobileTocOpen ? <X size={24} /> : <List size={24} />}
        </button>
      </div>

      {/* 모바일 Stepper 오버레이 메뉴 */}
      <AnimatePresence>
        {isMobileTocOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-24 right-6 bg-background border shadow-xl rounded-2xl p-4 w-48 z-50 lg:hidden"
          >
            <nav className="flex flex-col gap-2">
              <span className="font-bold text-xs text-muted-foreground uppercase tracking-wider mb-2 pl-2">
                Contents
              </span>
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`text-left text-sm transition-all duration-300 rounded-md px-3 py-2 cursor-pointer
                    ${
                      activeSection === section.id
                        ? "bg-primary/10 text-primary font-bold"
                        : "text-muted-foreground hover:bg-muted"
                    }`}
                >
                  {section.title}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
