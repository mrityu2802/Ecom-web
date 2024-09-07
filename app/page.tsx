"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import useViewport from "./hooks/useViewPort";

const images = [
  { mobile: "/assets/mbanner.jpg", desktop: "/assets/wbanner.jpg" },
  { mobile: "/assets/snm.jpg", desktop: "/assets/smw.jpg" },
  { mobile: "/assets/obm.jpg", desktop: "/assets/obw.jpg" },
];

export default function Home() {
  const isMobile = useViewport();

  return (
    <div className="items-center justify-items-center min-h-screen px-12 pb-20 gap-16 sm:px-20 font-[family-name:var(--font-geist-sans)]">
      <Carousel opts={{ loop: true }}>
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <AspectRatio ratio={isMobile ? 9 / 12 : 16 / 9}>
                <Image
                  src={isMobile ? image.mobile : image.desktop}
                  alt={`Slide ${index}`}
                  fill
                  className="h-full w-full rounded-md object-cover"
                />
              </AspectRatio>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
