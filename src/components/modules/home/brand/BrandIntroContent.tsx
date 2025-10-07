import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const BrandIntroContent = () => {
  return (
    <section className="relative h-[90vh] sm:h-[100vh] w-full overflow-hidden flex flex-col justify-between px-4 sm:px-8 md:px-16 py-10 text-white">
      {/* ===== Background Image ===== */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80"
          alt="background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      {/* ===== Top Section ===== */}
      <div className="relative flex flex-col sm:flex-row justify-between items-start sm:items-center z-10 gap-6 sm:gap-0">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-gray-300 text-sm sm:text-base md:text-lg"
        >
          Designing Iconic Brands Daily.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-gray-300 text-sm sm:text-base md:text-lg max-w-full sm:max-w-xs text-left sm:text-right leading-relaxed"
        >
          <p>
            Your brand has a story. We make sure it's seen, felt and remembered.
            We design logos, build brands and create moments that turn attention
            into action.
          </p>
          <button className="mt-3 text-white font-semibold hover:underline">
            Learn More
          </button>
        </motion.div>
      </div>

      {/* ===== Center Big Quote ===== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative z-10 text-center sm:text-right mt-8 sm:mt-10"
      >
        <h1 className="text-[1.8rem] sm:text-[2.5rem] md:text-[3.5rem] font-medium leading-tight">
          It’s not just words.
          <br className="hidden sm:block" />
          It’s the results
          <br className="hidden sm:block" />
          that speak.
        </h1>
      </motion.div>

      {/* ===== Bottom Section ===== */}
      <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-end mt-10 gap-8 sm:gap-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-gray-300 text-sm sm:text-base md:text-lg"
        >
          <p className="text-white font-semibold mb-2">Modernists:</p>
          <ul className="space-y-1">
            <li>[51+] E-commerce Branding</li>
            <li>[80+] Brand Identity</li>
            <li>[9+] Web Design & Development</li>
            <li>[200+] Projects Completed</li>
          </ul>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex items-center gap-2 bg-white text-black px-4 sm:px-6 py-2 sm:py-3 rounded-[3px] font-medium hover:bg-gray-200 transition cursor-pointer self-end sm:self-auto"
        >
          Contact us <ArrowRight size={18} />
        </motion.button>
      </div>
    </section>
  );
};

export default BrandIntroContent;
