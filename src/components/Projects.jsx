import ecommerceImg from "../assets/ecommerce.png";
import netflixImg from "../assets/netflix.png";
import portfolioImg from "../assets/portfolio.png";
import uberImg from "../assets/uber.png";

function Projects() {
  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-center pt-20"
    >
      <h1 className="px-8 py-4 text-xl font-semibold nm-flat-gray-900 rounded-xl">
        <span className="text-[#ff5733]">Projects</span>
        {` that will make you say 'Wow' or at least 'Huh?'`}
      </h1>
      <div className="grid gap-10 p-10 mt-20 sm:grid-cols-2 nm-inset-gray-900 rounded-xl">
        <div className="sm:w-[30vw] p-5 nm-flat-gray-900 rounded-xl cursor-pointer hover:scale-105 transition-all ">
          <img src={ecommerceImg} alt="" className=" rounded-xl" />
          <div className="text-black rounded-b-xl backdrop-blur-md">
            <h1 className="pt-1 pl-3 -mt-6 text-sm font-semibold">
              eCommerce App
            </h1>
          </div>
        </div>
        <div className="sm:w-[30vw] p-5 nm-flat-gray-900 rounded-xl cursor-pointer hover:scale-105 transition-all">
          <img src={netflixImg} alt="" className=" rounded-xl" />
          <div className=" rounded-b-xl backdrop-blur-md">
            <h1 className="pt-1 pl-3 -mt-6 text-sm font-semibold">
              Netflix Clone
            </h1>
          </div>
        </div>
        <div className="sm:w-[30vw] p-5 nm-flat-gray-900 rounded-xl cursor-pointer hover:scale-105 transition-all">
          <img src={portfolioImg} alt="" className=" rounded-xl" />
          <div className="text-sm rounded-b-xl backdrop-blur-md backdrop-brightness-50">
            <h1 className="pt-1 pl-3 -mt-6 text-sm font-semibold">
              Portfolio Template
            </h1>
          </div>
        </div>
        <div className="sm:w-[30vw] p-5 nm-flat-gray-900 rounded-xl cursor-pointer hover:scale-105 transition-all">
          <img src={uberImg} alt="" className=" rounded-xl" />
          <div className="text-sm rounded-b-xl backdrop-blur-md backdrop-brightness-50">
            <h1 className="pt-1 pl-3 -mt-6 text-sm font-semibold">
              Uber Clone (App)
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
