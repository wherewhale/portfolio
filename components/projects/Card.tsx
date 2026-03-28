import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "../ui/Card";
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
            <div className="relative h-8 min-w-8 max-w-30 flex items-center justify-center bg-muted/50 rounded-md px-1.5 py-1 border border-border/50">
              <Image
                src={project.logo}
                alt={`${project.title} logo`}
                width={120}
                height={32}
                className="object-contain w-auto h-full"
              />
            </div>

            <CardTitle className="text-xl font-bold truncate">
              {project.title}
            </CardTitle>
          </div>

          <div className="shrink-0">
            <span className="text-[10px] md:text-xs font-mono text-muted-foreground bg-muted px-2 py-1 rounded border border-border/40">
              {project.date}
            </span>
          </div>
        </CardHeader>

        <CardContent>
          <CardDescription className="text-sm leading-relaxed break-keep">
            {project.description}
          </CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default ProjectCard;
