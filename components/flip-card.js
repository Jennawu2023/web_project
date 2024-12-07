"use client";

import { useState } from "react";

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="w-full h-[500px] perspective-1000 "
      onClick={handleClick}
      style={{ perspective: "1000px" }}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-3d cursor-pointer ${
          isFlipped ? "rotate-y-180" : ""
        }`}
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "",
        }}
      >
        {/* Front side */}
        <div
          className="absolute w-full h-full bg-white rounded-xl shadow-2xl p-8 flex items-center justify-center backface-hidden"
          style={{
            backfaceVisibility: "hidden",
            backgroundImage: "url('/bg.jpg')",
            backgroundSize: "cover",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
          }}
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Get Tips</h3>
            <p className="text-white">Click to discover mood lifting tips</p>
          </div>
        </div>

        {/* Back side */}
        <div
          className="absolute w-full h-full bg-white rounded-xl shadow-2xl p-8 rotate-y-180 backface-hidden"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div>
            <h3 className="text-2xl font-bold text-teal-600 mb-6">
              Quick Mood Boosting Tips
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                Take deep breaths and practice mindfulness for 5 minutes
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                Go for a short walk or stretch your body
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                Listen to your favorite uplifting music
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                Connect with a friend or family member
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                Write down three things you are grateful for
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
