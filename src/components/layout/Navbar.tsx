import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CgArrowRight, CgClose, CgMenuRight } from "react-icons/cg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [logoSize, setLogoSize] = useState("text-2xl");
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  // Scroll Hide/Show Navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) setShowNavbar(false);
      else setShowNavbar(true);

      setLastScrollY(window.scrollY);
      setLogoSize(window.scrollY < 50 ? "text-3xl" : "text-2xl");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      setShowNavbar(false);
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  const menuItems = [
    "Our Work",
    "Our Agency",
    "Services",
    "Insights",
    "SEO Checker",
    "Cost Guide",
    "Contact",
  ];

  return (
    <>
      {/* Navbar */}
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: showNavbar ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 w-full bg-white z-50 "
      >
        <div className="max-w-11/12 mx-auto flex justify-between items-center py-4 px-6 transition-all duration-300">
          {/* Logo */}
          <motion.div
            className={`transition-all duration-300 ${logoSize} italic`}
            animate={{ scale: showNavbar ? 1.1 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-blue-500 font-light">De</span>
            <span className="text-blue-600 font-medium">st</span>
            <span className="text-blue-600 font-extrabold">udio.</span>
          </motion.div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Desktop Start A Project */}
            <motion.button
              className="hidden md:flex items-center justify-center border border-gray-500 mr-7 rounded px-5 py-2 text-sm cursor-pointer font-medium transition-all duration-300 overflow-hidden relative"
              onHoverStart={() => setIsButtonHovered(true)}
              onHoverEnd={() => setIsButtonHovered(false)}
              animate={{
                backgroundColor: isButtonHovered ? "#000" : "#fff",
                color: isButtonHovered ? "#fff" : "#000",
                paddingRight: isButtonHovered ? "2.5rem" : "1.25rem",
                paddingLeft: isButtonHovered ? "2.5rem" : "1.25rem",
              }}
            >
              <span>Start A Project</span>
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

            {/* Menu Icon */}
            <button
              className="relative flex justify-center cursor-pointer items-center w-10 h-10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {/* Closed state */}
              <motion.div
                className="absolute text-2xl"
                animate={{
                  opacity: isMenuOpen ? 0 : 1,
                  scale: isMenuOpen ? 0.8 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                <CgMenuRight size={36} />
              </motion.div>

              {/* Open state */}
              <motion.div
                className="absolute flex flex-col justify-center items-center"
                animate={{ opacity: isMenuOpen ? 1 : 0 }}
              >
                <motion.span
                  animate={{
                    rotate: isMenuOpen ? 45 : 0,
                    y: isMenuOpen ? 6 : 0,
                  }}
                  className="w-6 h-0.5 bg-gray-900 rounded-md mb-1"
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  animate={{ opacity: isMenuOpen ? 0 : 1 }}
                  className="w-6 h-0.5 bg-gray-900 rounded-md mb-1"
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  animate={{
                    rotate: isMenuOpen ? -45 : 0,
                    y: isMenuOpen ? -6 : 0,
                  }}
                  className="w-6 h-0.5 bg-gray-900 rounded-md"
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Unified Modal */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                w-[90%] max-w-4xl h-[90%] bg-gradient-to-br from-blue-100 via-white to-blue-50
                z-50 flex flex-col p-8 shadow-2xl rounded-xl overflow-y-auto"
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-10">
                <div className="text-3xl font-bold text-gray-900">Menu</div>
                <button
                  className="text-3xl p-2 cursor-pointer text-gray-500 hover:text-gray-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <CgClose size={28} />
                </button>
              </div>

              {/* Content */}
              <div className="grid md:grid-cols-2 gap-12 flex-grow">
                {/* Menu Items */}
                <nav className="flex flex-col gap-6">
                  {menuItems.map((item, index) => (
                    <a
                      key={index}
                      href="#"
                      className="text-2xl font-medium text-gray-800 hover:text-blue-600 py-3 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </a>
                  ))}
                </nav>

                {/* Contact Info */}
                <div className="space-y-10">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                      Phone
                    </h3>
                    <p className="text-xl text-gray-800">(+880) 1632165523</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                      E-Mail
                    </h3>
                    <p className="text-xl text-gray-800">
                      info@deshakil.com.bd
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                      Follow
                    </h3>
                    <div className="flex flex-wrap gap-6">
                      {["Facebook", "Twitter", "Instagram", "LinkedIn"].map(
                        (social, index) => (
                          <a
                            key={index}
                            href="#"
                            className="text-gray-600 hover:text-blue-600 text-base"
                          >
                            {social}
                          </a>
                        )
                      )}
                    </div>
                  </div>

                  {/* Start A Project Button (Modal version) */}
                  <motion.button
                    className="group w-full flex items-center justify-center border border-gray-500 rounded px-6 py-4 text-lg font-medium transition-all duration-300 overflow-hidden relative cursor-pointer"
                    onHoverStart={() => setIsButtonHovered(true)}
                    onHoverEnd={() => setIsButtonHovered(false)}
                    animate={{
                      backgroundColor: isButtonHovered ? "#000" : "#fff",
                      color: isButtonHovered ? "#fff" : "#000",
                    }}
                  >
                    <span>Start A Project</span>
                    <motion.div
                      animate={{
                        opacity: isButtonHovered ? 1 : 0,
                        x: isButtonHovered ? 10 : -5,
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute right-6"
                    >
                      <CgArrowRight />
                    </motion.div>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
