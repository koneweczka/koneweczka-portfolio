import { publicUrl } from "@/utils/public-url";

type Corner = "top-left" | "top-right" | "bottom-left" | "bottom-right";

const CORNER_CLASSES: Record<Corner, string> = {
  "top-left": "top-4 left-4",
  "top-right": "top-4 right-4",
  "bottom-left": "bottom-4 left-4",
  "bottom-right": "bottom-4 right-4",
};

function CornerImage({ src, className }: { src: string; className: string }) {
  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      className={`corner-img ${className}`}
    />
  );
}

export function CornerDecorations() {
  const corners: Corner[] = [
    "top-left",
    "top-right",
    "bottom-left",
    "bottom-right",
  ];

  return (
    <>
      {corners.map((corner) => (
        <CornerImage
          key={`light-${corner}`}
          src={publicUrl(`images/corner-${corner}.png`)}
          className={`hidden md:block dark:hidden ${CORNER_CLASSES[corner]}`}
        />
      ))}

      {corners.map((corner) => (
        <CornerImage
          key={`dark-${corner}`}
          src={publicUrl(`images/dark-${corner}.png`)}
          className={`hidden md:dark:block ${CORNER_CLASSES[corner]}`}
        />
      ))}
    </>
  );
}
