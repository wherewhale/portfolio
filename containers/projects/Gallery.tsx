import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/Carousel";
import { ImageIcon } from "lucide-react";
import Image from "next/image";

interface Props {
  gallery: {
    src: string;
    alt: string;
  }[];
}

function ProjectGallerySection({ gallery }: Props) {
  return (
    <section id="gallery" className="scroll-mt-32 space-y-8">
      {/* 3. 섹션 제목 통일 */}
      <h2 className="text-3xl font-bold border-b pb-4 flex items-center gap-3">
        <ImageIcon className="text-primary" /> Gallery
      </h2>
      <Carousel
        opts={{
          align: "start",
          loop: gallery.length > 1,
        }}
        className="w-full"
      >
        <CarouselContent>
          {gallery.map((img, i) => (
            <CarouselItem
              key={i}
              className="md:basis-4/5 lg:basis-3/4 pl-4 md:pl-6"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-contain"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:block">
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </div>
      </Carousel>
    </section>
  );
}

export default ProjectGallerySection;
