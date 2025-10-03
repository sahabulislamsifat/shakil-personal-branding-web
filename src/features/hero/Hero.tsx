const Hero = () => {
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  return (
    <section className="relative flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-28 sm:pt-32 pb-16 sm:pb-20 min-h-screen overflow-hidden">
      {/* Background big text */}
      <div className="absolute mb-[450px] lg:mb-[570px] inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="text-[18vw] sm:text-[15vw] font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-50 to-gray-100 select-none leading-none tracking-tighter opacity-80">
          be creative.
        </h1>
      </div>

      {/* Foreground content */}
      <div className="relative z-10 max-w-3xl mx-auto space-y-6 sm:space-y-8 mt-40 sm:mt-50 px-2">
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-6xl text-gray-900 tracking-tight leading-tight">
            Your business deserves <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 font-semibold">
              great design
            </span>
          </h2>

          <p className="mt-4 sm:mt-6 text-gray-800 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            <span>Logos, websites, packaging design</span> and more. Our trusted
            designer community has helped thousands of businesses launch, grow,
            expand and rebrand with custom, professional design.
          </p>
        </div>

        {/* Animated button with arrow */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mt-8 sm:mt-10">
          <motion.button
            className="flex items-center justify-center border border-gray-500 rounded px-4 sm:px-5 py-2 text-sm sm:text-base cursor-pointer font-medium transition-all duration-300 overflow-hidden relative"
            onHoverStart={() => setIsButtonHovered(true)}
            onHoverEnd={() => setIsButtonHovered(false)}
            animate={{
              backgroundColor: isButtonHovered ? "#000" : "#fff",
              color: isButtonHovered ? "#fff" : "#000",
              paddingRight: isButtonHovered ? "2.5rem" : "1.25rem",
              paddingLeft: isButtonHovered ? "2.5rem" : "1.25rem",
            }}
          >
            <span>Our Project</span>
            <motion.div
              animate={{
                opacity: isButtonHovered ? 1 : 0,
                x: isButtonHovered ? 10 : -5,
              }}
              transition={{ duration: 0.3 }}
              className="absolute right-3"
            >
              <CgArrowRight />
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Awards section */}
      <div className="relative z-10 mt-16 sm:mt-24 w-full">
        {/* Decorative element - bottom right corner */}
        <div className="absolute -bottom-10 sm:bottom-2 right-4 sm:right-6 animate-bounce">
          <svg
            className="w-6 h-6 sm:w-7 sm:h-7 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
        <Awards />
      </div>
    </section>
  );
};

export default Hero;
