import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MdOutlineCancel } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { BsPerson } from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';
import { BiComment } from 'react-icons/bi';
import { HiMenuAlt2 } from 'react-icons/hi';
import { LuLayoutDashboard } from 'react-icons/lu';
import { AiOutlineDollar } from 'react-icons/ai';
import { BiBookmark } from 'react-icons/bi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { LuHome } from 'react-icons/lu';
import { GoSignOut } from 'react-icons/go';
import { useStateContext } from '../contexts/ContextProvider';


const links = [
  {
    links: [
      {
        name: 'Dashboard',
        icon: <LuLayoutDashboard className="text-white"/>,
      },
      {
        name: 'Reservations',
        icon: <BiBookmark className="text-white"/>,
      },
      {
        name: 'Location',
        icon: <HiOutlineLocationMarker className="text-white"/>,
      },
      {
        name: 'Cabins',
        icon: <LuHome className="text-white"/>,
      },
      {
        name: 'Staff',
        icon: <BsPerson className="text-white"/>,
      },
      {
        name: 'Analytics',
        icon: < HiMenuAlt2 className="text-white"/>,
      },
      {
        name: 'Feedback',
        icon: <BiComment className="text-white"/>,
      },
      {
        name: 'PriceOption',
        icon: <AiOutlineDollar className="text-white"/>,
      },
      {
        name: 'Settings',
        icon: <FiSettings className="text-white"/>,
      },
      
      
    ],
  },
 
];
const Sidebar = () => {
  const {activeMenu, setActiveMenu } = useStateContext();

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-md  text-gray-700 bg-zinc-700 text-md m-2';
  const normalLink = "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-md text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-zinc-700 m-2";

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto ">
      {activeMenu && (<>
        <div className="flex justify-between items-center">
        <Link to="/" onClick={() => setActiveMenu(false)} className=" items-center gap-5 ml-5 mt-5 tracking-tight">
          <img src={require('./sojourn.png')} alt="" srcset=""  width={'150px'} height={'100px'}/>
        </Link>
        <TooltipComponent content="Menu" position='BottomCenter'>
          <button type= "button" onClick={()=> setActiveMenu((prevActiveMenu)=>!prevActiveMenu)} className=" text-xl rounded-lg p-3 hover:bg-light-gray mt-4 block md:hidden  ">
            <MdOutlineCancel />
          </button>
        </TooltipComponent>
        </div>
        <div className="mt-10">
          {links.map((item) =>(
            <div key={item.title} >
              <p className="text-gray-400 m-3 mt-4 uppercase">
                {item.title}
              </p> 
              {item.links.map((Link) =>(
                <NavLink to={`/${Link.name}`} key={Link.name} onClick={()=>{}} className={({ isActive})=> isActive? activeLink:normalLink}>
                  {Link.icon}
                  <span className="capitalize text-white">
                    {Link.name}
                  </span>
                </NavLink>
              ))}             
            </div>
          ))}
        </div>
        <div className="mt-40 ">
            <div >
                <NavLink to={`/${Link.name}`} key={Link.name} onClick={()=>{}} className={({ isActive})=> isActive? activeLink:normalLink}>
                  {<GoSignOut className="text-white"/>}
                  <span className="capitalize text-white">
                    {"Sign Out"}
                  </span>
                </NavLink>          
            </div>
        </div>
      </>)}
    </div>
  )
}

export default Sidebar