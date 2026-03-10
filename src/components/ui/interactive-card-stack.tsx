"use client";

import { Instagram, MessageCircle, FileText, Mail, Globe } from "lucide-react";
import { motion } from "motion/react";

const cards = [
  { id: 1, name: "Instagram DMs", icon: Instagram, stat: "3× faster" },
  { id: 2, name: "WhatsApp", icon: MessageCircle, stat: "24/7" },
  { id: 3, name: "Landing Pages", icon: Globe, stat: "Capture" },
  { id: 4, name: "Lead Forms", icon: FileText, stat: "Qualify" },
  { id: 5, name: "Email", icon: Mail, stat: "Nurture" },
];

const CARD_HEIGHT = 70;
const GAP = 16;
const CARD_TOTAL = CARD_HEIGHT + GAP;
const DUPLICATE_COUNT = 3; // Repeat for seamless loop

function HoverTranslateTwo() {
  const repeatedCards = [...Array(DUPLICATE_COUNT)].flatMap((_, i) =>
    cards.map((c) => ({ ...c, key: `${i}-${c.id}` }))
  );
  const loopDistance = cards.length * CARD_TOTAL;

  return (
    <div className="relative overflow-hidden flex flex-col items-center h-[350px]">
      <motion.div
        className="flex flex-col gap-4 w-full items-center justify-start shrink-0"
        animate={{ y: -loopDistance }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {repeatedCards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.key}
              className="h-16 w-[275px] flex items-center justify-between gap-4 rounded-xl pl-3.5 pr-4 text-sm shrink-0"
              style={{
                background:
                  "radial-gradient(65.62% 65.62% at 50% 50%, rgba(16, 185, 129, 0.25) 0%, rgba(16, 185, 129, 0) 100%), linear-gradient(rgba(16, 185, 129, 0.12) 0%, rgba(255,255,255,0.10) 100%), rgba(16, 124, 114, 0.4)",
                boxShadow:
                  "rgba(16, 185, 129, 0.08) 0px -12px 16px 0px inset, rgba(16, 185, 129, 0.2) 0px 4px 16px 0px inset, rgba(16, 185, 129, 0.12) 0px 0.75px 0.25px 0px inset, rgba(16, 185, 129, 0.3) 0px 0.25px 0.25px 0px inset",
              }}
            >
              <div className="w-full">
                <div className="flex items-center gap-3 w-full justify-between pr-2 pl-1">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/20">
                      <Icon className="w-4 h-4 text-white" strokeWidth={2} />
                    </div>
                    <span className="text-white font-medium -ml-0.5">
                      {card.name}
                    </span>
                  </div>
                  <span className="text-white/90 font-medium text-xs">
                    {card.stat}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </motion.div>

      <div
        className="pointer-events-none absolute inset-0 w-full bg-linear-to-b from-white via-transparent to-white z-20"
        style={{ filter: "blur(2px)" }}
      />
    </div>
  );
}

export default HoverTranslateTwo;
