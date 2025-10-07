import BrandIntroVideo from "./BrandIntroVideo";
import BrandIntroContent from "./BrandIntroContent";

const BrandIntroduce = () => {
  return (
    <div className="w-full bg-black text-white">
      {/* Fullscreen video section */}
      <BrandIntroVideo />

      {/* Brand intro content section */}
      <BrandIntroContent />
    </div>
  );
};

export default BrandIntroduce;
