
import { CustomerIcon } from "../../envaironment/Icons/CustomerIcon"
import { EnrichmentsIcon } from "../../envaironment/Icons/EnrichmentsIcon"
import { FlagIcon } from "../../envaironment/Icons/FlagIcon"
import { UserIcon } from "../../envaironment/Icons/UserIcon"

export const Steeper = () => {
    return (
        <div className="mb-40 ">
            <div className='h-1 ml-2 lg:block hidden bg-lightGray -mb-6'/>
            <div className='grid lg:grid-cols-4   gap-4 '>
                <div className="flex md:flex-col flex-row">
                    <div className='mb-5 md:mr-0 mr-5'>
                       <FlagIcon />
                    </div>
                    <div className='flex flex-col '>
                        <span className='text-base text-white font-semibold	mb-6'>FOUNDED IN 2015</span>
                        <span className='text-base text-gray '>By Andrew O'Neal, Matt Sornson, Amit Vasudev, Harlow Ward, Rob Holland, and Alex MacCaw.</span>
                    </div>
                  
                </div>
                <div className="flex md:flex-col flex-row">
                <div className='mb-5 md:mr-0 mr-5'>
                        <EnrichmentsIcon />
                    </div>
                    <div className='flex flex-col '>
                        <span className='text-base text-white font-semibold	mb-6'>FOUNDED IN 2015</span>
                        <span className='text-base text-gray '>More than 500 million records enriched monthly</span>
                    </div>
                </div>
                <div className="flex md:flex-col flex-row">
                <div className='mb-5 md:mr-0 mr-5'>
                        <UserIcon />
                    </div>
                    <div>
                        <span className='text-base text-white font-semibold	mb-6'>FOUNDED IN 2015</span>
                        <span className='text-base text-gray '>Hundreds of thousands of people and companies use Clearbit every day</span>
                    </div>
                </div>
                <div className="flex md:flex-col flex-row">
                <div className='mb-5 md:mr-0 mr-5'>
                        <CustomerIcon />
                    </div>
                    <div>
                        <span className='text-base text-white font-semibold	mb-6'>FOUNDED IN 2015</span>
                        <span className='text-base text-gray '>Giving thousands of businesses a deeper understanding of their customers</span>
                    </div>
                  
                </div>
            </div>
         
        </div>
            
    )
}
