import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import {useContext} from'react'
import {DarkModeContext} from '../../context/darkModeContext.jsx'
const Navbar = () => {
  const { darkMode, toggle } = useContext(DarkModeContext);

  return (
    <div className="flex justify-center items-center p-5 sticky top-0 z-50 bg-white border-b-[1px] border-gray-300 dark:border-[#444] dark:bg-[#1b1c1e] ">
<div className="logo  flex flex-grow justify-center">
<img className="h-16 md:h-20" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png" alt="" />
</div>

<div className="darkMode  flex justify-end cursor-pointer">

 <span onClick={toggle}>
 {darkMode? <LightModeOutlinedIcon fontSize="large" className=" text-gray-500 dark:text-white"/> :   <DarkModeOutlinedIcon fontSize="large" className=" text-gray-500 dark:text-white" />
}
 </span>


</div>


    </div>
  )
}

export default Navbar