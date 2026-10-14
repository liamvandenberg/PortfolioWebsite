export default function Contact() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-20">
      <h2 className="text-sm font-medium tracking-widest text-emerald-400 mb-6">
        LET&apos;S CONNECT
      </h2>

      <p className="text-gray-300 mb-8 max-w-xl">
        I&apos;m currently open to new opportunities and collaborations.
        Feel free to reach out if you want to work together or just say hi!
      </p>

      <div className="flex flex-wrap gap-4">
        <a
          href="mailto:Liam.vandenBerg@outlook.com"
          className="px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-medium transition"
        >
          Email Me
        </a>

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