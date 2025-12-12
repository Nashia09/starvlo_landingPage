'use client';

import React from 'react';


export default function AuthIllustration() {
  return (
    <div className="w-full h-full">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="w-full h-full object-cover"
      >
        <source src="/assets/auth.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}