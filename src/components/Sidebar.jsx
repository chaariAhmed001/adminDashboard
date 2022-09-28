import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { links } from '../data/dummy';
import { Item } from '@syncfusion/ej2/splitbuttons';
import { appContext } from "./../context/appContext";

const Sidebar = () => {
  const {activeMenu, setActiveMenu,screenSize ,curentColor} = useContext(appContext)
  const handleCloseSideBar =()=>{ if(screenSize&&screenSize <=900 )setActiveMenu(false)}
  const activeLink = 'flex item-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-white m-2 bg-light-gray text-withe';
  const normal = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2'
  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      {
        activeMenu && (<>
            <div className='flex justify-between items-center'>
              <Link to='/' onClick={handleCloseSideBar} className='ml-3 mt-4 items-center gap-3 flex text-xl font-extrabold tracking-tight dark:text-white  text-slate-900'> <SiShopware /><span>Shoppy</span></Link>
              <TooltipComponent content='Menu' position='BottomCenter'>
                <button type='button' onClick={()=>setActiveMenu((prevActiveMenu)=>!prevActiveMenu)} className='rounded-full p-3 text-xl mt-4 hover:bg-light-gray block md:hidden'> <MdOutlineCancel /></button>
              </TooltipComponent>
            </div>
            <div className='mt-10'>
              {
                links.map((item)=>(
                  <div key={item.title}>
                     <p className='text-gray-400 m-3 uppercase'>{item.title}</p> 
                     {
                      item.links.map((link)=>(
                        <NavLink
                        to={`/${link.name}`}
                        key={link.name}
                        onClick={handleCloseSideBar}
                        style={({ isActive }) => ({
                          backgroundColor: isActive ? curentColor : '',
                        })}
                        className={({ isActive }) => (isActive ? activeLink:normal)}
                      >
                        {link.icon}
                        <span className="capitalize ">{link.name}</span>
                      </NavLink>
                      ))
                     }
                  </div>
                ))
              }
            </div>
          </>
        )
      }
    </div>
  )
}

export default Sidebar