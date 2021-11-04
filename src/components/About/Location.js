import { Images } from "../../envaironment/Images"
import { BsArrowRight } from "react-icons/bs";


export const Location = () => {

    return (
        <div className='flex flex-col'>
            <div className='grid md:grid-cols-2 grid-rows gap-4 '>
                <div className=' bg-dark-green  rounded-xl p-10 cursor-pointer '>
                    <span className='text-white text-3xl'>Made with love in the heart <br/> of  San Francisco.</span>
                    <div className='mt-9'>   
                        <a target='_blank' href="https://www.google.com/maps/dir//''/@37.7722685,-122.4140865,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x808f7e2863707ab3:0x412476c10289bd9c!2m2!1d-122.4118978!2d37.7722685!3e0">
                            <img src={Images.Location} className='w-full object-cover h-28 rounded-t-lg'/>
                        </a>
                    </div>
                    <div className='flex flex-col bg-blue1 py-9 px-8 rounded-b-lg shadow-lg	hover:bg-opacity-20'>
                        <span className='text-white font-semibold'>CLEARBIT HQ</span>
                        <div className='flex mt-6'>
                            <div className='flex flex-col'>
                                <span className='text-white font-semibold'>90 Sheridan St</span>
                                <span className='text-gray2'>San Francisco, CA</span>
                            </div>
                            <div className='flex-grow flex-end justify-end flex items-center hover:text-white'>
                                <a  
                                    href="https://www.google.com/maps/dir//''/@37.7721942,-122.4139924,17z/data=!3m1!4b1!4m9!4m8!1m0!1m5!1m1!1s0x808f7e2863707ab3:0x412476c10289bd9c!2m2!1d-122.4118037!2d37.7721942!3e0?shorturl=1" 
                                    className='text-blue2 hover:text-white' 
                                    target={'_blank'}
                                >
                                    Directions
                                </a>
                                <BsArrowRight size={12} className='text-blue2 mt-1.5 ml-1'/>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='rounded-xl'>
                    <img src={Images.Room}  className='object-contain rounded-xl'/>
                </div>
            </div>
            <div className='flex flex-col text-center mt-28'>
                <span className='text-3xl text-white'>
                        We're Hiring.
                </span>
                <span className='text-white text-base leading-8	mt-5'>
                    Clearbit is built by a team of people with diverse backgrounds who <br/>
                    genuinely love working together. Help us transform the world of business <br/>
                    intelligence data and build a product companies love to use.
                </span>
                <div>
                <button className='rounded-lg bg-white px-6 py-2.5 text-btnGreen font-semibold mt-6 transform duration-700 hover:-translate-y-2 hover:text-green'>
                        VIEW OPENINGS
                </button>
            </div>
            </div>
           
        
        </div>

    )
}