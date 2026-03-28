import { Article } from "@/types/article";
import { useState, useMemo, useEffect } from "react";

export function useArticleFilter(articles: Article[]) {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string>("All");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const allTopics = useMemo(() => {
    const tags = new Set<string>();
    articles.forEach((article) => {
      article.topics.forEach((topic) => tags.add(topic));
    });
    return ["All", ...Array.from(tags)];
  }, [articles]);

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesSearch =
        article.title
          .toLowerCase()
          .includes(debouncedSearchQuery.toLowerCase()) ||
        article.description
          .toLowerCase()
          .includes(debouncedSearchQuery.toLowerCase());

      const matchesTag =
        selectedTag === "All" || article.topics.includes(selectedTag);

      return matchesSearch && matchesTag;
    });
  }, [articles, debouncedSearchQuery, selectedTag]);

  return {
    searchQuery,
    setSearchQuery,
    selectedTag,
    setSelectedTag,
    allTopics,
    filteredArticles,
  };
}
