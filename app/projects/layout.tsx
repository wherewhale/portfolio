function ProjectLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-background text-foreground pb-24 relative">
      {children}
    </main>
  );
}

export default ProjectLayout;
