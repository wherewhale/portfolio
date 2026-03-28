import { Badge } from "@/components/ui/badge";
import { ProjectDetail } from "@/types/project";
import { BarChart3, Calendar, Code2, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  project: ProjectDetail;
}

function ProjectOverviewSection({ project }: Props) {
  return (
    <div id="overview" className="scroll-mt-32 space-y-16">
      {/* 기본 정보 */}
      <section className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="relative w-12 h-12 rounded-xl border p-2 bg-muted overflow-hidden shrink-0">
            <Image
              src={project.logo}
              alt="logo"
              fill
              className="object-contain p-1"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight">
            {project.title}
          </h1>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground bg-muted/50 px-4 py-2 rounded-xl border w-fit shrink-0 shadow-sm">
          <Calendar size={18} className="text-primary" />
          <span className="text-sm md:text-base font-mono font-semibold">
            {project.date}
          </span>
        </div>
        <div className="relative aspect-video overflow-hidden shadow-2xl">
          <Image
            src={project.thumbnail}
            alt="thumb"
            fill
            className="object-contain"
          />
        </div>
        <p className="text-xl text-muted-foreground leading-relaxed break-keep whitespace-pre-wrap">
          {project.description}
        </p>

        {project.link && (
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-colors shadow-sm w-fit"
          >
            <span>서비스 방문하기</span>
            <ExternalLink size={18} />
          </Link>
        )}
      </section>

      {/* 프로젝트 상세 정보 (팀, 스택) */}
      <section className="grid md:grid-cols-2 gap-12 p-8 rounded-3xl bg-muted/30 border">
        <div className="space-y-4">
          <h3 className="font-bold flex items-center gap-2 text-primary">
            <BarChart3 size={18} /> Team & Role
          </h3>
          <div className="text-muted-foreground">
            <p>{project.info.team}</p>
            <p className="font-bold text-foreground mt-1">
              {project.info.role}
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="font-bold flex items-center gap-2 text-primary">
            <Code2 size={18} /> Tech Stack
          </h3>
          <div className="space-y-3">
            {project.info.techStack.map((stack) => (
              <div key={stack.category} className="flex flex-wrap gap-2">
                <span className="text-xs font-bold opacity-50 w-full">
                  {stack.category}
                </span>
                {stack.items.map((item) => (
                  <Badge key={item} variant="outline" className="bg-background">
                    {item}
                  </Badge>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectOverviewSection;
