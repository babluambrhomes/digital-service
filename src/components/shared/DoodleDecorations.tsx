"use client";

import { cn } from "@/lib/utils";

/* ===== Hand-Drawn Star ===== */
export function DoodleStar({
  className,
  size = 24,
  color = "currentColor",
}: {
  className?: string;
  size?: number;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={cn("inline-block", className)}
    >
      <path
        d="M12 2 L14.5 8.5 L21.5 9.5 L16.5 14 L18 21 L12 17.5 L6 21 L7.5 14 L2.5 9.5 L9.5 8.5 Z"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

/* ===== Hand-Drawn Circle ===== */
export function DoodleCircle({
  className,
  size = 40,
  color = "currentColor",
}: {
  className?: string;
  size?: number;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      className={cn("inline-block", className)}
    >
      <path
        d="M20 4 C28 3, 36 10, 36 20 C37 28, 30 37, 20 37 C11 37, 3 30, 3 20 C3 11, 11 4, 20 4"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

/* ===== Hand-Drawn Arrow Right ===== */
export function DoodleArrowRight({
  className,
  size = 32,
  color = "currentColor",
}: {
  className?: string;
  size?: number;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={cn("inline-block", className)}
    >
      <path
        d="M4 16 L26 16"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M20 10 L26 16 L20 22"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ===== Hand-Drawn Checkmark ===== */
export function DoodleCheck({
  className,
  size = 20,
  color = "currentColor",
}: {
  className?: string;
  size?: number;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      className={cn("inline-block", className)}
    >
      <path
        d="M4 10 L8 15 L16 5"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ===== Hand-Drawn X / Cross ===== */
export function DoodleX({
  className,
  size = 20,
  color = "currentColor",
}: {
  className?: string;
  size?: number;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      className={cn("inline-block", className)}
    >
      <path
        d="M5 5 L15 15"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M15 5 L5 15"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ===== Hand-Drawn Quote Marks ===== */
export function DoodleQuote({
  className,
  size = 48,
  color = "currentColor",
}: {
  className?: string;
  size?: number;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={cn("inline-block", className)}
    >
      <path
        d="M12 28 C8 28, 6 24, 6 20 C6 14, 10 10, 16 10 L16 14 C12 14, 10 17, 10 20 L14 20 C16 20, 16 22, 16 24 C16 26, 14 28, 12 28"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M28 28 C24 28, 22 24, 22 20 C22 14, 26 10, 32 10 L32 14 C28 14, 26 17, 26 20 L30 20 C32 20, 32 22, 32 24 C32 26, 30 28, 28 28"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

/* ===== Hand-Drawn Bracket ===== */
export function DoodleBracket({
  className,
  size = 24,
  color = "currentColor",
  side = "left",
}: {
  className?: string;
  size?: number;
  color?: string;
  side?: "left" | "right";
}) {
  return (
    <svg
      width={size}
      height={size * 1.5}
      viewBox="0 0 24 36"
      fill="none"
      className={cn("inline-block", className, side === "right" && "scale-x-[-1]")}
    >
      <path
        d="M18 2 C12 2, 6 4, 6 10 L6 16 C6 20, 4 22, 2 24 M6 16 C6 20, 6 24, 6 28 C6 32, 12 34, 18 34"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

/* ===== Hand-Drawn Play Button ===== */
export function DoodlePlay({
  className,
  size = 48,
  color = "currentColor",
}: {
  className?: string;
  size?: number;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={cn("inline-block", className)}
    >
      <circle
        cx="24"
        cy="24"
        r="20"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M20 16 L34 24 L20 32 Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={color}
        opacity="0.2"
      />
    </svg>
  );
}

/* ===== Squiggly Underline SVG ===== */
export function SquigglyLine({
  className,
  width = 100,
  color = "oklch(0.45 0.18 250)",
}: {
  className?: string;
  width?: number;
  color?: string;
}) {
  return (
    <svg
      width={width}
      height="8"
      viewBox={`0 0 ${width} 8`}
      fill="none"
      className={cn("inline-block", className)}
      style={{ overflow: "visible" }}
    >
      <path
        d={`M0,4 Q${width * 0.05},0 ${width * 0.1},4 T${width * 0.2},4 T${width * 0.3},4 T${width * 0.4},4 T${width * 0.5},4 T${width * 0.6},4 T${width * 0.7},4 T${width * 0.8},4 T${width * 0.9},4 T${width},4`}
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

/* ===== Wavy Divider ===== */
export function WavyDivider({ className }: { className?: string }) {
  return (
    <div className={cn("wavy-divider my-2", className)} />
  );
}
