import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../../images/logo.png";
import { useState } from "react";

const NavbarItem = ({ title, classProps, url }) => {
  return (
    <li className={`mx-4 cursor-pointer ${classProps}`}>
      <a href={url} target="_blank" rel="noreferrer">
        {title}
      </a>
    </li>
  );
};
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="flex items-center justify-between w-full p-4 md:justify-center">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div>
      <ul className="flex-row items-center justify-between flex-initial hidden text-white list-none md:flex">
        {[
          { title: "Market", url: "https://coinmarketcap.com/" },
          { title: "Exchange", url: "https://www.coinbase.com/" },
          {
            title: "Tutorials",
            url: "https://hackr.io/blog/best-cryptocurrency-blockchain-tutorials",
          },
        ].map((item, index) => (
          <NavbarItem
            key={item.title + index}
            title={item.title}
            classProps="my-2 text-lg"
            url={item.url}
          />
        ))}
        {/* <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2556bd]">
          Login
        </li> */}
      </ul>
      <div className="relative flex">
        {toggleMenu && (
          <AiOutlineClose
            fontSize={28}
            className="text-white cursor-pointer md:column md:hidden"
            onClick={() => {
              setToggleMenu(false);
            }}
          />
        )}
        {!toggleMenu && (
          <HiMenuAlt4
            fontSize={28}
            className="text-white cursor-pointer md:column md:hidden"
            onClick={() => {
              setToggleMenu(true);
            }}
          />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in 
          "
          >
            <li
              className="w-full my-2 x-xl"
              onClick={() => {
                setToggleMenu(false);
              }}
            >
              {[
                { title: "Market", url: "https://coinmarketcap.com/" },
                { title: "Exchange", url: "https://www.coinbase.com/" },
                {
                  title: "Tutorials",
                  url: "https://hackr.io/blog/best-cryptocurrency-blockchain-tutorials",
                },
              ].map((item, index) => (
                <NavbarItem
                  key={item.title + index}
                  title={item.title}
                  classProps="my-2 text-lg"
                  url={item.url}
                />
              ))}
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
