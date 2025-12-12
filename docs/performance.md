Performance Optimization Summary

Overview
- The landing experience uses multiple scroll-based animations, large images, and background videos. Combined, these can produce noticeable jank on mid-range devices or constrained networks.

Primary Hotspots
- Hero Parallax (`src/components/ui/hero-parallax.tsx`): Previously rendered 15 remote thumbnails via plain `<img>` with large source sizes. Now switched to `next/image` with responsive `sizes` and `quality=70` to reduce decode and bandwidth.
- Video sections (`hero-section`, `features-section`, `video-cta-section`, `auth/AuthIllustration`): Autoplaying backgrounds can trigger heavy decoding. Added `preload="metadata"` to avoid eager video fetching. Corrected MIME type mismatch in `video-cta-section`.
- Sticky Scroll (`src/components/ui/sticky-scroll.tsx`): Uses IntersectionObserver and many `framer-motion` animations. It’s generally fine, but rapid `activeStep` updates re-render large subtrees. Keep content lean and avoid nested heavy animations within each step.

Additional Considerations
- Animation libraries: The codebase mixed `motion/react` and `framer-motion`. Consolidating on `framer-motion` avoids shipping multiple animation runtimes. `hero-parallax` is updated accordingly.
- Particle effects: The `SparklesCore` component config sets `fpsLimit: 120` and relatively dense particles. If used on high-traffic pages, consider lowering density and FPS to 30–60.
- Images: Prefer `next/image` for all remote assets. Ensure allowed domains in `next.config.ts` under `images.remotePatterns`.

Quick Wins
- Use `next/image` with `sizes` for all hero/feature images; avoid raw `<img>` for large assets.
- Add `preload="metadata"` for non-essential videos and provide `poster` frames where appropriate.
- Reduce duplicate animation libraries and avoid overlapping animations in the same viewport region.
- Audit CSS keyframe animations and pause them when offscreen or when `prefers-reduced-motion`.

Testing
- Validate changes by measuring scroll and CPU usage in Chrome DevTools Performance panel.
- Throttle network to `Fast 3G` and confirm above-the-fold is smooth and responsive.