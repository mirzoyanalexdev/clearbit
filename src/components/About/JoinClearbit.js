import { BsArrowRight } from "react-icons/bs";

import { CalendarIcon } from "../../envaironment/Icons/CalendarIcon"
import { HealthIcon1 } from "../../envaironment/Icons/HealthIcon1"
import { MoonIcon } from "../../envaironment/Icons/MoonIcon"
import { PinkIcon } from "../../envaironment/Icons/PinkIcon"
import { PalmaIcon } from "../../envaironment/Icons/PlmaIcon"
import { StaticsIcon } from "../../envaironment/Icons/StaticsIcon"
import { Images } from "../../envaironment/Images"


export const JoinClearbit = () => {
    return(
        <div className='flex flex-col pt-28'>
                <div className='max-w-screen-xl m-auto  sm:px-24 px-4 '>
                    <div className='flex flex-col'>
                        <span className='text-white text-4xl mb-7'>Join Clearbit</span>
                        <span className='text-white leading-8'>
                            At Clearbit, you’ll help build the new data backbone for modern sales and<br/>
                            marketing teams across the world. We believe in autonomy,<br/>
                            automation, and the power of great data.
                        </span>
                    </div>
                 
                    <div className='mt-10'>
                        <a href='https://jobs.lever.co/clearbit' target='_blank'>
                            <button className='flex text-white bg-btnBlue px-6 py-2.5 rounded-lg shadow-lg transform duration-500 hover:-translate-y-1 hover:bg-opacity-70'>
                                SEE OPENINGS ADN APPLY ON LEVER
                            </button>
                        </a>    
                    
                    </div>
                    <div className='grid md:grid-cols-3 grid-cols-1 gap-16 mt-20'>
                        <div className='flex items-center '>
                            <div>
                                <HealthIcon1/>
                            </div>
                            <span className='ml-6 text-sm text-white'>
                                HEALTH, DENTAL, VISION, COMMUTER BENEFITS FOR YOU AND YOUR FAMILY
                            </span>
                        </div>
                        <div className='flex items-center '>
                            <div>
                                <PalmaIcon/>
                            </div>
                            <span className='ml-6 text-sm text-white'>
                            REGULAR COMPANY RETREATS
                            </span>
                        </div>
                        <div className='flex items-center '>
                            <div>
                                <StaticsIcon/>
                            </div>
                            <span className='ml-6 text-sm text-white'>
                            EQUITY IN A FAST GROWING STARTUP
                            </span>
                        </div>
                        <div className='flex items-center '>
                            <div>
                                <MoonIcon />
                            </div>
                            <span className='ml-6 text-sm text-white'>
                            FLEXIBLE WORK HOURS
                            </span>
                        </div>
                        <div className='flex items-center '>
                            <div>
                                <CalendarIcon />
                            </div>
                            <span className='ml-6 text-sm text-white'>
                                OPEN VACATION POLICY
                            </span>
                        </div>
                        <div className='flex items-center '>
                            <div>
                                <HealthIcon1/>
                            </div>
                            <span className='ml-6 text-sm text-white'>
                                MENTAL HEALTH AND COACHING SESSIONS
                            </span>
                        </div>
                        <div className='flex items-center '>
                            <div>
                                <PinkIcon/>
                            </div>
                            <span className='ml-6 text-sm text-white'>
                                401(K)
                            </span>
                         </div>
                </div>

                <div className='flex md:flex-row flex-col justify-between mt-16 -mb-10'>
                    <div className='md:mr-6 md:w-1/2'>
                        <img src={Images.ClassRoom} className='rounded-xl transform duration-700 hover:scale-105' />
                    </div>
                    <div className='flex justify-between md:w-1/2 md:mt-0 mt-4'>
                        <div className='mr-6'>
                            <img src={Images.Dog} className='rounded-xl object-cover   transform duration-700 hover:scale-105' />
                        </div>
                        <div>
                        <img src={Images.Rest} className='rounded-xl transform duration-700 hover:scale-105' />
                        </div>
                    </div>
                </div>

            </div>

  
            <div className='bg-white   cursor-pointer pb-20'>
                <div className='max-w-screen-xl m-auto mt-20  sm:px-24 px-4 '>
                <div className='mt-20 flex md:flex-row flex-col '>
                        <div className='border-t border-gray3 pt-20 flex flex-col mb-10 mr-10'>
                            <span className='text-darkGreen text-2xl'>Clearbit Blog</span>
                            <span  className='text-gray3 hover:text-darkGreen'>Get tactical growth tips once a week, with over 15,000 subscribers.</span>
                            <BsArrowRight size={32}  className='text-darkGreen  transform duration-500  hover:translate-x-2'/>
                        </div>
                        <div className='flex flex-1 flex-col border-t border-gray3 pt-20 '>
                            <span className='text-darkGreen text-2xl'>Clearbit on Breakout List</span>
                            <span className='text-gray3 hover:text-darkGreen'>Breakout List: High Potential and High Growth Companies.</span>
                            <BsArrowRight size={32}  className='text-darkGreen  transform duration-500  hover:translate-x-2'/>
                        </div>
                </div>
                </div>
            </div>
     
      

        </div>
    )
}
