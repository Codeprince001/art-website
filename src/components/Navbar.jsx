import { Logo } from "../assets";
import { Link, NavLink } from "react-router-dom";
import { links } from "../assets/constants";
import { IoMdMenu } from "react-icons/io";
import { FaMinus } from "react-icons/fa6";
import { useState } from "react";

const Navbar = () => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };


  return (
    <div >
      <div className="md:flex flex justify-between p-4 flex-1 relative md:items-center md:flex-1 md:justify-between md:py-[25px] md:pr-[60px] md:pl-[60px] ">


        <Link to="/">
          <img src={Logo} alt="logo" height="64px" />
        </Link>

        <div className={`md:flex lg:flex-row flex-col lg:items-center text-[#1E0734] absolute top-24 lg:static ${mobileMenuOpen ? 'z-50' : 'z-[-1]'} lg:z-[50] left-0 w-full lg:w-auto bg-[#F3F3F3]`}>
          {links.map((item) => {
            return (
              <Link key={item.name} to={`#${item.to}`} className="text-[#1E0734] font-bold mr-8" >
                <div className="mb-4 p-4 text-[1.2rem] key={item.name}">
                  {item.name}
                </div>
              </Link>
            );
          })}
        </div>

        <button className="bg-gradient-to-br from-[#EA6EE7] via-[#AB54FD] to-[#7D2AE7] text-white rounded-[30px] p-4 font-semibold" onClick={handleMobileMenuToggle}>
          <Link className="lg:block hidden">
            Join community
          </Link>
          <div className="lg:hidden block">
            {mobileMenuOpen ? <FaMinus size={"28px"} /> : <IoMdMenu size={"28px"} />}
          </div>
        </button>

      </div>
    </div>
  );
};

export default Navbar;
