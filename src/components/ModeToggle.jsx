import { useTheme } from "./theme-provider"
import { motion } from "framer-motion";
import { useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const TOGGLE_CLASSES =
  "text-sm font-medium flex items-center gap-2 px-3 md:px-1 md:pl-2 md:pr-2 py-3 md:py-2 transition-colors relative z-10";

const Example = () => {
  const [selected, setSelected] = useState("light");
  return (
    <div
      className={`grid h-auto place-content-center px-4 py-1 border-[1px] border-[#B2ABAB] rounded-full my-4 md:my-0 transition-colors ${selected === "light" ? "bg-white" : "bg-darrk"
        }`}
    >
      <SliderToggle selected={selected} setSelected={setSelected} />
    </div>
  );
};

const SliderToggle = ({ selected, setSelected }) => {
  const { setTheme } = useTheme()

  return (
    <div className="relative flex w-fit items-center rounded-full">

      <button
        className={`${TOGGLE_CLASSES} ${selected === "light" ? "text-white" : "text-[#B2ABAB]"
          }`}
        onClick={() => {
          setSelected("light")
          setTheme("light")
        }}
      >
        <FiSun className="relative z-10 text-lg md:text-sm" />
      </button>
      <button
        className={`${TOGGLE_CLASSES} ${selected === "dark" ? "text-white" : "text-[#B2ABAB]"
          }`}
        onClick={() => {
          setSelected("dark")
          setTheme("dark");
        }}
      >
        <FiMoon className="relative z-10 text-lg md:text-sm" />
      </button>
      <div
        className={`absolute inset-0 z-0 flex ${selected === "dark" ? "justify-end" : "justify-start"
          }`}
      >
        <motion.span
          layout
          transition={{ type: "spring", damping: 15, stiffness: 250 }}
          className="h-full w-1/2 rounded-full bg-gradient-to-r from-[#34CAA5] to-[#34CAA5]"
        />
      </div>
    </div>
  );
};

export default Example;

// export function ModeToggle() {
//   const { setTheme } = useTheme()

//   return (
//     <DropdownMenu>
//       <DropdownMenuContent align="end">
//         <DropdownMenuItem onClick={() => setTheme("light")}>
//           Light
//         </DropdownMenuItem>
//         <DropdownMenuItem onClick={() => setTheme("dark")}>
//           Dark
//         </DropdownMenuItem>
//         <DropdownMenuItem onClick={() => setTheme("system")}>
//           System
//         </DropdownMenuItem>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   )
// }
