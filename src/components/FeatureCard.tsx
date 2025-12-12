import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import { HiOutlineDocument, HiOutlineCalendar, HiOutlineChatAlt, HiOutlineLightningBolt, HiOutlineChartBar, HiOutlineGlobe, HiOutlineMail, HiOutlineUserGroup, HiOutlineCog, HiOutlineShieldCheck } from 'react-icons/hi';

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
  gradient: string;
}

const iconMap = {
  'digital-box': HiOutlineDocument,
  'calendar-app': HiOutlineCalendar,
  'chat-bubble': HiOutlineChatAlt,
  'quick-setup': HiOutlineLightningBolt,
  'analytics-chart': HiOutlineChartBar,
  'website-builder': HiOutlineGlobe,
  'email-campaign': HiOutlineMail,
  'team-work': HiOutlineUserGroup,
  'automation-gear': HiOutlineCog,
  'security-shield': HiOutlineShieldCheck
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  image,
  gradient
}) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = useCallback(() => {
    setImageError(true);
  }, []);

  const iconName = image.split('/').pop()?.replace('.png', '') || 'digital-box';
  const Icon = iconMap[iconName as keyof typeof iconMap] || HiOutlineDocument;

  return (
    <article
      className={`relative p-6 lg:p-8 rounded-2xl ${gradient} transition-all duration-300 hover:shadow-xl hover:scale-[1.02] h-[280px] flex flex-col group cursor-pointer`}
      style={{ overflow: 'hidden' }}
      role="article"
      aria-labelledby={`feature-${title.replace(/\s+/g, '-').toLowerCase()}`}
    >
      <div className="flex flex-col h-full relative z-10">
        <div className="flex-1 max-w-[70%] pr-4">
          <h3
            id={`feature-${title.replace(/\s+/g, '-').toLowerCase()}`}
            className="text-lg lg:text-xl xl:text-2xl font-bold text-gray-900 mb-3 lg:mb-4 tracking-tight leading-tight"
          >
            {title}
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-gray-700 leading-relaxed line-clamp-3 font-medium">
            {description}
          </p>
        </div>
      </div>
      <div
        className="absolute right-0 bottom-0 w-32 h-32 lg:w-40 lg:h-40 transform translate-x-4 translate-y-4 lg:translate-x-6 lg:translate-y-6 transition-transform duration-300 group-hover:translate-y-2 lg:group-hover:translate-y-4"
        aria-hidden="true"
      >
        {!imageError ? (
          <Image
            src={image}
            alt=""
            width={160}
            height={160}
            className="object-contain w-full h-full"
            onError={handleImageError}
            loading="lazy"
            sizes="(max-width: 768px) 128px, 160px"
          />
        ) : (
          <Icon className="w-full h-full text-blue-500 opacity-80" />
        )}
      </div>
    </article>
  );
};

export default FeatureCard; 