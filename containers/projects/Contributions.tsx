import { CheckCircle2, ListChecks } from "lucide-react";

interface Props {
  contributions: string[];
}

function ProjectContributionsSection({ contributions }: Props) {
  return (
    <section id="contributions" className="scroll-mt-32 space-y-8">
      <h2 className="text-3xl font-bold border-b pb-4 flex items-center gap-3">
        <ListChecks className="text-primary" /> 참여 활동
      </h2>
      <ul className="space-y-6">
        {contributions.map((item, i) => (
          <li key={i} className="flex gap-4 group">
            <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
            <span className="text-lg leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ProjectContributionsSection;
