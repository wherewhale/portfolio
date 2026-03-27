import { CareerTimelineItem } from "@/types/profile";
import Link from "next/link";

function TimelineItem({ period, title, subtitle, link }: CareerTimelineItem) {
  return (
    <div className="relative pl-8 md:pl-10">
      <div className="absolute -left-1.25 top-1.5 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background" />
      <div className="flex flex-col gap-1">
        <span className="text-sm font-semibold text-primary">{period}</span>
        <h4 className="text-lg font-bold">{title}</h4>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
        {link && (
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline text-sm font-medium"
          >
            자세히 보기
          </Link>
        )}
      </div>
    </div>
  );
}

export default TimelineItem;
