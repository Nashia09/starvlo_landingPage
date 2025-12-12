"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const PinContainer = ({
  children,
  title,
  href,
  className,
  containerClassName,
  variant,
  showPin,
  interactive,
}: {
  children: React.ReactNode;
  title?: string;
  href?: string;
  className?: string;
  containerClassName?: string;
  variant?: "default" | "minimal";
  showPin?: boolean;
  interactive?: boolean;
}) => {
  const [transform, setTransform] = useState(
    "translate(-50%,-50%) rotateX(0deg)"
  );
  const [overlayTransform, setOverlayTransform] = useState(
    "rotateX(0deg) scale(1)"
  );

  const onMouseEnter = () => {
    if (interactive !== false) {
      setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
      setOverlayTransform("rotateX(40deg) scale(0.8)");
    }
  };
  const onMouseLeave = () => {
    if (interactive !== false) {
      setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
      setOverlayTransform("rotateX(0deg) scale(1)");
    }
  };

  return (
    <a
      className={cn(
        "relative group/pin z-50  cursor-pointer",
        containerClassName
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      href={href || "/"}
    >
      <div
        style={{
          perspective: "1000px",
          transform:
            variant === "minimal"
              ? "rotateX(0deg) translateZ(0deg)"
              : "rotateX(70deg) translateZ(0deg)",
        }}
        className={cn(
          "absolute left-1/2 top-1/2 ml-[0.09375rem] -translate-x-1/2 -translate-y-1/2",
          variant === "minimal" ? "mt-0" : "mt-4"
        )}
      >
        <div
          style={{
            transform: transform,
          }}
          className={cn(
            "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
            variant === "minimal"
              ? "p-0 flex justify-start items-start rounded-2xl shadow-none bg-transparent border-transparent transition duration-700 overflow-visible"
              : "p-4 flex justify-start items-start rounded-2xl shadow-[0_8px_16px_rgb(0_0_0/0.4)] bg-black border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden"
          )}
        >
          <div className={cn(" relative z-50 ", className)}>{children}</div>
        </div>
      </div>
      {showPin !== false && (
        <PinPerspective title={title} href={href} variant={variant} overlayTransform={overlayTransform} />
      )}
    </a>
  );
};

export const PinPerspective = ({
  title,
  href,
  variant,
  overlayTransform,
}: {
  title?: string;
  href?: string;
  variant?: "default" | "minimal";
  overlayTransform?: string;
}) => {
  return (
    <motion.div className="pointer-events-none absolute inset-0 opacity-0 group-hover/pin:opacity-100 z-[60] transition duration-500">
      <div className="w-full h-full relative">
        <div className="absolute top-0 inset-x-0  flex justify-center">
          <a
            href={href}
            target={"_blank"}
            className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 "
          >
            <span className="relative z-20 text-white text-xs font-bold inline-block py-0.5">
              {title}
            </span>

            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover/btn:opacity-40"></span>
          </a>
        </div>

        <div
          style={{
            perspective: "1000px",
            transform: overlayTransform,
          }}
          className={cn(
            "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
            variant === "minimal" ? "ml-0 mt-0" : "ml-[0.09375rem] mt-4"
          )}
        >
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative h-12 w-12">
              <div className="absolute inset-0 rounded-full ring-2 ring-cyan-400/60 bg-cyan-400/10" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-cyan-400 shadow" />
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
};
