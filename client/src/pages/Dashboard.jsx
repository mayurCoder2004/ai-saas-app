import React, { useEffect, useState } from "react";
import { dummyCreationData } from "../assets/assets";
import { GemIcon, Sparkles } from "lucide-react";
import { Protect } from "@clerk/clerk-react";
import CreationItem from "../components/CreationItem";

const Dashboard = () => {
  const [creations, setCreations] = useState([]);

  const getDashboardData = async () => {
    setCreations(dummyCreationData);
  };

  useEffect(() => {
    getDashboardData();
  }, []);

  return (
    <div className="h-full overflow-y-scroll p-6">
      <div className="flex justify-start gap-4 flex-wrap">
        {/* Total Creations Card */}
        <div className="flex justify-between items-center w-72 p-4 px-6 bg-white rounded-xl border border-gray-200 shadow-sm">
          <div className="text-[#1E1E2E]">
            <p className="text-sm text-gray-500">Total Creations</p>
            <h2 className="text-xl font-semibold">{creations.length}</h2>
          </div>
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0066FF] to-[#6A5ACD] text-white flex justify-center items-center">
            <Sparkles className="w-5 text-white" />
          </div>
        </div>

        {/* Active Plan Card */}
        <div className="flex justify-between items-center w-72 p-4 px-6 bg-white rounded-xl border border-gray-200 shadow-sm">
          <div className="text-[#1E1E2E]">
            <p className="text-sm text-gray-500">Active Plan</p>
            <h2 className="text-xl font-semibold">
              <Protect plan="premium" fallback="Free">
                Premium
              </Protect>
            </h2>
          </div>
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#FF8000] to-[#FFD033] text-white flex justify-center items-center">
            <GemIcon className="w-5 text-white" />
          </div>
        </div>
      </div>

      {/* Recent Creations */}
      <div className="space-y-3">
        <p className="mt-6 mb-4 text-[#1E1E2E] font-medium">
          Recent Creations
        </p>
        {creations.map((item) => (
          <CreationItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
