"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";


const transition = {
  type: "spring" as const,
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

// Doodle-style underline component
const DoodleUnderline = ({ isActive }: { isActive: boolean }) => {
  return (
    <motion.div
      className="absolute -bottom-3 left-1/2 transform -translate-x-1/2"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: isActive ? 1 : 0,
        scale: isActive ? 1 : 0.8
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <svg
        width="45"
        height="10"
        viewBox="0 0 45 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-[var(--color-primary)]"
      >
        <path
          d="M3 7C9 3 13 5 20 4C27 3 31 6 36 5C39 4 41 3 42 4"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="drop-shadow-sm"
        />
      </svg>
    </motion.div>
  );
};

export const  MenuItem = ({
  setActive,
  active,
  item,
  children,
  isActive = false,
  
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
  isActive?: boolean;
  href?: string;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className={cn(
          "cursor-pointer hover:opacity-[0.9] px-3 py-3 pb-4 relative",
          isActive
            ? "text-[var(--color-primary)] font-medium"
            : "text-neutral-600 dark:text-neutral-300"
        )}
      >
        {item}
        <DoodleUnderline isActive={isActive} />
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4 z-50">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-white dark:bg-neutral-950 backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
  className,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className={cn(
        "relative flex justify-center space-x-6",
        className
      )}
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <a href={href} className="flex space-x-2">
      <img
        src={src}
        width={140}
        height={70}
        alt={title}
        className="shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </a>
  );
};

export const HoveredLink = ({ 
  children, 
  ...rest 
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & { 
  children: React.ReactNode 
}) => {
  return (
    <a
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black "
    >
      {children}
    </a>
  );
}; 
