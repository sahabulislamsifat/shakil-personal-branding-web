import { awards } from "../../data/awards";

const Awards = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-0">
      <div className="text-center mb-6 sm:mb-10">
        <p className="text-sm uppercase tracking-widest text-gray-500 font-medium">
          Recognized by industry leaders
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8 md:gap-10 justify-items-center items-center">
        {awards.map((award, idx) => (
          <div key={idx} className="group relative">
            <img
              src={award.img}
              alt={award.alt}
              className="h-10 sm:h-12 md:h-14 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
            />

            {/* Hover card */}
            <div className="absolute bottom-full mb-2 transform -translate-x-1 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out z-10 w-40 sm:w-48">
              <div className="bg-white/80 backdrop-blur-md rounded-lg p-3 sm:p-4 shadow-lg border border-white/20 text-center">
                <h3 className="font-semibold text-gray-800 text-sm sm:text-base">
                  {award.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  {award.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Awards;
