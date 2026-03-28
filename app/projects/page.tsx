"use client";

import TableOfContents from "@/components/common/TableOfContents";
import { PROJECTS_DATA } from "@/constants/projects";
import ProjectCard from "@/components/projects/Card";
import Link from "next/link";

export default function ProjectsPage() {
  const tocSections = PROJECTS_DATA.map((group) => ({
    id: `year-${group.year}`,
    title: `${group.year}년`,
  }));

  return (
    <div className="max-w-7xl mx-auto px-6 pt-12 md:pt-24 flex items-start gap-12">
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

      <TableOfContents sections={tocSections} />
    </div>
  );
}
