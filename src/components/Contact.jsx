import { AiFillMail } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";

function Contact() {
  return (
    <div
      id="contact"
      className="flex flex-col items-center justify-center pt-20"
    >
      <h1 className="px-8 py-4 text-xl font-semibold nm-flat-gray-900 rounded-xl">
        <span className="text-[#ff5733]">Get in Touch</span>
        {` or Risk Being Struck by Lightning (Not Really, But Maybe) `}
      </h1>

      <div className="grid gap-10 mt-20 sm:p-10 p-7 sm:grid-cols-2 nm-inset-gray-900 rounded-xl">
        <div className="flex items-center p-3 space-x-5 nm-flat-gray-900 rounded-xl">
          <a
            href="mailto:me@akshitagrawal.dev"
            target="_blank"
            rel="noreferrer"
            className="p-4 rounded-full nm-flat-gray-900 active:nm-inset-gray-900 hover:text-[#ff5733] text-[#E1B12C]"
          >
            <AiFillMail className="w-7 h-7" />
          </a>
          <div className="-mt-2">
            <h1 className="font-semibold text-[#ff5733] p-2">Mail</h1>
            <a
              href="mailto:me@akshitagrawal.dev"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#ff5733] nm-inset-gray-900 p-2 rounded-xl  "
            >
              me@akshitagrawal.dev
            </a>
          </div>
        </div>

        <div className="flex items-center p-3 space-x-5 rounded-xl nm-flat-gray-900">
          <a
            href="https://www.linkedin.com/in/akshitagrwl/"
            target="_blank"
            rel="noreferrer"
            className="p-4 rounded-full nm-flat-gray-900 active:nm-inset-gray-900 hover:text-[#ff5733] text-[#E1B12C]"
          >
            <BsLinkedin className="w-7 h-7" />
          </a>
          <div className="-mt-2">
            <h1 className="font-semibold text-[#ff5733] p-2">Send a PM</h1>
            <a
              href="https://www.linkedin.com/in/akshitagrwl/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#ff5733] nm-inset-gray-900 p-2 rounded-xl  "
            >
              LinkedIn:// akshitagrwl
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
