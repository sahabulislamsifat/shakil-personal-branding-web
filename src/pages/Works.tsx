import { works } from "../data/works";
// import projectsBackground from "../assets/image/background/work-section-bg.png";

const Works = () => {
  return (
    <div>
      <section className="py-20 px-4">
        <div
          className="bg-cover bg-center rounded-[40px] lg:rounded-[80px] p-12 md:p-20 flex flex-col"
          style={{
            backgroundImage: `url(${`https://img.freepik.com/free-photo/artistic-blurry-colorful-wallpaper-background_58702-8591.jpg?semt=ais_hybrid&w=740&q=80`})`,
          }}
        >
          {/* Header */}
          <div className="mb-16 md:mb-24 text-center">
            <h1 className="text-white text-3xl md:text-4xl font-bold uppercase tracking-wider mb-4">
              our works
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              We craft impactful designs that elevate brands, engage audiences,
              and drive growth.
            </p>
          </div>

          {/* Works Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 max-w-6xl mx-auto">
            {works.map((work, index) => (
              <div
                key={work.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:mt-0" : "md:mt-20"
                }`}
              >
                {/* Work Image */}
                <div className="w-full aspect-square bg-white rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

                {/* Work Details */}
                <div className="mt-6">
                  <h3 className="text-white font-bold text-2xl md:text-3xl">
                    {work.title}
                  </h3>
                  {work.subtitle && (
                    <p className="text-gray-300 text-xl mt-1">
                      {work.subtitle}
                    </p>
                  )}
                  <p className="text-gray-300 text-base md:text-lg mt-3 max-w-md">
                    {work.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="text-center mt-24 md:mt-32 mb-8 md:mb-12">
            <p className="text-gray-200 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              These are not just projects, they are stories of our clients, our
              work, and the impact we made.{" "}
              <a
                href="#"
                className="text-white font-semibold underline hover:text-blue-300 transition-colors duration-300"
              >
                See More ↗
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Works;
