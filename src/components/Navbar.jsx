import { Link } from "react-router-dom";
import React, { useState } from "react";
import Search from "../assets/Seacrh.png"
import Profile from "../assets/Profile.png"
import Calender from "../assets/calender.png"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "../assets/Vectors.png"
import Menu from "../assets/fourdots.png"
import Range from "../assets/range.png"
import People from "../assets/Icon.png"
import Box from "../assets/box.png"
import Boy from "../assets/boy.png"
import Div from "../assets/divission.png"
import Caution from "../assets/caution.png"
import Login from "../assets/login.png"
import Logout from "../assets/logout.png"
import Settings from "../assets/settings.png"
import Example from "./ModeToggle";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);

  const [showStatusBar, setShowStatusBar] = React.useState(true)
  const [showPanel, setShowPanel] = React.useState(false)

  const openNav = () => {
    setMobileNav((prev) => !prev);
  };

  const navStyle = mobileNav
    ? "md:hidden fixed left-0 bottom-0 bg-[#0D0D2B] top-0 w-full min-h-screen"
    : "";


  return (
    <div className="fixed w-full left-0 bg-[#FAFAFA] dark:bg-darrk border-b-[1px] border-[#DADDDD] dark:border-gray-300/20 py-4 z-[10] md:z-[1] md:pl-20">
      {/* Logo Div */}
      <div className="flex justify-between items-center w-auto h-full mx-auto px-4 md:px-5 lg:px-6">
        <Link>
          <div className="flex items-center space-x-2 cursor-pointer">
            <div className="flex md:hidden max-h-[40px] cursor-pointer">
              <img
                src={Logo}
                alt="Geegpay"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-[14px] md:text-[24px] font-semibold font-poppins">Dashboard</p>
          </div>
        </Link>


        {/* NavMenu Div */}
        <div className="hidden md:flex md:items-center">
          <div>
            <ul className="md:flex md:items-center space-x-4">
              <li>
                <div className="lg:flex cursor-pointer lg:h-[40px] hidden lg:w-full md:px-2 lg:px-5 items-center border-[1px] border-[#DADDDD] dark:border-gray-300/20 justify-between w-full bg-white dark:bg-darrk rounded-[24px] overflow-hidden">
                  <div className="">
                    <img
                      src={Search}
                      alt="search"
                      className="w-full h-full object-cover "
                    />
                  </div>
                  <input
                    placeholder="Search..."
                    className="bg-transparent dark:bg-darrk focus:outline-none px-2 lg:ml-2"
                  />
                </div>
              </li>
              <li>
                <div className="max-h-[48px] cursor-pointer">
                  <img
                    src={Calender}
                    alt="search"
                    className="w-full h-full object-cover dark:filter dark:brightness-0 dark:invert"
                  />
                </div>
              </li>
              <li>
                <div className="h-[40px] cursor-pointer">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <img
                        src={Profile}
                        alt="search"
                        className="w-full h-full object-cover dark:bg-white rounded-full"
                      />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-20">
                      <DropdownMenuLabel>Status</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuCheckboxItem
                        checked={showStatusBar}
                        onCheckedChange={setShowStatusBar}
                      >
                        Online
                      </DropdownMenuCheckboxItem>


                      <DropdownMenuCheckboxItem
                        checked={showPanel}
                        onCheckedChange={setShowPanel}
                      >
                        Offline
                      </DropdownMenuCheckboxItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Menu Icon Div */}
        <div className="flex md:hidden items-center space-x-3 cursor-pointer">
          <div className="max-h-[40px]  cursor-pointer border-[1px] dark:border-gray-300 border-gray-600 rounded-full">
            <img
              src={Boy}
              alt="Dashboard"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:hidden text-darrk dark:text-white" onClick={openNav} >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Devices Nav */}
      <div className={navStyle}>
        <div
          className={
            mobileNav
              ? " fixed left-0 top-0 w-[100%] min-h-screen bg-[#0D0D2B] z-[1000] p-4 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-4 ease-in duration-500"
          }
        >
          <div className="text-white">
            <div className="flex items-center justify-between w-full">
              <Link>
                <div className="flex items-center gap-1 cursor-pointer text-white">
                  <div className="max-h-[40px] cursor-pointer">
                    <img
                      src={Logo}
                      alt="Bokenkamp EPLG"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="pl-2 text-[18px] font-medium">Dashboard</p>
                </div>
              </Link>

              <div
                className="cursor-pointer z-[10] md:hidden p-4 text-white hover:text-[#031844] hover:bg-[#dce1eb] ease-in-out duration-200 rounded-full hover:shadow-md bg-[#031844] shad0w-white "
                onClick={openNav}
              >
                <AiOutlineClose size={25} />
              </div>
            </div>

            <div className="text-center flex flex-col items-center justify-center mt-4">
              <div>
                <Example />
              </div>

              <ul className="space-y-[2px] text-center mt-6">
                <li className="">
                  <Link>
                    <div className="flex items-center gap-2 cursor-pointer text-white">
                      <div className="cursor-pointer rounded-lg bg-[#F7F8FA]">
                        <img
                          src={Menu}
                          alt="Bokenkamp EPLG"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-[12px] font-medium">Build</p>
                    </div>
                  </Link>
                </li>
                <li className="">
                  <Link>
                    <div className="flex items-center gap-2 cursor-pointer text-white">
                      <div className="max-h-[40px] cursor-pointer">
                        <img
                          src={Range}
                          alt="Bokenkamp EPLG"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-[12px] font-medium">View Range</p>
                    </div>
                  </Link>
                </li>
                <li className="">
                  <Link>
                    <div className="flex items-center gap-2 cursor-pointer text-white">
                      <div className="max-h-[40px] cursor-pointer">
                        <img
                          src={People}
                          alt="Bokenkamp EPLG"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-[12px] font-medium">Our Team</p>
                    </div>
                  </Link>
                </li>
                <li className="">
                  <Link>
                    <div className="flex items-center gap-2 cursor-pointer text-white">
                      <div className="max-h-[40px] cursor-pointer">
                        <img
                          src={Box}
                          alt="Bokenkamp EPLG"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-[12px] font-medium">View Stash</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link>
                    <div className="flex items-center gap-2 cursor-pointer text-white">
                      <div className="max-h-[40px] cursor-pointer">
                        <img
                          src={Div}
                          alt="Bokenkamp EPLG"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-[12px] font-medium">Portfolio</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link>
                    <div className="flex items-center gap-2 cursor-pointer text-white">
                      <div className="max-h-[40px] cursor-pointer">
                        <img
                          src={Caution}
                          alt="Bokenkamp EPLG"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-[12px] font-medium">View Defaults</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link>
                    <div className="flex items-center gap-2 cursor-pointer text-white">
                      <div className="max-h-[40px] cursor-pointer">
                        <img
                          src={Settings}
                          alt="Bokenkamp EPLG"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-[12px] font-medium">More Settings</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link>
                    <div className="flex items-center gap-2 cursor-pointer text-white">
                      <div className="max-h-[40px] cursor-pointer">
                        <img
                          src={Login}
                          alt="Bokenkamp EPLG"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-[12px] font-medium">Login</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link>
                    <div className="flex items-center gap-2 cursor-pointer text-white">
                      <div className="max-h-[40px] cursor-pointer">
                        <img
                          src={Logout}
                          alt="Bokenkamp EPLG"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-[12px] font-medium">Logout</p>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar