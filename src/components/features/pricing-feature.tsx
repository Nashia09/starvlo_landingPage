import FeatureShowcase from "@/components/ui/feature-showcase";
import { cn } from "@/lib/utils";

const companiesDemo = [
  { name: "YouTuber Pro", time: "21m", visits: "1103", status: "HIGH ENGAGEMENT" },
  { name: "Podcast Star", time: "21m", visits: "1103", status: "NEW SUBSCRIBER" },
  { name: "Blog Master", time: "21m", visits: "1103", status: "MONETIZED" },
];

export default function PricingFeature() {
  return (
    <FeatureShowcase
      title="Simple pricing that grows with your audience"
      description="Our plans are based on the number of engaged followers we help you identify each month."
      icon="🎯"
      bulletPoints={[
        "Track each follower only once",
        "Focus on your most engaged audience members",
        "Access all content creator tools and features",
      ]}
      ctaText="Start growing your audience"
      ctaLink="#"
    >
      <div className="bg-gradient-to-br from-[#7CBECE] via-[#7CBECE]/50 to-white dark:from-[#7CBECE] dark:via-[#7CBECE]/30 dark:to-gray-900 p-6 space-y-4">
        {companiesDemo.map((company, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-md bg-gray-200 dark:bg-gray-700" />
              <span className="font-medium">{company.name}</span>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
              <span>{company.time}</span>
              <span>{company.visits}</span>
              <span
                className={cn(
                  "px-3 py-1 rounded-full text-xs font-medium",
                  {
                    "bg-green-100 text-green-700": company.status === "HIGH ENGAGEMENT",
                    "bg-purple-100 text-purple-700": company.status === "NEW SUBSCRIBER",
                    "bg-red-100 text-red-700": company.status === "MONETIZED",
                  }
                )}
              >
                {company.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </FeatureShowcase>
  );
} 