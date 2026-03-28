import { Trophy } from "lucide-react";

interface Props {
  performance: {
    label: string;
    value: string;
    description?: string;
  }[];
}

function ProjectPerformanceSection({ performance }: Props) {
  return (
    <section id="performance" className="scroll-mt-32 space-y-8">
      <h2 className="text-3xl font-bold border-b pb-4 flex items-center gap-3">
        <Trophy className="text-yellow-500 fill-yellow-500" /> 성과
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {performance.map((p, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl border bg-background text-center space-y-2"
          >
            <p className="text-xs font-bold opacity-50 uppercase tracking-widest">
              {p.label}
            </p>
            <p className="text-3xl font-black text-primary">{p.value}</p>
            {p.description && (
              <p className="text-xs text-muted-foreground break-keep">
                {p.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectPerformanceSection;
