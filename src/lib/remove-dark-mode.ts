"use client";

import { useEffect } from 'react';

/**
 * Utility hook to remove all dark mode classes from the DOM
 * This ensures only light theme styling is applied
 */
export function useLightThemeOnly() {
  useEffect(() => {
    // Function to remove dark mode classes
    const removeDarkModeClasses = () => {
      // Get all elements in the DOM
      const allElements = document.querySelectorAll('*');
      
      // Regex to match dark: prefixed Tailwind classes
      const darkModeRegex = /\bdark:[^\s]*/g;
      
      // Loop through all elements
      allElements.forEach(element => {
        const classList = element.className;
        
        // Skip elements without classes or non-string classes
        if (!classList || typeof classList !== 'string') return;
        
        // Remove dark mode classes
        if (classList.includes('dark:')) {
          const newClassList = classList.replace(darkModeRegex, '');
          element.className = newClassList;
        }
      });
    };

    // Initial removal
    removeDarkModeClasses();
    
    // Set up a mutation observer to watch for new elements
    const observer = new MutationObserver(() => {
      removeDarkModeClasses();
    });
    
    // Start observing the document
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['class']
    });
    
    // Cleanup
    return () => observer.disconnect();
  }, []);
} 