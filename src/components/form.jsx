"use client";

import { useState, useEffect } from "react";
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

  // LOAD PAGECLIP
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s.pageclip.co/v1/pageclip.js";
    script.async = true;
    document.body.appendChild(script);

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://s.pageclip.co/v1/pageclip.css";
    document.head.appendChild(link);
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
        <style>{`
          @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 20px rgba(34, 197, 94, 0.3); }
            50% { box-shadow: 0 0 40px rgba(34, 197, 94, 0.6); }
          }
          .pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
          .hover-lift { transition: all 0.3s ease; }
          .hover-lift:hover {
            transform: translateY(-4px);
            box-shadow: 0 20px 40px rgba(34, 197, 94, 0.3);
          }
          ::-webkit-scrollbar { display: none; }
          -ms-overflow-style: none;
          scrollbar-width: none;
        `}</style>

        <div className="w-full max-w-2xl">
          <h1
            className="text-3xl sm:text-4xl font-bold text-cyan-400 text-center mb-8 mt-8"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            ARENA REGISTRATIONS
          </h1>

          {/* PAGECLIP FORM */}
          <form
            action="https://send.pageclip.co/IqPmbVg3CcAQITXy7950bvHH8C3mMVjI/Arena"
            method="post"
            className="pageclip-form bg-linear-to-b from-slate-800/80 to-slate-900/80 border-2 border-cyan-500/50 rounded-xl p-6 sm:p-8 backdrop-blur-sm"
          >
            {/* PERSONAL INFO */}
            <div className="mb-8">
              <h2
                className="text-xl sm:text-2xl font-bold text-cyan-400 mb-6 pb-3 border-b border-cyan-500/30"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                Personal Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full bg-slate-700/50 border border-cyan-500/30 rounded-lg px-4 py-3 text-white"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full bg-slate-700/50 border border-cyan-500/30 rounded-lg px-4 py-3 text-white"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-slate-700/50 border border-cyan-500/30 rounded-lg px-4 py-3 text-white"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">Discord Tag *</label>
                  <input
                    type="text"
                    name="discordTag"
                    value={formData.discordTag}
                    onChange={handleInputChange}
                    className="w-full bg-slate-700/50 border border-cyan-500/30 rounded-lg px-4 py-3 text-white"
                    placeholder="username#0000"
                  />
                </div>
              </div>
            </div>

            {/* ACADEMIC INFO */}
            <div className="mb-8">
              <h2
                className="text-xl sm:text-2xl font-bold text-cyan-400 mb-6 pb-3 border-b border-cyan-500/30"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                Academic Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">University *</label>
                  <input
                    type="text"
                    name="university"
                    value={formData.university}
                    onChange={handleInputChange}
                    className="w-full bg-slate-700/50 border border-cyan-500/30 rounded-lg px-4 py-3 text-white"
                    placeholder="Your university"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">Year of Study *</label>
                  <select
                    name="yearOfStudy"
                    value={formData.yearOfStudy}
                    onChange={handleInputChange}
                    className="w-full bg-slate-700/50 border border-cyan-500/30 rounded-lg px-4 py-3 text-white"
                  >
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
                <input
                  type="text"
                  name="studentId"
                  value={formData.studentId}
                  onChange={handleInputChange}
                  className="w-full bg-slate-700/50 border border-cyan-500/30 rounded-lg px-4 py-3 text-white"
                  placeholder="Enter your student ID"
                />
              </div>
            </div>

            {/* TEAM INFO */}
            <div className="mb-8">
              <h2
                className="text-xl sm:text-2xl font-bold text-cyan-400 mb-6 pb-3 border-b border-cyan-500/30"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                Team Information
              </h2>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <label
                  className="flex items-center cursor-pointer flex-1 p-4 border-2 border-cyan-500/30 rounded-lg"
                  style={{
                    backgroundColor: formData.hasTeam ? "transparent" : "rgba(34,211,238,0.1)",
                  }}
                >
                  <input
                    type="radio"
                    name="hasTeam"
                    checked={!formData.hasTeam}
                    onChange={() => setFormData((prev) => ({ ...prev, hasTeam: false }))}
                    className="w-5 h-5"
                  />
                  <span className="ml-3 font-semibold text-slate-300">I have no team</span>
                </label>

                <label
                  className="flex items-center cursor-pointer flex-1 p-4 border-2 border-cyan-500/30 rounded-lg"
                  style={{
                    backgroundColor: formData.hasTeam ? "rgba(34,211,238,0.1)" : "transparent",
                  }}
                >
                  <input
                    type="radio"
                    name="hasTeam"
                    checked={formData.hasTeam}
                    onChange={() => setFormData((prev) => ({ ...prev, hasTeam: true }))}
                    className="w-5 h-5"
                  />
                  <span className="ml-3 font-semibold text-slate-300">I have a Team</span>
                </label>
              </div>

              {formData.hasTeam && (
                <div className="bg-slate-700/30 border border-cyan-500/20 rounded-lg p-4 sm:p-6 space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">Team Name *</label>
                    <input
                      type="text"
                      name="teamName"
                      value={formData.teamName}
                      onChange={handleInputChange}
                      className="w-full bg-slate-700/50 border border-cyan-500/30 rounded-lg px-4 py-3 text-white"
                      placeholder="Enter your team name"
                    />
                  </div>

                  <div>
                    <p className="text-sm text-slate-400 font-semibold mb-4">Teammates</p>
                    <div className="space-y-3">
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
                            className="w-full bg-slate-700/50 border border-cyan-500/30 rounded-lg px-4 py-3 text-white"
                            placeholder={`Teammate ${num} name`}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* TRANSPORT */}
            <div className="mb-8">
              <h2
                className="text-xl sm:text-2xl font-bold text-cyan-400 mb-6 pb-3 border-b border-cyan-500/30"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                Transportation
              </h2>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <label
                  className="flex items-center cursor-pointer flex-1 p-4 border-2 border-cyan-500/30 rounded-lg"
                  style={{
                    backgroundColor: !formData.needsTransportation ? "rgba(34,211,238,0.1)" : "transparent",
                  }}
                >
                  <input
                    type="radio"
                    name="needsTransportation"
                    checked={!formData.needsTransportation}
                    onChange={() => setFormData((prev) => ({ ...prev, needsTransportation: false }))}
                    className="w-5 h-5"
                  />
                  <span className="ml-3 font-semibold text-slate-300">No</span>
                </label>

                <label
                  className="flex items-center cursor-pointer flex-1 p-4 border-2 border-cyan-500/30 rounded-lg"
                  style={{
                    backgroundColor: formData.needsTransportation ? "rgba(34,211,238,0.1)" : "transparent",
                  }}
                >
                  <input
                    type="radio"
                    name="needsTransportation"
                    checked={formData.needsTransportation}
                    onChange={() => setFormData((prev) => ({ ...prev, needsTransportation: true }))}
                    className="w-5 h-5"
                  />
                  <span className="ml-3 font-semibold text-slate-300">Yes</span>
                </label>
              </div>

              {formData.needsTransportation && (
                <div className="bg-slate-700/30 border border-cyan-500/20 rounded-lg p-4 sm:p-6">
                  <label className="block text-sm font-semibold text-slate-300 mb-2">Address *</label>
                  <input
                    type="text"
                    name="transportationAddress"
                    value={formData.transportationAddress}
                    onChange={handleInputChange}
                    className="w-full bg-slate-700/50 border border-cyan-500/30 rounded-lg px-4 py-3 text-white"
                    placeholder="Enter your address"
                  />
                </div>
              )}
            </div>

            {/* EXPECTATIONS */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-slate-300 mb-2">
                What are you expecting from this event? *
              </label>
              <textarea
                name="expectations"
                value={formData.expectations}
                onChange={handleInputChange}
                className="w-full bg-slate-700/50 border border-cyan-500/30 rounded-lg px-4 py-3 text-white min-h-24 resize-none"
                placeholder="Tell us what you're expecting..."
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="pageclip-form__submit w-full hover-lift bg-linear-to-r from-cyan-500 to-cyan-400 text-slate-900 font-bold py-3 sm:py-4 rounded-lg transition text-base sm:text-lg"
            >
              <span>Submit</span>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
