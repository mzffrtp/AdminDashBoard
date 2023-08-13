import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {SiShopware} from "react-icons/si"
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import {MdOutlineCancel} from "react-icons/md"
import {links} from "../data/dummy"

function Sidebar() {
  const activeMenu = true
  const activeLink = "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2"
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';
  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      {
        activeMenu && (
          <>
          <div className='flex justify-between items-center'>
            <Link to={""} className='flex gap-3 ml-3 mt-4 text-xl font-extrabold text-slate-900 items-center tracking-tight dark:text-white '>
              <SiShopware /><span>Admify</span>
            </Link>
            <TooltipComponent content="Menu" position='BottomCenter'>
              <button type='button' className='text-xl rounded-full p-3 mt-4 block hover:bg-light-gray md:hidden' onClick={()=> {}} ><MdOutlineCancel /></button>
            </TooltipComponent>
          </div>
          <div className='mt-10'>
            {
              links.map((link)=>(
                <div key={link.title}>
                  <p className='text-gray-400 m-3 mt-4 uppercase'>{link.title}</p>
                  {
                    link.links.map((linkItem)=>(
                      <NavLink 
                      to={""}
                      key={linkItem.name}
                      className={({isActive})=>(isActive ? activeLink:normalLink)}

                      >
                        {linkItem.icon}
                        <span className='capitalize'>{linkItem.name}</span>
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