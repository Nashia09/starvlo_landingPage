"use client"
import type React from "react"
import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react"

export const MacbookScroll = ({
  src,
  showGradient,
  title,
  badge,
  screens,
  fit = "cover",
}: {
  src?: string
  showGradient?: boolean
  title?: string | React.ReactNode
  badge?: React.ReactNode
  screens?: { src: string; label?: string }[]
  fit?: "cover" | "contain"
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (window && window.innerWidth < 768) {
      setIsMobile(true)
    }
  }, [])

  const deviceScale = useTransform(scrollYProgress, [0, 0.3], [0.95, 1])
  const translateY = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 300 : 200])
  const rotateX = useTransform(scrollYProgress, [0, 0.2], [-5, 0])
  const textTransform = useTransform(scrollYProgress, [0, 0.3], [0, 80])
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  const items = (screens && screens.length > 0) ? screens : (src ? [{ src }] : [])
  const [active, setActive] = useState(0)
  const current = items[active]?.src
  const isVideo = !!current && /\.mp4(\?.*)?$/i.test(current)

  const [aspect, setAspect] = useState<string>('4 / 3')
  useEffect(() => {
    if (!current || isVideo) return
    const img = new Image()
    img.src = current
    img.onload = () => {
      const w = img.naturalWidth || 4
      const h = img.naturalHeight || 3
      setAspect(`${w} / ${h}`)
    }
  }, [current, isVideo])

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center py-0"
    >
      {title && (
        <motion.h2
          style={{
            translateY: textTransform,
            opacity: textOpacity,
          }}
          className="mb-4 text-center text-2xl font-bold text-neutral-800 dark:text-white"
        >
          {title}
        </motion.h2>
      )}
      <motion.div
        style={{
          translateY,
          scale: deviceScale,
          rotateX,
          aspectRatio: aspect,
        }}
        className="relative w-[98vw] max-w-[96rem] rounded-[2rem] bg-black p-2 shadow-2xl [perspective:800px]"
        onClick={() => {
          if (items.length > 1) setActive((i) => (i + 1) % items.length)
        }}
      >
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-neutral-500" />
        <div className="relative h-full w-full rounded-[1.9rem] bg-[#111] overflow-hidden">
          <AnimatePresence initial={false} mode="wait">
            {current ? (
              isVideo ? (
                <motion.video
                  key={current}
                  src={current}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  onLoadedMetadata={(e) => {
                    const v = e.currentTarget
                    const w = v.videoWidth || 16
                    const h = v.videoHeight || 9
                    setAspect(`${w} / ${h}`)
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className={"absolute inset-0 h-full w-full bg-black " + (fit === "cover" ? "object-cover object-center" : "object-contain")}
                />
              ) : (
                <motion.img
                  key={current}
                  src={current}
                  alt="iPad screen content"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className={"absolute inset-0 h-full w-full bg-black " + (fit === "cover" ? "object-cover object-center" : "object-contain")}
                />
              )
            ) : (
              <motion.div
                key="placeholder"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 h-full w-full bg-black"
              />
            )}
          </AnimatePresence>
        </div>
        {badge && <div className="absolute bottom-4 left-4">{badge}</div>}
        {showGradient && (
          <div className="absolute inset-x-0 bottom-0 z-50 h-32 w-full bg-gradient-to-t from-white via-white to-transparent dark:from-black dark:via-black"></div>
        )}
      </motion.div>
    </div>
  )
}

