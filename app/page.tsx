import HeroSection from "@/containers/landing/Hero";

function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex-1 w-full flex flex-col items-center">
        <HeroSection />
      </main>
    </div>
  );
}

export default LandingPage;
