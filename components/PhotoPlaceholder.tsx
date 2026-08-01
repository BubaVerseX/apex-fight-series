import { ImageOff } from "lucide-react";

interface PhotoPlaceholderProps {
  label: string;
  className?: string;
  aspect?: "square" | "video" | "portrait" | "wide";
}

const aspectClass: Record<NonNullable<PhotoPlaceholderProps["aspect"]>, string> = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  wide: "aspect-[21/9]",
};

export default function PhotoPlaceholder({
  label,
  className = "",
  aspect = "video",
}: PhotoPlaceholderProps) {
  return (
    <div
      className={`clip-card relative flex flex-col items-center justify-center gap-3 border border-white/10 bg-[repeating-linear-gradient(135deg,#1c1c1c,#1c1c1c_10px,#141414_10px,#141414_20px)] text-center ${aspectClass[aspect]} ${className}`}
    >
      <div className="absolute inset-0 border border-apex-red/20" />
      <ImageOff className="h-7 w-7 text-apex-red/70" strokeWidth={1.5} />
      <span className="px-4 font-heading text-xs uppercase tracking-[0.2em] text-apex-gray">
        [ Photo: {label} ]
      </span>
    </div>
  );
}
