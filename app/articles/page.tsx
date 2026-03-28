"use client";

import ArticlesGrid from "@/components/articles/Grid";
import ArticlesHeader from "@/components/articles/Header";
import { ARTICLES_DATA } from "@/constants/articles";
import { useArticleFilter } from "@/hooks/useArticleFilter";

export default function ArticlesPage() {
  const {
    searchQuery,
    setSearchQuery,
    selectedTag,
    setSelectedTag,
    allTopics,
    filteredArticles,
  } = useArticleFilter(ARTICLES_DATA);

  return (
    <main className="min-h-screen bg-background text-foreground pb-24">
      <div className="max-w-7xl mx-auto px-6 pt-12 md:pt-24 space-y-12">
        <ArticlesHeader
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedTag={selectedTag}
          setSelectedTag={setSelectedTag}
          allTopics={allTopics}
        />

        <ArticlesGrid articles={filteredArticles} />
      </div>
    </main>
  );
}
