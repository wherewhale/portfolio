import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/Carousel";
import { Troubleshooting } from "@/types/project";
import { CheckCircle2, ExternalLink, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  troubleshootings: Troubleshooting[];
}

function ProjectTroubleShootingSection({ troubleshootings }: Props) {
  return (
    <section id="troubleshooting" className="scroll-mt-32 space-y-16">
      <h2 className="text-3xl font-bold border-b pb-4 flex items-center gap-3">
        <Zap className="text-yellow-500 fill-yellow-500" /> 트러블 슈팅
      </h2>
      {troubleshootings.map((ts, index) => (
        <article
          key={index}
          className="p-8 md:p-12 rounded-[2rem] bg-foreground text-background dark:bg-muted/20 dark:text-foreground border space-y-12"
        >
          <h3 className="text-2xl font-black break-keep"># {ts.title}</h3>

          <div className="grid md:grid-cols-[140px_1fr] gap-6">
            <span className="font-bold text-yellow-500 uppercase">Problem</span>
            <p className="opacity-90 leading-relaxed break-keep">
              {ts.problem}
            </p>
          </div>

          <div className="grid md:grid-cols-[140px_1fr] gap-6">
            <span className="font-bold text-yellow-500 uppercase">
              Solution
            </span>
            <p className="opacity-90 leading-relaxed break-keep whitespace-pre-wrap">
              {ts.solution}
            </p>
          </div>
          {ts.improvements && ts.improvements.length > 0 && (
            <div className="p-6 rounded-2xl bg-muted/50 border border-muted/80 space-y-4">
              <h4 className="text-sm font-bold flex items-center gap-2">
                ✨ 개선 결과
              </h4>
              <ul className="space-y-3">
                {ts.improvements.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="leading-relaxed break-keep">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {ts.beforeAfter && (
            <div className="py-10 border-y border-white/10 flex flex-col md:flex-row items-center justify-center gap-12">
              <div className="text-center">
                <p className="text-xs opacity-50 mb-2 uppercase">Before</p>
                <p className="text-4xl font-black text-red-400 break-keep">
                  {ts.beforeAfter.before}
                </p>
              </div>
              <div className="text-center">
                <p className="text-xs opacity-50 mb-2 uppercase">After</p>
                <p className="text-4xl font-black text-green-400 break-keep">
                  {ts.beforeAfter.after}
                </p>
              </div>
            </div>
          )}

          <div className="grid md:grid-cols-[140px_1fr] gap-6">
            <span className="font-bold text-yellow-500 uppercase">Learned</span>
            <ul className="space-y-3 opacity-90">
              {ts.learned.map((l, i) => (
                <li key={i} className="break-keep">
                  • {l}
                </li>
              ))}
            </ul>
          </div>

          {ts.links && ts.links.length > 0 && (
            <div className="grid md:grid-cols-[140px_1fr] gap-6">
              <span className="font-bold text-yellow-500 uppercase">
                Detail Article
              </span>
              <ul className="space-y-3 opacity-90">
                {ts.links.map((link, i) => (
                  <li key={i} className="flex">
                    <Link
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 hover:text-yellow-400 transition-colors underline underline-offset-4 decoration-white/30 hover:decoration-yellow-400"
                    >
                      <span className="break-keep">{link.title}</span>
                      <ExternalLink size={14} className="shrink-0" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {ts.images && ts.images.length > 0 && (
            <div className="pt-8">
              <Carousel opts={{ align: "start" }} className="w-full">
                <CarouselContent>
                  {ts.images.map((img, i) => (
                    <CarouselItem key={i} className="pl-4 md:pl-6">
                      <figure className="space-y-4">
                        <div className="w-4/5 mx-auto relative aspect-video shadow-md">
                          <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            className="object-contain"
                          />
                        </div>
                        {img.caption && (
                          <figcaption className="text-sm opacity-60 text-center font-medium break-keep">
                            {img.caption}
                          </figcaption>
                        )}
                      </figure>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                {ts.images.length > 1 && (
                  <div className="hidden md:block">
                    <CarouselPrevious className="left-2" />
                    <CarouselNext className="right-2" />
                  </div>
                )}
              </Carousel>
            </div>
          )}
        </article>
      ))}
    </section>
  );
}

export default ProjectTroubleShootingSection;
