"use client"; // we need to use useState
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const email = "Liam.vandenBerg@outlook.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // hides after 2 seconds
    } catch (err) {
      console.error("Failed to copy email address.", err);
    }
  };

  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-20">
      <h2 className="text-sm font-medium tracking-widest text-emerald-400 mb-6">
        LET&apos;S CONNECT
      </h2>

      <p className="text-gray-300 mb-8 max-w-xl">
        I&apos;m currently open to new opportunities and collaborations.
        Feel free to reach out if you want to work together or just say hi!
      </p>

      {/* This is all just to make the copy button look nice x.x*/}
      <div className="flex flex-wrap gap-4">
        {/* Fancy Copy Button */}
        <button
          onClick={handleCopy}
          className="relative px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-medium transition min-w-37.5"
        >
          {/* Default state - Email Me + icon */}
          <span
            className={`flex items-center justify-center gap-2 transition-all duration-300 ${
              copied ? "opacity-0 scale-90" : "opacity-100 scale-100"
            }`}
          >
            {/* Email icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            Email Me
          </span>

          {/* Copied state - Checkmark */}
          <span
            className={`absolute inset-0 flex items-center justify-center gap-2 transition-all duration-300 ${
              copied ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-emerald-900"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            Copied!
          </span>
        </button>

        <a
          href="https://github.com/liamvandenberg"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-lg border border-gray-700 hover:border-emerald-500 text-gray-300 hover:text-white transition"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/liam-van-den-berg-39a8a9377"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-lg border border-gray-700 hover:border-emerald-500 text-gray-300 hover:text-white transition"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}