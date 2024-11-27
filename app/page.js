import MoodMender from "@/components/mood-mender";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-teal-500 to-teal-700 p-8">
      <header className="mb-10 text-center">
        <h1 className="text-5xl font-bold mb-6 text-white">Mood Mender</h1>
        <p className="text-xl font-semibold mb-6 text-pretty text-orange-300">
          Feeling down? Let us help brighten your day!
        </p>
      </header>

      <main className="flex-grow flex items-center justify-center">
        <MoodMender />
      </main>

      <footer className="mt-10 text-center text-white">
        <p>© {new Date().getFullYear()} Brighten. All rights reserved.</p>
      </footer>
    </div>
  );
}
