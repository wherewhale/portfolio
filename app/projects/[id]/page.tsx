"use client";

import { PROJECT_DETAILS } from "@/constants/projects";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { use } from "react";
import Link from "next/link";
import TableOfContents from "@/components/common/TableOfContents";
import ProjectOverviewSection from "@/containers/projects/Overview";
import ProjectGallerySection from "@/containers/projects/Gallery";
import ProjectContributionsSection from "@/containers/projects/Contributions";
import ProjectPerformanceSection from "@/containers/projects/Performance";
import ProjectTroubleShootingSection from "@/containers/projects/TroubleShooting";

interface Props {
  params: Promise<{ id: string }>;
}

export default function ProjectPage({ params }: Props) {
  const { id } = use(params);
  const project = PROJECT_DETAILS[id];

  if (!project) return notFound();

  const tocSections = [{ id: "overview", title: "프로젝트 개요" }];
  if (project.gallery && project.gallery.length > 0) {
    tocSections.push({ id: "gallery", title: "갤러리" });
  }
  if (project.contributions && project.contributions.length > 0) {
    tocSections.push({ id: "contributions", title: "참여 활동" });
  }
  if (project.performance && project.performance.length > 0) {
    tocSections.push({ id: "performance", title: "성과" });
  }
  if (project.troubleshootings && project.troubleshootings.length > 0) {
    tocSections.push({ id: "troubleshooting", title: "트러블 슈팅" });
  }

  return (
    <div className="max-w-7xl mx-auto px-6 pt-12 md:pt-24 flex flex-col lg:flex-row items-start gap-12 pb-32">
      <div className="flex-1 flex flex-col gap-24 min-w-0 w-full">
        <Link
          href="/projects"
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group w-fit"
        >
          <ChevronLeft
            size={20}
            className="group-hover:-translate-x-1 transition-transform"
          />
          <span>Back to Projects</span>
        </Link>

        <ProjectOverviewSection project={project} />

        {project.gallery && project.gallery.length > 0 && (
          <ProjectGallerySection gallery={project.gallery} />
        )}

        {project.contributions && project.contributions.length > 0 && (
          <ProjectContributionsSection contributions={project.contributions} />
        )}

        {project.performance && project.performance.length > 0 && (
          <ProjectPerformanceSection performance={project.performance} />
        )}

        {project.troubleshootings && project.troubleshootings.length > 0 && (
          <ProjectTroubleShootingSection
            troubleshootings={project.troubleshootings}
          />
        )}
      </div>

      <div className="hidden lg:block shrink-0 w-64 sticky top-32">
        <TableOfContents sections={tocSections} />
      </div>
    </div>
  );
}
