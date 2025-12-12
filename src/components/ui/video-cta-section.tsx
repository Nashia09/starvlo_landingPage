import React from 'react';

const VideoCTASection = () => {
  return (
    <section className="relative min-h-[400px] h-[60vh] md:h-[80vh] lg:h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/assets/spiral.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-end gap-4 pb-8 md:pb-12 lg:pb-16">
        <div className="text-center max-w-5xl px-4">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 tracking-tight">
            Join thousands globally.
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-bold mb-8 tracking-wide">
            Capture leads like thousands do with Starvlo
          </p>
        </div>
        <button className="rounded-full bg-gradient-to-r from-[#7FC4D2] to-[#5BA3B1] px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold text-white transition-all hover:opacity-90 hover:scale-105 shadow-lg">
          Get Started Now
        </button>
      </div>
    </section>
  );
};

export default VideoCTASection;