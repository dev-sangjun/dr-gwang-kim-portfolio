import { HiBars3 } from "react-icons/hi2";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  return (
    <div className="fixed z-10 navbar shadow-sm bg-base-100">
      <div className="navbar-start" />
      <div className="navbar-center">
        <a className="btn btn-ghost normal-case text-xl">Dr. Gwang Kim</a>
      </div>
      {!location.pathname.includes("/bio") && (
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost text-xl">
              <HiBars3 />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="#about" className="inline-block w-full">
                  About
                </a>
              </li>
              <li>
                <a href="#education" className="inline-block w-full">
                  Education
                </a>
              </li>
              <li>
                <a href="#samples" className="inline-block w-full">
                  Samples
                </a>
              </li>
              <li>
                <a href="#contact" className="inline-block w-full">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
