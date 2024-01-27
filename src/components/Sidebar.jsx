import { NavLink } from 'react-router-dom';
import Logo from "../assets/Vectors.png"
import Menu from "../assets/fourdots.png"
import Range from "../assets/range.png"
import People from "../assets/Icon.png"
import Box from "../assets/box.png"
import Div from "../assets/divission.png"
import Caution from "../assets/caution.png"
import Login from "../assets/login.png"
import Logout from "../assets/logout.png"
import Settings from "../assets/settings.png"
import Side from "../assets/nodge.png"
import Example from './ModeToggle';


const Sidebar = () => {
  return (
    <div className="fixed top-0 border-r-[1px] border-[#DADDDD] dark:border-gray-300/20 left-0 h-full bg-[#F7F8FA] dark:bg-darrk z-[22] text-white w-20 flex flex-col items-center justify-between py-4">
      {/* Sidebar Icons */}
      <div className="flex flex-col space-y-1 w-full items-center justify-center">
        <NavLink to="/home" className="pb-3">
          <div className="max-h-[40px] cursor-pointer">
            <img
              src={Logo}
              alt="dashboard"
              className="w-full h-full object-cover"
            />
          </div>
        </NavLink>
        <NavLink to="/home" className="flex items-center justify-center w-full relative">
          <div className="max-h-[40px] cursor-pointer">
            <img
              src={Menu}
              alt="dashboard"
              className="w-full h-full object-cover dark:filter dark:brightness-0 dark:invert"
            />
          </div>
          <div className='absolute right-0 '>
            <img
              src={Side}
              alt="dashboard"
              className="w-full h-full object-cover"
            />
          </div>
        </NavLink>
        <NavLink to="/home" className="">
          <div className="max-h-[40px] cursor-pointer">
            <img
              src={Range}
              alt="dashboard"
              className="w-full h-full object-cover"
            />
          </div>
        </NavLink>
        <NavLink to="/home" className="">
          <div className="max-h-[40px] cursor-pointer">
            <img
              src={People}
              alt="dashboard"
              className="w-full h-full object-cover"
            />
          </div>
        </NavLink>
        <NavLink to="/home" className="">
          <div className="max-h-[40px] cursor-pointer">
            <img
              src={Box}
              alt="dashboard"
              className="w-full h-full object-cover"
            />
          </div>
        </NavLink>
        <NavLink to="/home" className="">
          <div className="max-h-[40px] cursor-pointer">
            <img
              src={Div}
              alt="dashboard"
              className="w-full h-full object-cover"
            />
          </div>
        </NavLink>
        <NavLink to="/home" className="">
          <div className="max-h-[40px] cursor-pointer">
            <img
              src={Caution}
              alt="dashboard"
              className="w-full h-full object-cover"
            />
          </div>
        </NavLink>
        <div className='transform translate-y-8 rotate-90 mt-4'>
          <NavLink to="/home" className="">
            <div className="cursor-pointer w-full">
              <Example />
            </div>
          </NavLink>
        </div>
      </div>

      {/* Bottom icons */}
      <div className='flex flex-col space-y-1 w-full items-center justify-center pb-4'>
        <NavLink to="/home" className="">
          <div className="max-h-[40px] cursor-pointer">
            <img
              src={Login}
              alt="dashboard"
              className="w-full h-full object-cover"
            />
          </div>
        </NavLink>
        <NavLink to="/home" className="">
          <div className="max-h-[40px] cursor-pointer">
            <img
              src={Settings}
              alt="dashboard"
              className="w-full h-full object-cover"
            />
          </div>
        </NavLink>
        <NavLink to="/home" className="">
          <div className="max-h-[40px] cursor-pointer">
            <img
              src={Logout}
              alt="dashboard"
              className="w-full h-full object-cover"
            />
          </div>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar