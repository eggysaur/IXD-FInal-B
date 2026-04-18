"use client"

import { useEffect, useRef, useState } from "react"

interface ZipperRowProps {
  index: number
  scrollProgress: number
  totalRows: number
  videoSrc: string
}

function ZipperRow({ index, scrollProgress, totalRows, videoSrc }: ZipperRowProps) {
  // Calculate when this row should start and finish opening
  const rowStart = index / totalRows
  const rowEnd = (index + 1) / totalRows

  // Calculate the progress for this specific row (0 to 1)
  const rowProgress = Math.max(0, Math.min(1, (scrollProgress - rowStart) / (rowEnd - rowStart)))

  // Calculate the translation (0% to 100%)
  const translateX = rowProgress * 100

  // Calculate the vertical position for this row's video slice
  const rowHeight = 100 / totalRows
  const topPosition = index * rowHeight

  return (
    <div className="relative w-full flex-1 overflow-hidden">
      {/* Left half */}
      <div
        className="absolute left-0 top-0 h-full w-1/2 overflow-hidden"
        style={{
          transform: `translateX(-${translateX}%)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        {/* Video positioned to show this row's slice */}
        <div
          className="h-full w-[200%]"
          style={{
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <video
            src={videoSrc}
            autoPlay
            loop
            muted
            defaultMuted
            playsInline
            className="pointer-events-none absolute left-0 object-cover"
            style={{
              width: '100%',
              height: `${totalRows * 100}%`,
              top: `-${index * 100}%`,
            }}
          />
        </div>
      </div>
      {/* Right half */}
      <div
        className="absolute right-0 top-0 h-full w-1/2 overflow-hidden"
        style={{
          transform: `translateX(${translateX}%)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <div
          className="h-full w-[200%] -translate-x-1/2"
          style={{
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <video
            src={videoSrc}
            autoPlay
            loop
            muted
            defaultMuted
            playsInline
            className="pointer-events-none absolute left-0 object-cover"
            style={{
              width: '100%',
              height: `${totalRows * 100}%`,
              top: `-${index * 100}%`,
            }}
          />
        </div>
      </div>
    </div>
  )
}

interface ZipperHeroProps {
  videoSrc?: string
}

export function ZipperHero({ videoSrc = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Se3QQVGk-zCSozy6M237lAxHj3PgDjqufcgD2OG.mp4" }: ZipperHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Calculate scroll progress (0 to 1) based on how much we've scrolled through the container
      const progress = Math.max(0, Math.min(1, -rect.top / windowHeight))

      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const totalRows = 8

  return (
    <div ref={containerRef} className="relative min-h-[200vh]">
      {/* Sticky container for the hero */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Background content that gets revealed */}
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-neutral-950 to-neutral-900">
          <div className="max-w-5xl px-8 text-center">
            <h1 className="mb-8 text-6xl font-bold tracking-tight text-white md:text-8xl lg:text-9xl">
              Design in the Post AI World?
            </h1>
            <p className="text-2xl text-neutral-300 md:text-3xl lg:text-3xl">
              Remember what happened to the art world after cameras? Let&apos;s talk about the new contemporary era of interaction design.
            </p>
          </div>
        </div>

        {/* Foreground zipper rows with video */}
        <div className="relative z-10 flex h-full flex-col bg-transparent">
          {Array.from({ length: totalRows }, (_, index) => (
            <ZipperRow
              key={index}
              index={index}
              scrollProgress={scrollProgress}
              totalRows={totalRows}
              videoSrc={videoSrc}
            />
          ))}
        </div>
      </div>

      {/* Spacer for scroll */}
      <div className="h-screen" />
    </div>
  )
}
