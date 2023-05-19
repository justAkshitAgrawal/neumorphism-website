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
    <div
      id="home"
      className="z-20 flex items-center justify-center mt-5 sm:mt-10"
    >
      <div className="flex flex-col p-10 sm:space-x-20 sm:items-center sm:flex-row sm:p-36 nm-inset-gray-900 rounded-xl sm:mt-14 ">
        <div className="order-2 px-10 py-5 text-center mt-7 rounded-xl nm-flat-gray-900 sm:order-1 sm:mt-0 sm:text-left">
          <h1 className="text-2xl font-bold sm:text-5xl">Akshit Agrawal</h1>
          <h1 className="mt-1 text-lg sm:text-2xl font-semibold text-[#E1B12C]">
            Front-End Developer
          </h1>
          <h1 className="lg:max-w-[25vw] sm:text-base text-sm max-w-[80vw] mt-2 ">
            {bioOptions[random]}
          </h1>
          <div className="flex items-center justify-center mt-3 space-x-4 lg:justify-start">
            <a
              href="https://www.linkedin.com/in/akshitagrwl/"
              target="_blank"
              rel="noreferrer"
              className="p-2 nm-flat-gray-900 rounded-xl active:nm-inset-gray-900 hover:text-[#ff5733]"
            >
              <RxLinkedinLogo className="transition-all cursor-pointer h-7 w-7" />
            </a>
            <a
              href="https://github.com/justAkshitAgrawal"
              target="_blank"
              rel="noreferrer"
              className="p-2 nm-flat-gray-900 rounded-xl active:nm-inset-gray-900 hover:text-[#ff5733]"
            >
              <RxGithubLogo className="transition-all cursor-pointer h-7 w-7" />
            </a>
          </div>
        </div>
        <div className="order-1 wrap sm:order-2 ">
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
