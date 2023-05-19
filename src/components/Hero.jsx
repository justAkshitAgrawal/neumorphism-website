import akshitImg from "../assets/akshit.jpg";
import "./Hero.css";
import { RxLinkedinLogo, RxGithubLogo } from "react-icons/rx";

function Hero() {
  const bioOptions = [
    "I'm a frontend developer, which basically means I'm responsible for making websites look pretty enough that people forget how much they hate the internet.",
    "I turn coffee into code, and pixels into beautiful websites. If it's not responsive, it's not my fault - blame the cookies.",
    "Frontend developer by day, CSS magician by night. I turn pixels into web pages and caffeine into code.",
    "Frontend developer by day, CSS magician by night. I turn coffee into code and make pixels dance.",
    "I may not be able to make your website go viral, but I can definitely make it look good enough to be the envy of your competitor's outdated site.",
  ];
  const random = Math.floor(Math.random() * bioOptions.length);

  return (
    <div id="home" className="flex items-center justify-center mt-10 ">
      <div className="flex items-center space-x-20 p-36 nm-inset-gray-900 rounded-xl mt-14">
        <div className="px-10 py-5 rounded-xl nm-flat-gray-900">
          <h1 className="text-5xl font-bold">Akshit Agrawal</h1>
          <h1 className="mt-1 text-2xl font-semibold text-[#E1B12C]">
            Front-End Developer
          </h1>
          <h1 className="lg:max-w-[22vw] max-w-[80vw] mt-2 ">
            {bioOptions[random]}
          </h1>
          <div className="flex items-center justify-center mt-3 space-x-4 lg:justify-start">
            <a
              href="https://www.linkedin.com/in/akshitagrwl/"
              target="_blank"
              rel="noreferrer"
              className="p-2 nm-flat-gray-900 rounded-xl"
            >
              <RxLinkedinLogo className=" h-7 w-7 hover:text-[#ff5733] transition-all cursor-pointer " />
            </a>
            <a
              href="https://github.com/justAkshitAgrawal"
              target="_blank"
              rel="noreferrer"
              className="p-2 nm-flat-gray-900 rounded-xl"
            >
              <RxGithubLogo className=" h-7 w-7 hover:text-[#ff5733] transition-all cursor-pointer" />
            </a>
          </div>
        </div>
        <div className="wrap ">
          <div className="outer ">
            <div className=" circle">
              <img src={akshitImg} alt="" className="bg-contain " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
