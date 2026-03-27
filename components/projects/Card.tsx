import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "../ui/card";
import Image from "next/image";
import { Project } from "@/types/project";

interface Props {
  project: Project;
  idx: number;
}

function ProjectCard({ project, idx }: Props) {
  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1 }}
    >
      <Card className="h-full hover:ring-primary/50 transition-all duration-300 cursor-pointer group/item">
        {/* 1. Thumbnail (Card 컴포넌트 특성상 첫 자식일 때 pt-0 적용됨) */}
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover/item:scale-105"
          />
        </div>

        <CardHeader className="border-b mb-4 flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {/* 로고 컨테이너: 높이는 고정, 너비는 최대값 지정 */}
            <div className="relative h-8 min-w-8 max-w-30 flex items-center justify-center bg-muted/50 rounded-md px-1.5 py-1 border border-border/50">
              <Image
                src={project.logo}
                alt={`${project.title} logo`}
                width={120} // 최대 너비 기준
                height={32} // 고정 높이 기준
                className="object-contain w-auto h-full" // 가로세로 비율 유지하며 높이에 맞춤
              />
            </div>

            {/* 타이틀 */}
            <CardTitle className="text-xl font-bold truncate">
              {project.title}
            </CardTitle>
          </div>

          {/* 날짜 태그 (우측 상단 고정) */}
          <div className="shrink-0">
            <span className="text-[10px] md:text-xs font-mono text-muted-foreground bg-muted px-2 py-1 rounded border border-border/40">
              {project.date}
            </span>
          </div>
        </CardHeader>

        <CardContent>
          {/* 5. Description */}
          <CardDescription className="text-sm leading-relaxed break-keep">
            {project.description}
          </CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default ProjectCard;
