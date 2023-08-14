import React, { useEffect } from 'react'
import {TooltipComponent} from "@syncfusion/ej2-react-popups";
import {useStateContext} from "../context/ContextProvider";
import {AiOutlineMenu} from "react-icons/ai"
import {FiShoppingCart} from "react-icons/fi"
import {BsChatLeft} from "react-icons/bs"
import {RiNotification3Line} from "react-icons/ri";
import avatar from "../data/avatar.jpg";
import {MdKeyboardArrowDown} from "react-icons/md";
import { Cart, Chat, Notification, UserProfile } from '.';

const NavButton = ({title, customFunc, icon, color, dotColor}) => (
  <TooltipComponent content={title} position='BottomCenter'>
    <button
    type='button'
    onClick={()=> customFunc()}
    style={{color}}
    className='relative text-xl rounded-full p-3 hover:bg-light-gray'><span style={{background:dotColor}} className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'>{icon}</span></button>
  </TooltipComponent>
)

function Navbar() {
const {activeMenu, setActiveMenu,isClicked, handleClick, screenSize, setScreenSize} = useStateContext()
const handleActiveMenu = () => setActiveMenu(!activeMenu)

useEffect(()=> {
  const handleResize = ()=> setScreenSize(window.innerWidth)
  window.addEventListener("resize", handleResize)
  handleResize();
  return () => window.removeEventListener("resize", handleResize)
}, [])

useEffect(()=> {
  if(screenSize<=900){setActiveMenu(false)} else {setActiveMenu(true)}
}, [screenSize])
  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <NavButton title="Menu" customFunc={handleActiveMenu} color="blue" icon={<AiOutlineMenu />}/>
      <div className='flex'>
        <NavButton  title="Cart" customFunc={()=>handleClick("cart")} color={""} icon={<FiShoppingCart />}/>
        <NavButton  title="Chat" customFunc={()=>handleClick("chat")} color={""} icon={<BsChatLeft />} dotColor={"orange"}/>
        <NavButton  title="Notification" customFunc={()=>handleClick("notification")} color={""} icon={<RiNotification3Line />} dotColor={"pink"}/>
        <TooltipComponent content={"Profile"} position='BottomCenter'>
          <div className='flex items-center gap-2 cursor-pointer p-1rounded-lg hover:bg-light-gray' onClick={()=>handleClick("userProfile")}>
            <img className='rounded-full w-8 h-8' src={avatar} alt='user-profile'/>
            <p>
              <span className='text-gray-400 text-14'>Hi</span>
              <span className='text-gray-400 font-bold ml-1 text-14'>Micheal</span>
            </p>
            <MdKeyboardArrowDown className='text-gray-400 text-14' />  
          </div>
        </TooltipComponent>
        {isClicked.cart && (<Cart />)}
        {isClicked.chat && (<Chat/>)}
        {isClicked.notification && (<Notification/>)}
        {isClicked.userProfile && (<UserProfile/>)}




      </div>
    </div>
  )
}

export default Navbar