"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const DailyMoodBoost = () => {
  const [dogImage, setDogImage] = useState("");
  const [joke, setJoke] = useState({ setup: "", punchline: "" });
  const [loading, setLoading] = useState(true);

  const fetchDogAndJoke = async () => {
    setLoading(true);
    try {
      // Fetch dog image
      const dogResponse = await fetch(
        "https://dog.ceo/api/breeds/image/random"
      );
      const dogData = await dogResponse.json();
      setDogImage(dogData.message);

      // Fetch joke
      const jokeResponse = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );
      const jokeData = await jokeResponse.json();
      setJoke({ setup: jokeData.setup, punchline: jokeData.punchline });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchDogAndJoke();
  }, []);

  return (
    <div className="w-full h-[500px] bg-white rounded-xl shadow-2xl overflow-hidden">
      <div className="p-8">
        <div className="relative w-full h-64 mb-6">
          {dogImage ? (
            <Image
              src={dogImage}
              alt="A cute dog"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Loading image...</p>
            </div>
          )}
        </div>
        <div className="mb-6">
          <p className="text-lg text-gray-700 mb-2">{joke.setup}</p>
          <p className="text-xl font-semibold text-teal-600">
            {joke.punchline}
          </p>
        </div>
        <button
          onClick={fetchDogAndJoke}
          disabled={loading}
          className="w-full py-3 px-4 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-500 transition-colors"
        >
          {loading ? "Loading..." : "Get New Boost"}
        </button>
      </div>
    </div>
  );
};

export default DailyMoodBoost;
