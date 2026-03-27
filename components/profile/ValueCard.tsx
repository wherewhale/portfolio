import { CheckCircle2 } from "lucide-react";

interface Props {
  title: string;
  items: string[];
}

function ValueCard({ title, items }: Props) {
  return (
    <div className="bg-muted/30 border rounded-xl p-6 flex flex-col gap-4">
      <h3 className="text-xl font-bold text-primary">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-start gap-2 text-sm text-muted-foreground break-keep"
          >
            <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            <span className="leading-snug">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ValueCard;
