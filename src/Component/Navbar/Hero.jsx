import heroImg from "../../assets/banner-main.png";
import heroShadow from "../../assets/bg-shadow.png";
const Hero = () => {
    return (
        <div className="max-w-7xl mx-auto my-5 bg-gray-900 rounded-2xl overflow-hidden">
<div
  className="hero"
  style={{
    backgroundImage:
      "url(" + heroShadow + ")",
  }}
>
  {/* <div className="hero-overlay"></div> */}
  <div className="hero-content text-white text-center py-16">
    <div className="flex flex-col items-center p-2.5">
        <img src={heroImg} alt="Hero" className="mb-5 w-auto h-50" />
      <h1 className="mb-5 text-2xl sm:text-2xl md:text-4xl font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
      <p className="mb-5">
        Beyond Boundaries Beyond Limits
      </p>
      <div className="inline-block p-2 border-2 border-yellow-400 rounded-2xl bg-transparent ">
        <button className="btn btn-warning text-black font-semibold text-[14px] sm:text-xl px-8 sm:px-12 py-5 rounded-lg border-none hover:shadow-xl transition-all">
          Claim Free Credit
        </button>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Hero;