import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import ArticleCard from "./Card";
import { Article } from "@/types/article";

interface Props {
  articles: Article[];
}

function ArticlesGrid({ articles }: Props) {
  return (
    <motion.div
      layout
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      <AnimatePresence>
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </AnimatePresence>

      {articles.length === 0 && (
        <div className="col-span-full py-24 flex flex-col items-center justify-center text-muted-foreground space-y-4">
          <Search size={48} className="opacity-20" />
          <p className="font-medium">해당하는 글을 찾을 수 없습니다.</p>
        </div>
      )}
    </motion.div>
  );
}

export default ArticlesGrid;
