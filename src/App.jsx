import { motion } from "framer-motion";
import { useState } from "react";

export default function App() {
  const songs = [
    {
      title: "After Hours",
      artist: "The Weeknd",
      mood: "Melancholic",
      progress: "50%",
      currentTime: "1:42",
      duration: "3:20",
      cover:
        "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Weeknd_-_After_Hours.png",
      color: "from-indigo-900 via-black to-purple-900",
      particleColor: "bg-purple-400",
      description: "Dreamy, emotional and reflective.",
    },
    {
      title: "Starboy",
      artist: "The Weeknd",
      mood: "Energetic",
      progress: "70%",
      currentTime: "2:10",
      duration: "3:50",
      cover:
        "https://upload.wikimedia.org/wikipedia/en/3/39/The_Weeknd_-_Starboy.png",
      color: "from-cyan-900 via-black to-blue-900",
      particleColor: "bg-cyan-400",
      description: "Fast paced, confident and powerful.",
    },
    {
      title: "Blinding Lights",
      artist: "The Weeknd",
      mood: "Euphoric",
      progress: "35%",
      currentTime: "1:05",
      duration: "3:22",
      cover:
        "https://upload.wikimedia.org/wikipedia/en/e/e6/The_Weeknd_-_Blinding_Lights.png",
      color: "from-red-900 via-black to-orange-900",
      particleColor: "bg-orange-400",
      description: "Bright energy and late-night city lights.",
    },
    {
  title: "Snooze",
  artist: "SZA",
  mood: "Romantic",
  progress: "62%",
  currentTime: "2:12",
  duration: "3:35",
  cover: "https://i.scdn.co/image/ab67616d0000b2733097b1375ab17ae5bf302a0a",
  color: "from-pink-900 via-black to-rose-900",
  particleColor: "bg-pink-400",
  description: "Warm, intimate and deeply affectionate.",
},
  ];

  const [song, setSong] = useState(songs[0]);

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black">

      {/* Animated Background */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`absolute inset-0 bg-gradient-to-br ${song.color}`}
      />

      {/* Glow Layers */}
      <div className="absolute h-96 w-96 rounded-full bg-pink-500/20 blur-3xl" />
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

      {/* Floating Particles */}
      {Array.from({ length: 25 }).map((_, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, -700],
            opacity: [0, 1, 0],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
          className={`absolute h-2 w-2 rounded-full ${song.particleColor}`}
          style={{
            left: `${Math.random() * 100}%`,
            bottom: "-20px",
          }}
        />
      ))}

      {/* WAVR Logo */}
      <div className="absolute left-8 top-8 z-30">

  <h1 className="text-4xl font-black tracking-[0.25em] text-white drop-shadow-2xl">
    WAVR
  </h1>

  <p className="mt-1 text-xs tracking-widest text-gray-300">
    Interactive Audio Reactive Music Experience
  </p>

</div>

      {/* Main Card */}
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative z-20 mt-24 w-[420px] rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl"
      >

        {/* Album Section */}
        <div className="relative">

          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className={`absolute inset-0 rounded-3xl blur-3xl ${song.particleColor}`}
          />

          <img
            src={song.cover}
            alt={song.title}
            className="relative h-72 w-full rounded-3xl object-contain shadow-2xl bg-black/20"
          />

        </div>

        {/* Song Info */}
        <div className="mb-2 text-xs uppercase tracking-[0.3em] text-gray-400">
  Now Playing
</div>
        <h1 className="mt-5 text-3xl font-bold text-white">
          {song.title}
        </h1>

        <p className="text-gray-300">
          {song.artist}
        </p>

        {/* Mood Badge */}
        <div className="mt-4 inline-block rounded-full bg-white/10 px-4 py-1 text-sm text-white">
          {song.mood}
        </div>

        {/* Mood Description */}
        <p className="mt-3 text-center text-sm italic text-gray-300">
          {song.description}
        </p>

        {/* Visualizer */}
        <div className="mt-8 flex h-32 items-end justify-center gap-2">

          {Array.from({ length: 14 }).map((_, index) => (

            <motion.div
              key={index}
              animate={{
                height: [
                  "20%",
                  `${20 + Math.random() * 80}%`,
                  "40%",
                ],
              }}
              transition={{
                duration: 0.7,
                repeat: Infinity,
                repeatType: "mirror",
                delay: index * 0.05,
              }}
              className={`w-4 rounded-full shadow-lg ${song.particleColor}`}
            />

          ))}

        </div>

        {/* Progress Bar */}
        <div className="mt-6">

          <div className="h-2 w-full overflow-hidden rounded-full bg-gray-700">

            <motion.div
              key={song.title}
              initial={{ width: "0%" }}
              animate={{ width: song.progress }}
              transition={{ duration: 1 }}
              className={`h-full ${song.particleColor}`}
            />

          </div>

          <div className="mt-2 flex justify-between text-sm text-gray-400">
            <span>{song.currentTime}</span>
            <span>{song.duration}</span>
          </div>

        </div>

        {/* Song Switch Buttons */}
        <div className="mt-6 flex flex-wrap gap-2">

          {songs.map((s, index) => (

            <button
              key={index}
              onClick={() => setSong(s)}
              className="rounded-xl bg-white/10 px-3 py-2 text-sm text-white transition-all duration-300 hover:scale-105 hover:bg-white/20"
            >
              {s.title}
            </button>

          ))}

        </div>

      </motion.div>

    </div>
  );
}