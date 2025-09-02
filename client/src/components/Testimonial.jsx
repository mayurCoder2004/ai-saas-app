import React from "react";

const Testimonial = () => {
  const dummyTestimonialData = [
    {
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
      name: "Sophia Johnson",
      title: "Head of Marketing, BrightLabs",
      content:
        "Aivana completely transformed how our team creates content. The AI suggestions feel human and save us so much time.",
      rating: 5,
    },
    {
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
      name: "Michael Chen",
      title: "Content Strategist, NovaTech",
      content:
        "The tools are intuitive and powerful. From blogs to visuals, everything is smoother. Definitely a game changer for creators.",
      rating: 4,
    },
    {
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
      name: "Emily Carter",
      title: "Freelance Writer",
      content:
        "As a solo creator, I can produce professional-level work at scale now. The AI tools give me the edge I needed.",
      rating: 5,
    },
  ];

  return (
    <div className="px-4 sm:px-20 xl:px-32 py-24 bg-gradient-to-b from-[#F8FAFF] via-[#FFFDFE] to-[#FDF7FF]">
      <div className="text-center">
        <h2 className="text-[42px] font-semibold bg-gradient-to-r from-brandBlue via-brandOrange to-brandPurple bg-clip-text text-transparent">
          Loved by Creators
        </h2>
        <p className="text-gray-600 max-w-lg mx-auto">
          Don’t just take our word for it. See what others are saying about
          Aivana.
        </p>
      </div>

      <div className="flex flex-wrap mt-10 justify-center">
        {dummyTestimonialData.map((testimonial, index) => (
          <div
            key={index}
            className="p-8 m-4 max-w-xs rounded-2xl bg-white shadow-lg border border-gray-100 hover:shadow-xl hover:border-brandOrange/40 hover:-translate-y-1 transition duration-300 cursor-pointer"
          >
            {/* Stars */}
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  width="18"
                  height="18"
                  viewBox="0 0 20 20"
                  fill={i < testimonial.rating ? "url(#gradient)" : "#E5E7EB"}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#3588F2" />
                      <stop offset="50%" stopColor="#F59E0B" />
                      <stop offset="100%" stopColor="#9333EA" />
                    </linearGradient>
                  </defs>
                  <path d="M10 1.5l2.7 6.6h6.9l-5.5 4.4 2 6.8-6-4-6 4 2-6.8-5.5-4.4h6.9L10 1.5z" />
                </svg>
              ))}
            </div>

            {/* Content */}
            <p className="text-gray-600 text-sm my-5">"{testimonial.content}"</p>
            <hr className="mb-5 border-gray-200" />

            {/* User Info */}
            <div className="flex items-center gap-4">
              <img
                src={testimonial.image}
                className="w-12 h-12 object-cover rounded-full border-2 border-brandBlue/30"
                alt={testimonial.name}
              />
              <div className="text-sm text-gray-700">
                <h3 className="font-semibold text-brandDark">
                  {testimonial.name}
                </h3>
                <p className="text-xs text-gray-500">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;