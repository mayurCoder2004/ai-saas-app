import React, { useEffect, useState } from "react";
import { useAuth, useUser } from "@clerk/clerk-react";
import { Heart } from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const Community = () => {
  const [creations, setCreations] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useUser();
  const { getToken } = useAuth();

  // Fetch published creations
  const fetchCreations = async () => {
    try {
      const token = await getToken();
      const { data } = await axios.get("/api/user/get-published-creations", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (data.success) setCreations(data.creations || []);
      else {
        toast.error(data.message || "Failed to fetch creations");
        setCreations([]);
      }
    } catch (error) {
      toast.error(error.message || "Something went wrong");
      setCreations([]);
    } finally {
      setLoading(false);
    }
  };

  // Toggle like/unlike
  const imageLikeToggle = async (id) => {
    try {
      const token = await getToken();
      const { data } = await axios.post(
        "/api/user/toggle-like-creation",
        { id },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (data.success) {
        toast.success(data.message);
        fetchCreations(); // refresh
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    }
  };

  useEffect(() => {
    if (user) fetchCreations();
  }, [user]);

  return !loading ? (
    <div className="flex flex-1 h-full flex-col gap-4 p-6">
      <h2 className="text-lg font-semibold">Creations</h2>
      <div className="bg-white h-full w-full rounded-xl overflow-y-scroll p-3">
        {Array.isArray(creations) && creations.length > 0 ? (
          creations.map((creation, index) => {
            const likes = Array.isArray(creation.likes)
              ? creation.likes
              : (creation.likes || "").split(",").filter(Boolean);

            return (
              <div
                key={index}
                className="relative group inline-block pl-3 pt-3 w-full sm:max-w-1/2 lg:max-w-1/3"
              >
                <img
                  src={creation.content || "/placeholder.png"}
                  alt="Creation"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute bottom-0 top-0 right-0 left-3 flex gap-2 items-end justify-end group-hover:justify-between p-3 group-hover:bg-gradient-to-b from-transparent to-black/80 text-white rounded-lg">
                  <p className="text-sm hidden group-hover:block">
                    {creation.prompt}
                  </p>
                  <div className="flex items-center gap-1">
                    <p>{likes.length}</p>
                    <Heart
                      onClick={() => imageLikeToggle(creation.id)}
                      className={`min-w-5 h-5 hover:scale-100 cursor-pointer ${
                        likes.includes(user?.id)
                          ? "fill-red-500 text-red-600"
                          : "text-white"
                      }`}
                    />
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-gray-500 text-center py-4">
            No creations published yet.
          </p>
        )}
      </div>
    </div>
  ) : (
    <div>
      <span className="w-10 h-10 my-1 rounded-full border-3 border-purple border-t-transparent animate-spin"></span>
    </div>
  )
};

export default Community;
