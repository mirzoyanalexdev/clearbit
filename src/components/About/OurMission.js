import { BgLinesLeft } from "../../envaironment/Icons/BgLinesLeft"
import { BgLinesRight } from "../../envaironment/Icons/BgLinesRight"

export const OurMisson = () => {
    return (
        <div className="flex pb-20">
            <div className='mt-4 sm:block hidden'>
                <div className='absolute right-0 '>
                    <BgLinesRight />
                </div>
                <div className='absolute left-0 transform rotate-180	'>
                    <BgLinesLeft />
                </div>
            </div>
          
            <div className='flex flex-col'>
                <span className='text-white text-4xl mb-4'>
                Our mission is to build the data <br/>backbone for modern businesses.
                </span>
                <span className='text-gray text-lg leading-8 '>
                Clearbit is the marketing data engine for customer interactions. We <br/>
                help businesses grow by providing tools that help them deeply <br/>
                understand their customers, identify future prospects, and highly <br/>
                personalize every single marketing and sales interaction. <br/>
                </span>
            </div>
        </div>
    )
}