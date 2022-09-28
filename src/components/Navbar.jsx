import React, { useContext, useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdArrowDropDown, MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import avatar from '../data/avatar.jpg';
import { Cart, Chat, Notification, UserProfile } from '.';
import { appContext } from '../context/appContext';

const NavButton = ({title,customFunc,icon,color,bkColor,cur}) =>(
  <TooltipComponent content={title} position='BottomCenter'>
    <button type='button' onClick={customFunc} style={{color}} className='relative p-3 rounded-full text-xl hover:bg-light-gray'>
      <span style={{ backgroundColor : bkColor}} className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2' />
      {icon} 
      
    </button>
  </TooltipComponent>
)

const Navbar = () => {
  const {activeMenu, setActiveMenu,isClicked, setIsClicked,handleClick ,screenSize, setScreenSize,curentColor} = useContext(appContext);
  useEffect(() => {
    //get width of the screen 
    const hanleScreenSize = () => setScreenSize(()=> window.innerWidth);
    //get width of the windo on evrey resize of the screnn
    window.addEventListener('resize',hanleScreenSize)
    hanleScreenSize()
  
    return () => {
      window.removeEventListener('resize',hanleScreenSize)
    }
  }, [])
  
  useEffect(() => {
   (screenSize<=900)?setActiveMenu(false): setActiveMenu(true)
  }, [screenSize])
  return (
    <div className='flex justify-between p-2 relative md:mx-6 '>
      <NavButton title='Menu' customFunc={()=>{ setActiveMenu((prev)=>!prev)}}  color={ curentColor } icon={<AiOutlineMenu />} />
      <div className='flex'>
        <NavButton title='Cart' customFunc={()=>{handleClick('cart')}}  color={ curentColor } icon={<FiShoppingCart />}/>
        <NavButton title='Chat' customFunc={()=>{handleClick('chat')}}  color={ curentColor } bkColor="#03C9D7" icon={<BsChatLeft />}/>
        <NavButton title='Notification' customFunc={()=>{handleClick('notification')}}  color={ curentColor } bkColor="#03C9D7" icon={<RiNotification3Line />}/>
        <TooltipComponent content="Profil" position='BottomCenter'>
            <div className='flex items-center gap-2 cursor-pointer p-1 rounded-lg hover:bg-light-gray' onClick={() => handleClick('userProfile')}>
              <img className='h-8 w-8 rounded-full' src={avatar}></img>
              <p className='text-gray-400 text-14'>
                <span>Hi, </span>
                <span className='font-bold ml-1'>Ahmed</span>
              </p>
              <MdArrowDropDown className='text-gray-400 text-14'/>
            </div>
        </TooltipComponent>
        { isClicked.cart && <Cart /> }
        { isClicked.chat && <Chat /> }
        { isClicked.notification && <Notification /> }
        { isClicked.userProfile && <UserProfile /> }

      </div>
    </div>
  )
}

export default Navbar