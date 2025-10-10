/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "./../data/services";

// 🔹 Image Layout Component (4 unique responsive designs)
const ImageLayout = ({ service }: any) => {
  const { id, images } = service;

  if (id === 1) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        <img
          src={images[0]}
          alt=""
          className="col-span-2 md:col-span-2 w-full h-auto md:h-64 object-cover rounded-lg shadow-md"
        />
        <img
          src={images[1]}
          alt=""
          className="w-full h-auto md:h-full object-cover rounded-lg shadow-md row-span-2"
        />
        <img
          src={images[2]}
          alt=""
          className="w-full h-auto md:h-64 object-cover rounded-lg shadow-md md:col-span-2"
        />
      </div>
    );
  }

  if (id === 2) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        <img
          src={images[0]}
          alt=""
          className="w-full h-auto md:h-80 object-cover rounded-lg shadow-md md:col-span-2"
        />
        <img
          src={images[1]}
          alt=""
          className="w-full h-auto md:h-48 object-cover rounded-lg shadow-md"
        />
        <img
          src={images[2]}
          alt=""
          className="w-full h-auto md:h-48 object-cover rounded-lg shadow-md"
        />
      </div>
    );
  }

  // Layout 3 – Horizontal Split
  if (id === 3) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        <img
          src={images[0]}
          alt=""
          className="w-full h-auto md:h-full object-cover rounded-lg shadow-md"
        />
        <div className="flex flex-col gap-3 md:gap-4">
          <img
            src={images[1]}
            alt=""
            className="w-full h-auto md:h-48 object-cover rounded-lg shadow-md"
          />
          <img
            src={images[2]}
            alt=""
            className="w-full h-auto md:h-48 object-cover rounded-lg shadow-md"
          />
          <img
            src={images[3]}
            alt=""
            className="w-full h-auto md:h-48 object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    );
  }

  // Layout 4 – Gallery Collage
  if (id === 4) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        <img
          src={images[0]}
          alt=""
          className="w-full h-auto md:h-48 object-cover rounded-lg shadow-md"
        />
        <img
          src={images[1]}
          alt=""
          className="w-full h-auto md:h-48 object-cover rounded-lg shadow-md"
        />
        <img
          src={images[2]}
          alt=""
          className="w-full h-auto md:h-80 object-cover rounded-lg shadow-md md:col-span-2"
        />
      </div>
    );
  }

  // Default fallback layout
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
      {images.map((img: string, idx: number) => (
        <img
          key={idx}
          src={img}
          alt={`service-${id}-${idx}`}
          className="w-full h-auto object-cover rounded-lg shadow-md"
        />
      ))}
    </div>
  );
};

// 🔹 Accordion Component
const Accordion = ({ items }: { items: { title: string; desc: string }[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleOpen = (index: number) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <ul className="space-y-4 md:space-y-6">
      {items.map((item, idx) => (
        <li key={idx} className="pb-3 md:pb-4 border-b border-gray-300">
          <p
            className="font-semibold text-gray-800 cursor-pointer hover:text-black transition text-base md:text-lg"
            onClick={() => toggleOpen(idx)}
          >
            {item.title}
          </p>
          <AnimatePresence>
            {openIndex === idx && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-2 text-gray-600 text-sm md:text-base overflow-hidden"
              >
                {item.desc}
              </motion.p>
            )}
          </AnimatePresence>
        </li>
      ))}
    </ul>
  );
};

// 🔹 Main Services Component
const Services = () => {
  return (
    <section className="py-8 md:py-16 px-4 sm:px-6 w-11/12 md:w-10/12 mx-auto">
      {services.map((service) => (
        <div
          key={service.id}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start mb-12 h-auto md:h-[880px]"
        >
          {/* Sidebar */}
          <div className="md:col-span-3 flex flex-col gap-4 mb-6 md:mb-0">
            <h2 className="text-black font-semibold text-2xl md:text-4xl">
              <span
                onClick={() =>
                  (window.location.href = `/services/${service.id}`)
                }
                className="cursor-pointer text-3xl md:text-5xl font-sans text-black hover:text-gray-700 transition"
              >
                {service.title}
              </span>
            </h2>
          </div>

          {/* Main Content */}
          <div className="md:col-span-9 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="md:col-span-2 order-2 md:order-1">
                <ImageLayout service={service} />
              </div>
              <div className="md:col-span-1 order-1 md:order-2 text-lg md:text-2xl font-sans h-full flex flex-col justify-between">
                <Accordion items={service.features} />
              </div>
            </div>

            <div>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-4">
                {service.description}
              </p>
              <button
                onClick={() =>
                  (window.location.href = `/services/${service.id}`)
                }
                className="mt-2 px-5 md:px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition text-sm md:text-base"
              >
                {service.title}
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Services;
