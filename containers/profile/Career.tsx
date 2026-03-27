import TimelineItem from "@/components/profile/TimelineItem";
import { CAREER_TIMELINE } from "@/constants/profile";

function ProfileCareerSection() {
  return (
    <section id="career" className="scroll-mt-32 flex flex-col gap-8">
      <h2 className="text-2xl font-bold border-b pb-4">경력</h2>
      <div className="relative border-l border-muted ml-3 md:ml-4 space-y-12 pb-8">
        {CAREER_TIMELINE.map((item, index) => (
          <TimelineItem
            key={index}
            period={item.period}
            title={item.title}
            subtitle={item.subtitle}
            link={item.link}
          />
        ))}
      </div>
    </section>
  );
}

export default ProfileCareerSection;
