import jtImg from "../assets/jt.png";
import scrollifyImg from "../assets/scrollify.jpg";
import ssocImg from "../assets/ssoc.png";

function Experience() {
  return (
    <div
      id="experience"
      className="flex flex-col items-center justify-center pt-20"
    >
      <h1 className="px-8 py-4 text-xl font-semibold nm-flat-gray-900 rounded-xl">
        {` Survived These Jobs and Lived to Tell the Tale: `}
        <span className="text-[#ff5733]">My Work Experience</span>
      </h1>

      <div className="grid gap-10 p-10 mt-20 sm:grid-cols-2 nm-inset-gray-900 rounded-xl">
        <div className="sm:w-[30vw] relative z-10 p-5 nm-flat-gray-900 rounded-xl cursor-pointer hover:scale-105 transition-all">
          <img
            src={ssocImg}
            alt=""
            className="absolute top-3 sm:top-3 right-3 w-[6vh] sm:w-[4vw] rounded-xl"
          />
          <h1 className="font-semibold sm:mt-2 sm:text-xl">Contributor</h1>
          <h1 className="flex text-xs sm:text-base sm:mt-1">
            SSOC <span className="hidden mx-1 sm:block">|</span>
            <br className="block sm:hidden" /> Jun - Jul 2023
          </h1>
          <h1 className="mt-2 text-xs text-gray-300 whitespace-pre-wrap sm:mt-6 sm:text-base">
            {`• Open source contributor for social summer of code season 2.
• Upcoming`}
          </h1>
        </div>
        <div className="sm:w-[30vw] relative p-5 nm-flat-gray-900 rounded-xl cursor-pointer hover:scale-105 transition-all">
          <img
            src={scrollifyImg}
            alt=""
            className="absolute top-3 sm:top-3 right-3 w-[6vh] sm:w-[4vw] rounded-xl"
          />
          <h1 className="font-semibold sm:mt-2 sm:text-xl">Front-End Intern</h1>
          <h1 className="flex text-xs sm:text-base sm:mt-1">
            Scrollify <span className="hidden mx-1 sm:block">|</span>
            <br className="block sm:hidden" /> Jan - Feb 2023
          </h1>
          <h1 className="mt-2 text-xs text-gray-300 whitespace-pre-wrap sm:mt-6 sm:text-base">
            {`• Implemented a user-friendly portfolio builder using React for creative professionals.
• Debugged and fixed front-end technical issues to improve user experience.
• Integrated the portfolio builder with back-end systems to ensure seamless data flow and functionality.`}
          </h1>
        </div>
        <div className="sm:w-[30vw] relative p-5 nm-flat-gray-900 rounded-xl cursor-pointer hover:scale-105 transition-all">
          <img
            src={jtImg}
            alt=""
            className="absolute top-1 sm:-top-3 right-2 w-[7vh] sm:w-[7vw] rounded-xl"
          />
          <h1 className="font-semibold sm:mt-2 sm:text-xl">Front-End Intern</h1>
          <h1 className="flex text-xs sm:text-base sm:mt-1">
            Jobs Territory <span className="hidden mx-1 sm:block">|</span>
            <br className="block sm:hidden" /> June - Aug 2022
          </h1>
          <h1 className="mt-2 text-xs text-gray-300 whitespace-pre-wrap sm:mt-6 sm:text-base">
            {`• Worked on the company's Applicant Tracking System (ATS) platform to enhance the user experience.\n• Built the company's official website from scratch, ensuring that it is user-friendly and visually appealing using React.\n• Led a team of 5 interns,resolved conflicts and ensured smooth progress of work.`}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Experience;
