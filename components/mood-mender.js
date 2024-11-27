"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const emotions = [
  {
    type: "sad",
    image: "/cry.png",
    label: "Sad",
    message: "Have a joke to cheer you up:",
  },
  {
    type: "frustrated",
    image: "/frustrated.png",
    label: "Frustrated",
    message: "A motivational quote for you:",
  },
  {
    type: "nervous",
    image: "/nervous.png",
    label: "Nervous",
    message: "Let this cute dog calm your nerves:",
  },
];

export default function MoodMender() {
  const [emotion, setEmotion] = useState(null);
  const [recommendation, setRecommendation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Set background image immediately when the page loads
  useEffect(() => {
    setIsLoading(true);
  }, []);

  const handleRecommendation = async (selectedEmotion) => {
    setEmotion(selectedEmotion);
    setIsLoading(true);

    try {
      let content, image;
      switch (selectedEmotion) {
        case "sad":
          const jokeResponse = await fetch(
            "https://official-joke-api.appspot.com/random_joke"
          );
          const jokeData = await jokeResponse.json();
          content = `${jokeData.setup} ${jokeData.punchline} \n 😂😂😂`;
          break;
        case "frustrated":
          const quoteResponse = await fetch("/api");
          if (!quoteResponse.ok) {
            throw new Error(`HTTP error! status: ${quoteResponse.status}`);
          }
          const quoteData = await quoteResponse.json();
          content = `${quoteData.quote.body} -- ${
            quoteData.quote.author || "Unknown"
          }`;
          break;
        case "nervous":
          const dogResponse = await fetch(
            "https://dog.ceo/api/breeds/image/random"
          );
          const dogData = await dogResponse.json();
          content = "Take a deep breath and enjoy this cute dog picture.";
          image = dogData.message;
          break;
        default:
          content = "Please select an emotion.";
      }
      setRecommendation({ content, image });
    } catch (error) {
      console.error("Error fetching recommendation:", error);
      setRecommendation({
        content:
          "Sorry, we couldn't fetch a recommendation right now. Please try again later.",
      });
    }

    setIsLoading(false);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
      <div className="md:flex">
        <div className="md:w-1/3 bg-teal-600 p-8">
          <h2 className="text-3xl font-bold text-white mb-6">
            How are you feeling today?
          </h2>
          <div className="space-y-4">
            {emotions.map(({ type, image, label }) => (
              <button
                key={type}
                onClick={() => handleRecommendation(type)}
                className={`w-full flex items-center space-x-4 p-3 rounded-lg transition-colors ${
                  emotion === type
                    ? "bg-orange-400 text-white"
                    : "bg-teal-500 text-teal-100 hover:bg-teal-400"
                }`}
              >
                <Image
                  src={image}
                  alt={label}
                  width={100}
                  height={100}
                  className="rounded-full"
                />
                <span className="text-lg font-medium">{label}</span>
              </button>
            ))}
          </div>
        </div>
        <div
          className="md:w-2/3 p-8 bg-gray-200"
          style={{
            backgroundImage: "url('/background.jpg')",
            backgroundSize: "cover",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
          }}
        >
          {isLoading ? (
            <div className="flex justify-center items-center h-full">
              <p className="text-3xl text-white mt-5 font-semibold">
                Select an emotion to get started
              </p>
            </div>
          ) : recommendation ? (
            <div className="relative h-full flex flex-col justify-center bg-cover bg-center">
              <h3 className="text-3xl font-semibold mb-4 text-teal-600 z-10">
                {emotions.find((e) => e.type === emotion)?.message ||
                  "Your Mood Mender:"}
              </h3>
              <p className="text-2xl font-medium mb-6 whitespace-pre-wrap text-gray-600 z-10">
                {recommendation.content}
              </p>
              {recommendation.image && (
                <div className="relative w-full h-96 mt-4">
                  <Image
                    src={recommendation.image}
                    alt="Mood mender image"
                    layout="fill"
                    objectFit="contain"
                    className="rounded-lg"
                  />
                </div>
              )}
            </div>
          ) : (
            <div className="flex justify-center items-center h-full">
              <p className="text-3xl text-white mt-5 font-semibold">
                Select an emotion to get started
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
