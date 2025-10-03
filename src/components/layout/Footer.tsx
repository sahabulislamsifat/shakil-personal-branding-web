import { useEffect, useState } from "react";
import { motion } from "framer-motion";
// import workSectionBackground from "../../assets/image/background/work-section-bg.png";
import Awards from "../../features/hero/Awards";

const Footer = () => {
  const [logoSize, setLogoSize] = useState("text-4xl");
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll effect for logo animation (same as Navbar)
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

  return (
    <footer
      className="text-white px-6 md:px-16 lg:px-24 py-12 relative overflow-hidden rounded-t-3xl bg-cover bg-center"
      // style={{ backgroundImage: `url(${workSectionBackground})` }}
      style={{
        backgroundImage: `url(${`https://img.freepik.com/free-photo/artistic-blurry-colorful-wallpaper-background_58702-8591.jpg?semt=ais_hybrid&w=740&q=80`})`,
      }}
    >
      {/* Logo (taken from Navbar) */}
      <motion.div
        className={`transition-all duration-300 ${logoSize} italic mb-10`}
        animate={{ scale: showNavbar ? 1.1 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <span className="text-blue-500 font-light">De</span>
        <span className="text-blue-600 font-medium">sh</span>
        <span className="text-blue-600 font-extrabold">akil.</span>
      </motion.div>

      {/* Top Section */}
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center mb-16 mt-20">
          {/* Contact */}
          <div>
            <h3 className="text-2xl mb-4">Contact</h3>
            <p className="text-sm">info@creativebranddesign.co.uk</p>
            <p className="text-sm">+44 207 870 5794</p>
            <p className="text-sm">Dhaka-1214, Bangladesh</p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>Logo design</li>
              <li>Branding</li>
              <li>Packaging</li>
              <li>Website design</li>
              <li>Print Design</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>FAQs</li>
              <li>Contact</li>
              <li>Our work</li>
              <li>Services</li>
              <li>About</li>
              <li>Process</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Awards Section */}
      <div className="bg-white mx-24 rounded-sm py-2 px-6 my-24 shadow-md">
        <Awards />
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center text-xs space-y-4 md:space-y-0 pt-6 text-gray-300">
        <p className="text-center md:text-left">
          CreativeWeb is a trading name of Creative Brand Design Ltd. <br />©{" "}
          {new Date().getFullYear()} Creative Brand Design Ltd | Registered in
          England No.08757935
        </p>

        {/* Social Icons (unchanged - your icons8 links) */}
        <div className="flex space-x-4">
          <a href="#">
            <img
              src="https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=000000"
              alt="facebook"
              className="h-6 w-6 hover:opacity-80 transition"
            />
          </a>
          <a href="#">
            <img
              src="https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000"
              alt="instagram"
              className="h-6 w-6 hover:opacity-80 transition"
            />
          </a>
          <a href="#">
            <img
              src="https://img.icons8.com/?size=100&id=9a46bTk3awwI&format=png&color=000000"
              alt="youtube"
              className="h-6 w-6 hover:opacity-80 transition"
            />
          </a>
          <a href="#">
            <img
              src="https://img.icons8.com/?size=100&id=63204&format=png&color=000000"
              alt="skype"
              className="h-6 w-6 hover:opacity-80 transition"
            />
          </a>
          <a href="#">
            <img
              src="https://img.icons8.com/ios-filled/50/ffffff/behance.png"
              alt="behance"
              className="h-6 w-6 hover:opacity-80 transition"
            />
          </a>
        </div>
      </div>

      {/* Policies */}
      <div className="text-sm text-gray-300 text-center space-x-6 mb-2">
        <a href="#" className="hover:underline">
          Privacy Policy
        </a>
        <a href="#" className="hover:underline">
          Terms & Conditions
        </a>
        <a href="#" className="hover:underline">
          Cookie Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
