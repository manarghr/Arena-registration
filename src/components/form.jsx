"use client";

import { useState, useEffect, useRef } from "react";
import Navbar from "./navbar";

export default function Form() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    discordTag: "",
    university: "",
    yearOfStudy: "",
    studentId: "",
    hasTeam: false,
    teamName: "",
    teammate1: "",
    teammate2: "",
    teammate3: "",
    expectations: "",
    needsTransportation: false,
    transportationAddress: "",
  });

  
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef(null);

useEffect(() => {
  // Create script
  const script = document.createElement("script");
  script.src = "https://s.pageclip.co/v1/pageclip.js";
  script.async = true;

  // When script loads
  script.onload = () => {
    if (window.Pageclip && formRef.current) {
      window.Pageclip.form(formRef.current, {
        onSubmit: () => setTimeout(() => setSubmitted(true), 300),
      });
    }
  };

  document.body.appendChild(script);

  // Inject CSS
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "https://s.pageclip.co/v1/pageclip.css";
  document.head.appendChild(link);

  // Handle Pageclip submit event
  function handlePageclipSubmit(e) {
    if (formRef.current && e.target === formRef.current) {
      setSubmitted(true);
    }
  }
  window.addEventListener("pageclip:submit", handlePageclipSubmit);

  return () => {
    window.removeEventListener("pageclip:submit", handlePageclipSubmit);
    document.body.removeChild(script);
    document.head.removeChild(link);
  };
}, []);


  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <>
      <Navbar />
      <div className="animated-bg min-h-screen flex items-center justify-center p-4 pt-32">

        {/* GLOBAL STYLES + ANIMATIONS */}
        <style>{`
          @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 20px rgba(34, 197, 94, 0.3); }
            50% { box-shadow: 0 0 40px rgba(34, 197, 94, 0.6); }
          }
          .pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }

          @keyframes fadeScale {
            0% { opacity: 0; transform: scale(0.8); }
            100% { opacity: 1; transform: scale(1); }
          }
          .fade-scale { animation: fadeScale 0.7s ease-out forwards; }

          @keyframes float {
            0% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0); }
          }
          .float { animation: float 3s ease-in-out infinite; }

          /* Confetti animation */
          @keyframes confettiFall {
            0% { transform: translateY(-20vh) rotate(0deg); opacity: 1; }
            100% { transform: translateY(120vh) rotate(360deg); opacity: 0; }
          }
          .confetti {
            position: fixed;
            width: 10px;
            height: 10px;
            background: #00eaff;
            top: -20px;
            left: 50%;
            animation: confettiFall 2.4s linear forwards;
          }

          /* Hide Pageclip UI */
          .pageclip-form__success,
          .pageclip-form__error,
          .pageclip-overlay {
            display: none !important;
          }
        `}</style>

        {/* SUCCESS SCREEN */}
        {submitted ? (
          <div className="flex flex-col items-center justify-center fade-scale py-20 text-center">

            {/* Confetti Burst */}
            {Array.from({ length: 18 }).map((_, i) => (
              <div
                key={i}
                className="confetti"
                style={{
                  left: `${Math.random() * 100}%`,
                  background: [`#00eaff`, `#06d6a0`, `#11ffee`, `#00f3ff`][i % 4],
                  animationDelay: `${Math.random() * 0.5}s`,
                }}
              />
            ))}

            {/* Checkmark Icon */}
            <svg width="110" height="110" viewBox="0 0 24 24" className="float mb-8">
              <circle cx="12" cy="12" r="10" stroke="#00eaff" strokeWidth="3" opacity="0.4" />
              <path
                d="M7 12.8l3 3 7-7"
                stroke="#00eaff"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {/* TEXT */}
            <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-4" style={{ fontFamily: "'Orbitron', sans-serif" }}>
              Registration Complete!
            </h2>

            <p className="text-lg text-slate-200 opacity-80 leading-relaxed">
              You’re officially registered   
              <br />
              Get ready for an unforgettable arena experience!
            </p>

            <div className="mt-10 text-slate-400 text-sm">
              You may close this page now.
            </div>
          </div>
        ) : (
          /* ================== FORM START ================== */
          <div className="w-full max-w-2xl">
            <h1
              className="text-3xl sm:text-4xl font-bold text-cyan-400 text-center mb-8 mt-8"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              ARENA REGISTRATIONS
            </h1>

            <form
              ref={formRef}
              action="https://send.pageclip.co/IqPmbVg3CcAQITXy7950bvHH8C3mMVjI/Arena"
              method="post"
              className="pageclip-form bg-linear-to-b from-slate-800/80 to-slate-900/80 border-2 border-cyan-500/50 rounded-xl p-6 sm:p-8 backdrop-blur-sm"
            >
              {/* -------- PERSONAL INFO -------- */}
              <div className="mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-cyan-400 mb-6 pb-3 border-b border-cyan-500/30" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                  Personal Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">Full Name *</label>
                    <input type="text" name="fullName" required value={formData.fullName} onChange={handleInputChange}
                      className="w-full bg-slate-700/50 border border-cyan-500/30 rounded-lg px-4 py-3 text-white"
                      placeholder="Enter your full name" />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">Phone Number *</label>
                    <input type="tel" name="phoneNumber" required value={formData.phoneNumber} onChange={handleInputChange}
                      className="w-full bg-slate-700/50 border border-cyan-500/30 rounded-lg px-4 py-3 text-white"
                      placeholder="Enter your phone number" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">Email *</label>
                    <input type="email" name="email" required value={formData.email} onChange={handleInputChange}
                      className="w-full bg-slate-700/50 border border-cyan-500/30 rounded-lg px-4 py-3 text-white"
                      placeholder="Enter your email" />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">Discord Tag *</label>
                    <input type="text" name="discordTag" required value={formData.discordTag} onChange={handleInputChange}
                      className="w-full bg-slate-700/50 border border-cyan-500/30 rounded-lg px-4 py-3 text-white"
                      placeholder="username#0000" />
                  </div>
                </div>
              </div>

              {/* -------- ACADEMIC INFO -------- */}
              <div className="mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-cyan-400 mb-6 pb-3 border-b border-cyan-500/30" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                  Academic Information
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">University *</label>
                    <input type="text" name="university" required value={formData.university} onChange={handleInputChange}
                      placeholder="Your university"
                      className="w-full bg-slate-700/50 border border-cyan-500/30 rounded-lg px-4 py-3 text-white" />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">Year of Study *</label>
                    <select name="yearOfStudy" required value={formData.yearOfStudy} onChange={handleInputChange}
                      className="w-full bg-slate-700/50 border border-cyan-500/30 rounded-lg px-4 py-3 text-white">
                      <option value="">Select your year</option>
                      <option value="L1">L1</option>
                      <option value="L2">L2</option>
                      <option value="L3">L3</option>
                      <option value="M1">M1</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">Student ID *</label>
                  <input type="text" name="studentId" required value={formData.studentId} onChange={handleInputChange}
                    placeholder="Enter your student ID"
                    className="w-full bg-slate-700/50 border border-cyan-500/30 rounded-lg px-4 py-3 text-white" />
                </div>
              </div>

              {/* -------- TEAM INFO -------- */}
              <div className="mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-cyan-400 mb-6 pb-3 border-b border-cyan-500/30" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                  Team Information
                </h2>

                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <label className="flex items-center cursor-pointer flex-1 p-4 border-2 border-cyan-500/30 rounded-lg"
                    style={{ backgroundColor: formData.hasTeam ? "transparent" : "rgba(34,211,238,0.1)" }}>
                    <input type="radio" name="hasTeam" checked={!formData.hasTeam}
                      onChange={() => setFormData((prev) => ({ ...prev, hasTeam: false }))} className="w-5 h-5" />
                    <span className="ml-3 font-semibold text-slate-300">I have no team</span>
                  </label>

                  <label className="flex items-center cursor-pointer flex-1 p-4 border-2 border-cyan-500/30 rounded-lg"
                    style={{ backgroundColor: formData.hasTeam ? "rgba(34,211,238,0.1)" : "transparent" }}>
                    <input type="radio" name="hasTeam" checked={formData.hasTeam}
                      onChange={() => setFormData((prev) => ({ ...prev, hasTeam: true }))} className="w-5 h-5" />
                    <span className="ml-3 font-semibold text-slate-300">I have a Team</span>
                  </label>
                </div>

                <input type="hidden" name="hasTeam" value={formData.hasTeam.toString()} />

                {formData.hasTeam && (
                  <div className="bg-slate-700/30 border border-cyan-500/20 rounded-lg p-4 sm:p-6 space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-300 mb-2">Team Name *</label>
                      <input type="text" name="teamName" required value={formData.teamName} onChange={handleInputChange}
                        placeholder="Enter your team name"
                        className="w-full bg-slate-700/50 border border-cyan-500/30 rounded-lg px-4 py-3 text-white" />
                    </div>

                    <div>
                      <p className="text-sm text-slate-400 font-semibold mb-4">Teammates</p>

                      {[1, 2, 3].map((num) => (
                        <div key={num}>
                          <label className="block text-sm font-semibold text-slate-300 mb-2">
                            Teammate {num}
                          </label>
                          <input
                            type="text"
                            name={`teammate${num}`}
                            value={formData[`teammate${num}`]}
                            onChange={handleInputChange}
                            placeholder={`Teammate ${num} name`}
                            className="w-full bg-slate-700/50 border border-cyan-500/30 rounded-lg px-4 py-3 text-white"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* -------- TRANSPORTATION -------- */}
              <div className="mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-cyan-400 mb-6 pb-3 border-b border-cyan-500/30" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                  Transportation
                </h2>

                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <label className="flex items-center cursor-pointer flex-1 p-4 border-2 border-cyan-500/30 rounded-lg"
                    style={{ backgroundColor: !formData.needsTransportation ? "rgba(34,211,238,0.1)" : "transparent" }}>
                    <input type="radio" name="needsTransportation" checked={!formData.needsTransportation}
                      onChange={() => setFormData((prev) => ({ ...prev, needsTransportation: false }))} className="w-5 h-5" />
                    <span className="ml-3 font-semibold text-slate-300">No</span>
                  </label>

                  <label className="flex items-center cursor-pointer flex-1 p-4 border-2 border-cyan-500/30 rounded-lg"
                    style={{ backgroundColor: formData.needsTransportation ? "rgba(34,211,238,0.1)" : "transparent" }}>
                    <input type="radio" name="needsTransportation" checked={formData.needsTransportation}
                      onChange={() => setFormData((prev) => ({ ...prev, needsTransportation: true }))} className="w-5 h-5" />
                    <span className="ml-3 font-semibold text-slate-300">Yes</span>
                  </label>
                </div>

                <input type="hidden" name="needsTransportation" value={formData.needsTransportation.toString()} />

                {formData.needsTransportation && (
                  <div className="bg-slate-700/30 border border-cyan-500/20 rounded-lg p-4 sm:p-6">
                    <label className="block text-sm font-semibold text-slate-300 mb-2">Address *</label>
                    <input type="text" name="transportationAddress" required value={formData.transportationAddress}
                      onChange={handleInputChange} placeholder="Enter your address"
                      className="w-full bg-slate-700/50 border border-cyan-500/30 rounded-lg px-4 py-3 text-white" />
                  </div>
                )}
              </div>

              {/* -------- EXPECTATIONS -------- */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-slate-300 mb-2">
                  What are you expecting from this event? *
                </label>
                <textarea name="expectations" required value={formData.expectations} onChange={handleInputChange}
                  placeholder="Tell us what you're expecting..."
                  className="w-full bg-slate-700/50 border border-cyan-500/30 rounded-lg px-4 py-3 text-white min-h-24 resize-none" />
              </div>

              {/* -------- SUBMIT -------- */}
              <button
                type="submit"
                className="pageclip-form__submit w-full hover-lift bg-linear-to-r from-cyan-500 to-cyan-400 text-slate-900 font-bold py-3 sm:py-4 rounded-lg transition text-base sm:text-lg"
              >
                <span>Submit</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
}
