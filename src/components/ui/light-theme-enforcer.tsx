"use client";

import { useLightThemeOnly } from "@/lib/remove-dark-mode";

export function LightThemeEnforcer() {
  // Use the hook to enforce light theme
  useLightThemeOnly();
  
  // This is a utility component that doesn't render anything
  return null;
} 