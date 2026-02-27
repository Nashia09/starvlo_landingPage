"use client";

import { IconSun } from "@tabler/icons-react";

export function DirectThemeToggle() {

  return (
    <button
      className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 p-2 text-gray-600 transition-colors hover:bg-gray-200"
      aria-label="Light theme"
      disabled
    >
      <IconSun className="h-5 w-5" />
    </button>
  );
} 