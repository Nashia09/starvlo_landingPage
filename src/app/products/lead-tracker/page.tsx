"use client";
import ProductPageLayout from "@/components/ui/product-page-layout";

export default function LeadTrackerPage() {
  return (
    <ProductPageLayout
      productName="LeadTracker"
      description="Track leads through your sales pipeline with real-time analytics and actionable insights."
      dashboardImage="/lead-tracker-dashboard.webp"
      customerCases={[
        {
          name: "SalesPro",
          metric: "Conversion rate",
          value: "42%",
          description: "How SalesPro increased their conversion rate by implementing LeadTracker.",
        },
        {
          name: "DigitalEdge",
          metric: "Revenue increase",
          value: "185%",
          description: "How DigitalEdge transformed their sales process with LeadTracker analytics.",
        },
        {
          name: "GlobalTech",
          metric: "Sales cycle",
          value: "45% faster",
          description: "How GlobalTech shortened their sales cycle with LeadTracker insights.",
        },
      ]}
    />
  );
} 