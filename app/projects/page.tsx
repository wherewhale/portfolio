"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardAction,
} from "@/components/ui/card";
import TableOfContents from "@/components/common/TableOfContents";
import { PROJECTS_DATA } from "@/constants/projects";
import ProjectCard from "@/components/projects/Card";
import Link from "next/link";

export default function ProjectsPage() {
  // TOC에 넘겨줄 섹션 데이터 생성
  const tocSections = PROJECTS_DATA.map((group) => ({
    id: `year-${group.year}`,
    title: `${group.year}년`,
  }));

  return (
    <main className="min-h-screen bg-background text-foreground pb-24 relative">
      <div className="max-w-7xl mx-auto px-6 pt-12 md:pt-24 flex items-start gap-12">
        {/* 좌측 메인 프로젝트 리스트 */}
        <div className="flex-1 flex flex-col gap-24">
          {PROJECTS_DATA.map((group) => (
            <section
              key={group.year}
              id={`year-${group.year}`}
              className="scroll-mt-32 flex flex-col gap-8"
            >
              <h2 className="text-3xl font-bold tracking-tight border-b pb-4">
                {group.year}
              </h2>

              {/* 프로젝트 카드 그리드 (데스크탑 2열, 모바일 1열) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {group.projects.map((project, idx) => (
                  <Link
                    href={`/projects/${project.id}`}
                    key={project.id}
                    className="h-full"
                  >
                    <ProjectCard project={project} idx={idx} />
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* 우측 공통 TOC 컴포넌트 */}
        <TableOfContents sections={tocSections} />
      </div>
    </main>
  );
}
