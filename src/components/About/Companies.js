import { Images } from "../../envaironment/Images"


export const Companies = () => {

    const Logos = [
        Images.Logo1,
        Images.Logo2,
        Images.Logo3,
        Images.Logo4,
        Images.Logo5,
        Images.Logo6
    ]

    return (
        <div className='flex flex-col mt-24 pb-24'>
            <div className='md:flex-row md:flex flex flex-col justify-between'>
                <div className='flex items-center'>
                    <span className='text-3xl text-green'>
                    Trusted by the world’s best companies
                    </span>
                </div>
                <div className='justify-center flex md:mt-0 mt-5'>
                    <button className='text-blue5 bg-green px-6 py-2.5 rounded-lg transform duration-700 hover:-translate-y-2 hover:text-white'>
                        CUSTOMER STORIES
                    </button>
                </div>
            </div>
            <div className='grid md:grid-cols-6 grid-cols-2 md:gap-4 gap-20 mt-16'>
                {
                    Logos.map((logo,i) => (
                        <div key={`${logo} + ${i}`}>
                            <img src={logo} />
                        </div>    
                    ))
                }
            </div>
         
         
        </div>
    )
}