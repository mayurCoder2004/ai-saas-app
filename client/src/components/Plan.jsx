import React from "react";
import { PricingTable } from "@clerk/clerk-react";

const Plan = () => {
  return (
    <div className="max-w-2xl mx-auto z-20 my-30">
      {/* Section Header */}
      <div className="text-center">
        <h2 className="text-[42px] font-semibold bg-gradient-to-r from-[#3588F2] via-[#F59E0B] to-[#9333EA] bg-clip-text text-transparent">
          Choose Your Plan
        </h2>
        <p className="text-gray-600 max-w-lg mx-auto">
          Start for free and scale up as you grow. Find the perfect plan for
          your content creation needs.
        </p>
      </div>

      {/* Pricing Table */}
      <div className="mt-14 max-sm:mx-8">
        <PricingTable
          appearance={{
            variables: {
              colorPrimary: "#3588F2", // Blue
              colorText: "#1F2937", // Dark gray
              colorTextSecondary: "#6B7280", // Muted gray
              colorBackground: "#FFFFFF", // Card background
              colorInputBackground: "#F9FAFB", // Light input bg
              colorDanger: "#F59E0B", // Orange for alerts
              colorSuccess: "#9333EA", // Purple for success accents
              borderRadius: "12px",
            },
            elements: {
              rootBox: "shadow-lg border border-gray-100 hover:shadow-xl transition",
              planCard: "hover:-translate-y-1 hover:border-[#F59E0B] duration-300",
              planName: "text-lg font-semibold text-[#3588F2]",
              planPrice: "text-2xl font-bold text-[#9333EA]",
              planDescription: "text-gray-500",
              planButton:
                "bg-gradient-to-r from-[#3588F2] via-[#F59E0B] to-[#9333EA] text-white font-medium rounded-lg px-6 py-2 hover:opacity-90 transition",
            },
          }}
        />
      </div>
    </div>
  );
};

export default Plan;
