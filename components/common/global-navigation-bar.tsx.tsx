import ThemeToggle from "@/components/common/theme-toggle";

const GlobalNavigationBar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      {/* max-w-7xl 추가하여 본문과 최대 너비 통일 */}
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-extrabold tracking-tighter">
            WHA1E
          </span>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default GlobalNavigationBar;
