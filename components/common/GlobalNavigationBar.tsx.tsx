"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import ThemeToggle from "@/components/common/ThemeToggle";
import { NAVIGATION_ITEMS } from "@/constants/navigation";

const GlobalNavigationBar = () => {
  const pathname = usePathname();
  const isLanding = pathname === "/";
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container max-w-7xl mx-auto flex flex-col px-4">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2"
            aria-label="Go to homepage"
          >
            <span
              className="text-2xl font-extrabold tracking-tighter"
              aria-hidden="true"
            >
              WHA1E
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </div>

        {!isLanding && (
          <nav
            aria-label="main navigation"
            className="flex h-12 items-center gap-2 overflow-x-auto"
          >
            {NAVIGATION_ITEMS.map((item) => {
              const isActive =
                pathname === item.path || pathname?.startsWith(`${item.path}/`);

              return (
                <Link
                  key={item.path}
                  href={item.path}
                  onMouseEnter={() => setHoveredPath(item.path)}
                  onMouseLeave={() => setHoveredPath(null)}
                  aria-current={isActive ? "page" : undefined}
                  className="relative rounded-md px-4 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
                >
                  <span className="relative z-10">{item.name}</span>

                  {item.path === hoveredPath && (
                    <motion.div
                      layoutId="nav-hover-bg"
                      aria-hidden="true"
                      className="absolute inset-0 z-0 rounded-md bg-muted/50"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}

                  {isActive && (
                    <motion.div
                      layoutId="nav-active-indicator"
                      aria-hidden="true"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>
        )}
      </div>
    </header>
  );
};

export default GlobalNavigationBar;
