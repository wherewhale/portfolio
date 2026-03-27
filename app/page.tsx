import dynamic from "next/dynamic";
import GlobalNavigationBar from "@/components/common/GlobalNavigationBar.tsx";
import HeroSection from "@/containers/landing/HeroSection";

const Footer = dynamic(() => import("@/components/common/footer"));

function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <GlobalNavigationBar />

      <main className="flex-1 w-full flex flex-col items-center">
        <HeroSection />

        {/* 지연 로딩 시작 */}
      </main>

      <Footer />
    </div>
  );
}

export default LandingPage;
