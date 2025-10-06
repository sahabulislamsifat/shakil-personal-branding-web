import { awards } from "../../../../data/awards";

const Awards = () => {
  return (
    <section className="sm:px-6 lg:px-60">
      <div className="text-center mb-6 sm:mb-10">
        <p className="text-sm uppercase tracking-widest text-gray-500 font-medium">
          Recognized by industry leaders
        </p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-5 sm:gap-8 md:gap-1 justify-items-center items-center">
        {awards.map((award, idx) => (
          <div key={idx} className="group relative">
            <img
              sizes="60"
              src={award.img}
              alt={award.alt}
              className="h-10 px-2 py-1 bg-transparent md:h-16 object-contain opacity-80 group-hover:opacity-100 hover:bg-blend-soft-light transition-opacity duration-300"
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
