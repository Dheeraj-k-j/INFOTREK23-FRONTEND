import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import styles from "../style";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <div
      className={`navbar-div bg-black bg-opacity-70 ${styles.paddingX} ${styles.flexCenter}`}
    >
      <div className={`${styles.boxWidth} `}>
        <nav className="w-full flex py-6 justify-between items-center navbar">
          <a href="/">
            <img src={logo} alt="Infotrek logo" className="w-[250px]" />
          </a>

          <ul className="list-none sm:flex hidden justify-end items-center flex-1">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`font-normal cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } mr-10`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
            <li className="mr-10">
              {/* Refactor the button in secondary button component */}
              <a className="secondary-btn">
                <div className="cyber-cta">
                  <div className="cyber-cta--background">
                    <div></div>
                  </div>
                  <div className="cyber-cta--foreground"></div>
                  <div className="cyber-cta--text">SIGN IN</div>
                </div>
              </a>{" "}
            </li>
          </ul>

          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain"
              onClick={() => setToggle(!toggle)}
            />

            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
            >
              <ul className="list-none flex justify-end items-start flex-1 flex-col">
                {navLinks.map((nav, index) => (
                  <li
                    key={nav.id}
                    className={`font-orbitron font-medium cursor-pointer text-[16px] ${
                      active === nav.title ? "text-white" : "text-dimWhite"
                    } mb-4`}
                    onClick={() => setActive(nav.title)}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
                <li className="mb-4">
                  {/* Refactor the button in secondary button component */}
                  <a className="secondary-btn">
                    <div className="cyber-cta">
                      <div className="cyber-cta--background">
                        <div></div>
                      </div>
                      <div className="cyber-cta--foreground"></div>
                      <div className="cyber-cta--text">SIGN IN</div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
