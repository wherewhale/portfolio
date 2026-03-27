import ProfileIntroSection from "@/containers/profile/Intro";
import ProfileValueSection from "@/containers/profile/Value";
import TableOfContents from "@/components/common/TableOfContents";
import ProfileCareerSection from "@/containers/profile/Career";
import ProfileAwardsSection from "@/containers/profile/Awards";
import ProfileCertificationsSection from "@/containers/profile/Certifications";
import ProfileSkillsSection from "@/containers/profile/Skills";

const SECTIONS = [
  { id: "intro", title: "소개" },
  { id: "values", title: "핵심 가치" },
  { id: "career", title: "경력" },
  { id: "awards", title: "수상 내역" },
  { id: "certifications", title: "자격증" },
  { id: "skills", title: "기술" },
];

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-background text-foreground pb-24 relative">
      <div className="max-w-7xl mx-auto px-6 pt-12 md:pt-24 flex items-start gap-12">
        {/* 좌측 메인 콘텐츠 영역 */}
        <div className="flex-1 flex flex-col gap-32 pb-32">
          <ProfileIntroSection />
          <ProfileValueSection />
          <ProfileCareerSection />
          <ProfileAwardsSection />
          <ProfileCertificationsSection />
          <ProfileSkillsSection />
        </div>
        <TableOfContents sections={SECTIONS} />
      </div>
    </main>
  );
}
