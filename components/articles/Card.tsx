import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Hash } from "lucide-react";
import { Article } from "@/types/article";

interface Props {
  article: Article;
}

function ArticleCard({ article }: Props) {
  return (
    <motion.a
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col bg-card rounded-2xl overflow-hidden border shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 h-full cursor-pointer"
    >
      {/* 썸네일 영역 */}
      <div className="relative aspect-video w-full overflow-hidden bg-muted flex items-center justify-center border-b">
        {article.thumbnail ? (
          <Image
            src={article.thumbnail}
            alt={article.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-primary/40 group-hover:text-primary/60 transition-colors group-hover:scale-105 duration-500">
            <Hash size={48} className="mb-2 opacity-50" />
            <span className="text-3xl font-black tracking-tighter uppercase px-4 text-center">
              {article.topics[0]}
            </span>
          </div>
        )}

        {/* 칭호(Badge) 태그 */}
        {article.badges && article.badges.length > 0 && (
          <div className="absolute top-3 right-3 flex flex-col gap-1.5 items-end z-10">
            {article.badges.map((badge, i) => (
              <div
                key={i}
                className="flex items-center gap-1.5 bg-yellow-400 text-yellow-950 text-[10px] font-black px-2.5 py-1 rounded-full shadow-md"
              >
                {badge}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 콘텐츠 영역 */}
      <div className="flex flex-col flex-1 p-6 gap-4">
        <div className="space-y-2 flex-1">
          <h2 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors line-clamp-2">
            {article.title}
          </h2>
          <p className="text-sm text-muted-foreground line-clamp-3 break-keep leading-relaxed">
            {article.description}
          </p>
        </div>

        <div className="flex flex-col gap-4 mt-auto pt-4 border-t border-border/50">
          <div className="flex flex-wrap gap-1.5">
            {article.topics.map((topic) => (
              <span
                key={topic}
                className="text-[10px] font-semibold text-muted-foreground bg-muted px-2 py-0.5 rounded-md"
              >
                {topic}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between mt-1">
            <span className="text-xs font-mono text-muted-foreground/70">
              {article.date}
            </span>
            <ExternalLink
              size={16}
              className="text-muted-foreground/50 group-hover:text-primary transition-colors"
            />
          </div>
        </div>
      </div>
    </motion.a>
  );
}

export default ArticleCard;
