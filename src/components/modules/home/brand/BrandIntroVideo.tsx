/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";
import brandIntroVideo from "../../../../assets/videos/brand-intro-video.mp4";

const BrandIntroVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleVideoClick = () => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    if (!isFullScreen) {
      if (videoEl.requestFullscreen) videoEl.requestFullscreen();
      else if ((videoEl as any).webkitRequestFullscreen)
        (videoEl as any).webkitRequestFullscreen();

      videoEl.muted = false;
      videoEl.play();
      setIsFullScreen(true);
    } else {
      if (document.exitFullscreen) document.exitFullscreen();
      else if ((document as any).webkitExitFullscreen)
        (document as any).webkitExitFullscreen();

      setIsFullScreen(false);
    }
  };

  useEffect(() => {
    const videoEl = videoRef.current;
    const handleFullScreenChange = () => {
      if (!document.fullscreenElement && videoEl) {
        videoEl.muted = true;
        videoEl.play();
      }
    };
    document.addEventListener("fullscreenchange", handleFullScreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
  }, []);

  return (
    <section className="relative w-full flex flex-col items-center justify-center overflow-hidden bg-black text-white">
      {/* ===== Video Background ===== */}
      <div
        className="relative w-full h-[60vh] sm:h-[70vh] md:h-screen cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleVideoClick}
      >
        <video
          ref={videoRef}
          src={brandIntroVideo}
          className="absolute inset-0 w-full h-full object-cover"
          muted
          autoPlay
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/30" />

        {/* Hover Elements (Play Icon + Text) */}
        <AnimatePresence>
          {isHovered && !isFullScreen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-10 right-6 sm:right-8 flex flex-col items-end z-20 space-y-2"
            >
              {/* Play Icon */}
              <motion.button
                onClick={handleVideoClick}
                whileHover={{ scale: 1.1 }}
                className="bg-white/10 backdrop-blur-md p-3 sm:p-4 rounded-full border border-white/30 hover:bg-white/20 transition"
              >
                <Play className="text-white w-5 h-5 sm:w-6 sm:h-6" />
              </motion.button>

              {/* Hover Text */}
              <p className="text-xs sm:text-sm text-white/80 whitespace-nowrap">
                Click to view fullscreen with sound
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ===== Text Section Below Video ===== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full text-center px-4 sm:px-6 md:px-12 py-10 md:py-16 bg-white"
      >
        <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed max-w-3xl md:max-w-4xl mx-auto">
          Design on the web isn't static anymore. Today’s brands need energy,
          personality, and meaning. We bring together strategy, design, and
          storytelling to build digital experiences that grab attention, move
          fast, and make people feel.
        </p>
      </motion.div>
    </section>
  );
};

export default BrandIntroVideo;
