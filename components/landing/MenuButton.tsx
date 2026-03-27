import { motion } from "framer-motion";
import Link from "next/link";

interface Props {
  href: string;
  label: string;
  index: number;
}

function MenuButton({ href, label, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5 + index * 0.1, duration: 0.8 }}
    >
      <Link href={href} className="group relative">
        <motion.div
          whileHover={{ scale: 1.1, rotate: index % 2 === 0 ? 2 : -2 }}
          whileTap={{ scale: 0.95 }}
          className="relative px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-md transition-all duration-500 group-hover:border-primary group-hover:bg-primary/10 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
        >
          <span className="text-lg md:text-xl font-bold tracking-widest text-white group-hover:text-primary-foreground transition-colors uppercase">
            {label}
          </span>

          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-1/2 transition-all duration-500" />
        </motion.div>

        <div className="absolute -inset-2 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
      </Link>
    </motion.div>
  );
}

export default MenuButton;
