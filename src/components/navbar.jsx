"use client"

import { useState, useEffect } from "react"

export default function Navbar() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const DEADLINE = new Date("2025-11-19T12:00:00").getTime()

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const distance = DEADLINE - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((distance / 1000 / 60) % 60),
          seconds: Math.floor((distance / 1000) % 60),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-linear-to-b from-slate-900/95 via-slate-900/80 to-transparent backdrop-blur-md border-b border-cyan-500/20">
      <style>{`
        @keyframes neon-glow {
          0%, 100% {
            text-shadow: 0 0 10px rgba(34, 211, 238, 0.5), 0 0 20px rgba(34, 211, 238, 0.3);
          }
          50% {
            text-shadow: 0 0 20px rgba(34, 211, 238, 0.8), 0 0 40px rgba(34, 211, 238, 0.5);
          }
        }
        .neon-text {
          animation: neon-glow 3s ease-in-out infinite;
          font-family: 'Orbitron', sans-serif;
        }
        @keyframes timer-pulse {
          0%, 100% {
            box-shadow: 0 0 15px rgba(34, 211, 238, 0.4), inset 0 0 15px rgba(34, 211, 238, 0.1);
          }
          50% {
            box-shadow: 0 0 25px rgba(34, 211, 238, 0.6), inset 0 0 15px rgba(34, 211, 238, 0.2);
          }
        }
        .timer-box {
          animation: timer-pulse 2s ease-in-out infinite;
          font-family: 'Orbitron', monospace;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="shrink-0">
          <img
            src="/ArenaLogo.png"
            width="200"
            height="120"
            className="text-cyan-400 w-20 sm:w-24 md:w-32 h-auto"
            alt="Arena Logo"
          />
        </div>

        {/* Timer */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0 ml-auto">
          <span
            className="text-xs sm:text-sm font-semibold text-slate-300 hidden md:inline"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            Time Remaining:
          </span>
          <div className="timer-box border-2 border-yellow-400 px-2 sm:px-4 lg:px-6 py-2 sm:py-3 bg-slate-900/50 backdrop-blur-sm rounded-lg">
            <div
              className="font-mono font-bold text-yellow-400 text-sm sm:text-base lg:text-lg tracking-wider"
              style={{ fontFamily: "'Orbitron', monospace" }}
            >
              {String(timeLeft.days).padStart(2, "0")}:{String(timeLeft.hours).padStart(2, "0")}:
              {String(timeLeft.minutes).padStart(2, "0")}:{String(timeLeft.seconds).padStart(2, "0")}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}