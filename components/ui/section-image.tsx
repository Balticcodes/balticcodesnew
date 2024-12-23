import Image from "next/image";
import { cn } from "@/lib/utils";

interface SectionImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function SectionImage({ src, alt, className }: SectionImageProps) {
  return (
    <div className={cn("relative h-[300px] md:h-[400px] rounded-lg overflow-hidden", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );
}