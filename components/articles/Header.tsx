import { Search } from "lucide-react";

interface Props {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedTag: string;
  setSelectedTag: (tag: string) => void;
  allTopics: string[];
}

function ArticlesHeader({
  searchQuery,
  setSearchQuery,
  selectedTag,
  setSelectedTag,
  allTopics,
}: Props) {
  return (
    <section className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight">
            Articles
          </h1>
          <p className="text-muted-foreground text-lg">
            개발하며 겪었던 트러블 슈팅과 깊이 있는 탐구 기록입니다.
          </p>
        </div>

        {/* 검색바 */}
        <div className="relative shrink-0 w-full md:w-72">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <Search className="text-muted-foreground" size={18} />
          </div>
          <input
            type="text"
            placeholder="제목이나 내용 검색..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-2.5 bg-muted/50 border border-border/50 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          />
        </div>
      </div>

      {/* 태그 영역 */}
      <div className="flex flex-wrap gap-2 w-full pt-4 border-t border-border/50">
        {allTopics.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
              selectedTag === tag
                ? "bg-primary text-primary-foreground shadow-md"
                : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
            }`}
          >
            {tag === "All" ? "All" : `#${tag}`}
          </button>
        ))}
      </div>
    </section>
  );
}

export default ArticlesHeader;
