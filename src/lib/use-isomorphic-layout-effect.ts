"use client";

import { useEffect, useLayoutEffect, useState } from 'react';

/**
 * A hook that uses useLayoutEffect on the client and useEffect on the server
 * This prevents hydration mismatches while maintaining the benefits of useLayoutEffect
 */
export const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

/**
 * A hook that safely handles client-side only state
 * Returns false on server and during hydration, then true on client
 */
export function useIsClient() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
}

/**
 * A hook that safely handles scroll-based state for SSR
 * Returns default values during SSR and hydration
 */
export function useScrollSafeState<T>(defaultValue: T, clientValue?: T): T {
  const [value, setValue] = useState<T>(defaultValue);
  const isClient = useIsClient();

  useEffect(() => {
    if (isClient && clientValue !== undefined) {
      setValue(clientValue);
    }
  }, [isClient, clientValue]);

  return value;
}
