import React from "react";

const FIGMA_URL_ENCODED = "https%3A%2F%2Fwww.figma.com%2Fdesign%2FYanJpQyvEsLEtQn4duWynq%2FUntitled%3Fnode-id%3D4-2%26t%3D9Svz6qk2RgkvaCvF-4";

export default function DesignPreviewPage() {
  return (
    <main className="min-h-screen w-full">
      <div className="max-w-7xl mx-auto px-4 py-10 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl sm:text-3xl font-bold text-neutral-900">Design Preview</h1>
          <a
            href={`https://www.figma.com/design/YanJpQyvEsLEtQn4duWynq/Untitled?node-id=4-2&t=9Svz6qk2RgkvaCvF-4`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-[#7CBECE] px-4 py-2 text-[#7CBECE] hover:text-[#5A9BA5] hover:border-[#5A9BA5] transition-colors"
          >
            Open in Figma
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block">
              <path d="M14 3H21V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21 3L13 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 5H5V19H19V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        <div className="rounded-xl overflow-hidden border border-neutral-200 shadow-sm bg-white">
          <iframe
            className="w-full h-[70vh] sm:h-[80vh]"
            src={`https://www.figma.com/embed?embed_host=share&url=${FIGMA_URL_ENCODED}`}
            allowFullScreen
          />
        </div>
      </div>
    </main>
  );
}

