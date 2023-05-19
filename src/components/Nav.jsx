import { Link } from "react-scroll";

function Nav() {
  return (
    <nav className="sticky items-center justify-between hidden px-4 py-2 text-gray-300 top-10 sm:flex nm-flat-gray-900 rounded-xl">
      <h1 className="px-4 py-2 tracking-wider text-[#ff5733] cursor-pointer nm-inset-gray-900 rounded-xl text-lg font-semibold">
        akshitagrawal.dev
      </h1>

      <div className="flex items-center space-x-5">
        <Link
          smooth={true}
          spy={true}
          to="home"
          activeClass="active"
          className="nav"
          offset={-150}
        >
          Home
        </Link>
        <Link
          smooth={true}
          spy={true}
          to="about"
          activeClass="active"
          className="nav"
        >
          About
        </Link>
        {/* <Link className="nav"> Home</Link> */}
      </div>
    </nav>
  );
}

export default Nav;
