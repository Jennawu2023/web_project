import MoodMender from "@/components/mood-mender";
import DailyMoodBoost from "@/components/daily-mood-boost";
import FlipCard from "@/components/flip-card";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-teal-500 to-teal-700">
      {/* Hero Section with enhanced typography */}
      <header className="pt-16 pb-12 px-8 text-center relative">
        <h1 className="relative inline-block">
          <span
            className="text-6xl font-bold text-white relative z-10 
            tracking-tight leading-none
            animate-fade-in-up
            after:content-[''] after:absolute after:-bottom-2 after:left-0 
            after:w-full after:h-1 after:bg-orange-300"
          >
            Mood Mender
          </span>
        </h1>
        <p
          className="text-xl font-semibold mt-8 text-pretty text-orange-300 
          max-w-2xl mx-auto leading-relaxed
          animate-fade-in-up animation-delay-200
          relative"
        >
          <span
            className="relative inline-block
            before:content-['✨'] before:absolute before:-left-8 before:top-0
            after:content-['✨'] after:absolute after:-right-8 after:top-0"
          >
            Feeling down? Let us help brighten your day!
          </span>
        </p>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center px-8 pb-16">
        {/* Mood Mender Component */}
        <div className="w-full max-w-4xl mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Mood Picker
          </h2>
          <MoodMender />
        </div>

        {/* Daily Mood Boost Section */}
        <div className="w-full max-w-4xl mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Daily Mood Boost
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <DailyMoodBoost />
            <FlipCard />
          </div>
        </div>

        {/* Features Section */}
        <div className="w-full max-w-4xl mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Why Choose Mood Mender?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
              <h3 className="text-xl font-semibold mb-3">
                Personalized Support
              </h3>
              <p className="text-gray-100">
                Get customized mood boosters based on your current emotional
                state.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
              <h3 className="text-xl font-semibold mb-3">Instant Mood Lift</h3>
              <p className="text-gray-100">
                Access jokes, quotes, and cute animal pictures to help improve
                your mood.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
              <h3 className="text-xl font-semibold mb-3">Daily Inspiration</h3>
              <p className="text-gray-100">
                Discover new content every day to keep your spirits high.
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="w-full max-w-4xl text-center">
          <p className="text-sm text-gray-200 bg-white/10 backdrop-blur-sm rounded-xl p-4">
            While Mood Mender can help with temporary mood improvement, it is
            not a substitute for professional mental health care. If you are
            experiencing persistent emotional difficulties, please seek help
            from a qualified mental health professional.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-white/80">
        <p>© {new Date().getFullYear()} Mood Mender. All rights reserved.</p>
      </footer>
    </div>
  );
}
