import React from 'react'
import { earningData} from '../../../data/dummy';
import { Button} from '../../../components';
import { useStateContext } from '../../../context/ContextProvider';


function Earnings() {
  const { currentColor, currentMode } = useStateContext();
  return (
    <div className='flex flex-wrap lg:flex-nowrap justify-center lg:items-center'>
    <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 mt-3 bg-hero-pattern bg-no-repeat bg-cover bg-center m-11'>
      <div className='flex justify-between items-center'>
        <div>
          <p className='font-bold text-black-400 dark:text-red-400'>Earnings</p>
          <p className='text-2xl dark:text-red-400'>$63,448.78</p>
          <div className='mt-6'><Button color="white" text="Download" bgColor={currentColor} borderRadius={"10px"} /></div>
        </div>
      </div>
    </div>
    <div className='flex m-3 flex-wrap justify-center gap-1 items-center'>
      {
        earningData.map((i)=>(
          <div key={i.title} className='bg-white h-44 dark:text-gray-400 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl'> 
            <div className='flex items-center justify-center'>
            <button type='button' style={{color:i.iconColor, backgroundColor:i.iconBg}} className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl '>{i.icon}
            </button>
            </div>
          <p className='mt-3'>
            <span className='text-lg font-semibold'>{i.amount}</span>
            <span className={`text-sm text-${i.pcColor} ml-2`}>{i.percentage}</span>
          </p>
          <p className='text-sm text-gray-400 mt-1 text-center'>{i.title}</p>
          </div>
        ))
      }
    </div>
  </div>
  )
}

export default Earnings