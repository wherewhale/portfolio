"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main className="flex min-h-[calc(100vh-112px)] flex-col items-center justify-center bg-background px-6 text-foreground">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-center"
      >
        {/* 거대한 404 배경 텍스트 */}
        <motion.h1
          className="text-[10rem] md:text-[15rem] font-extrabold leading-none tracking-tighter text-primary/10 select-none"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          404
        </motion.h1>

        {/* 안내 문구 */}
        <div className="relative -mt-12 md:-mt-20">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            경로를 이탈했습니다.
          </h2>
          <p className="mt-4 text-muted-foreground">
            요청하신 페이지가 존재하지 않거나 이동되었습니다.
          </p>
        </div>

        {/* 홈으로 돌아가기 버튼 */}
        <motion.div
          className="mt-10 flex justify-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="/"
            aria-label="메인 화면으로 돌아가기"
            className="rounded-full bg-foreground px-8 py-4 text-sm font-bold text-background transition-colors hover:bg-foreground/90 shadow-md"
          >
            홈으로 돌아가기
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}
