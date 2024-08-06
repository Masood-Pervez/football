import { useState } from "react";
import { Link } from "react-router-dom";
const navList = (
  <ul className="lg:flex md:flex sm:flex lg:gap-3 md:gap-3 sm:gap-3 text-white">
    <li><Link to='/'>Football</Link></li>
    <li><Link to='/about'>Capitals</Link></li>
    <li><Link to='/contacts'>Presidents</Link></li>

    

  </ul>
);

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="main bg-indigo-700
       lg:flex lg:justify-between lg:items-center
       md:flex md:justify-between md:items-center
       sm:flex sm:justify-between sm:items-center
       px-3 py-3 sticky top-0"
      >
        <div className="left flex items-center justify-between">
          {/* logo */}
          <h1 className="text-2xl text-white">Masood<span className="text-xs text-red-500">Info Tech</span></h1>
          {/* menu button */}
          {!open ? (
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden md:hidden sm:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-8 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          ) : (
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden md:hidden sm:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-8 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </button>
          )}
        </div>
        {/* right Desktop */}
        <div className="right hidden lg:block md:block sm:block">{navList}</div>
        {/* Mobile navlist */}
        {open && (
          <div className="mobile Navlist lg:hidden md:hidden sm:hidden">
            {navList}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
