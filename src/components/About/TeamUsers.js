import { Images } from "../../envaironment/Images"

export const TeamUsers = () => {

    const users = [
        {
            avatar: Images.Avatar,
            name: 'Nick Wentz',
            title: 'VP of Marketing',
            linkedin: 'https://linkedin.com'
        },
        {
            avatar: Images.Avatar,
            name: 'Nick Wentz',
            title: 'VP of Marketing',
            linkedin: 'https://linkedin.com'
        },
        {
            avatar: Images.Avatar,
            name: 'Nick Wentz',
            title: 'VP of Marketing',
            linkedin: 'https://linkedin.com'
        },
        {
            avatar: Images.Avatar,
            name: 'Nick Wentz',
            title: 'VP of Marketing',
            linkedin: 'https://linkedin.com'
        },
        {
            avatar: Images.Avatar,
            name: 'Nick Wentz',
            title: 'VP of Marketing',
            linkedin: 'https://linkedin.com'
        },
        {
            avatar: Images.Avatar,
            name: 'Nick Wentz',
            title: 'VP of Marketing',
            linkedin: 'https://linkedin.com'
        },
        {
            avatar: Images.Avatar,
            name: 'Nick Wentz',
            title: 'VP of Marketing',
            linkedin: 'https://linkedin.com'
        },
        {
            avatar: Images.Avatar,
            name: 'Nick Wentz',
            title: 'VP of Marketing',
            linkedin: 'https://linkedin.com'
        },
        {
            avatar: Images.Avatar,
            name: 'Nick Wentz',
            title: 'VP of Marketing',
            linkedin: 'https://linkedin.com'
        },
        {
            avatar: Images.Avatar,
            name: 'Nick Wentz',
            title: 'VP of Marketing',
            linkedin: 'https://linkedin.com'
        },
        {
            avatar: Images.Avatar,
            name: 'Nick Wentz',
            title: 'VP of Marketing',
            linkedin: 'https://linkedin.com'
        },
        {
            avatar: Images.Avatar,
            name: 'Nick Wentz',
            title: 'VP of Marketing',
            linkedin: 'https://linkedin.com'
        },
        {
            avatar: Images.Avatar,
            name: 'Nick Wentz',
            title: 'VP of Marketing',
            linkedin: 'https://linkedin.com'
        },
        {
            avatar: Images.Avatar,
            name: 'Nick Wentz',
            title: 'VP of Marketing',
            linkedin: 'https://linkedin.com'
        },
        {
            avatar: Images.Avatar,
            name: 'Nick Wentz',
            title: 'VP of Marketing',
            linkedin: 'https://linkedin.com'
        },
        {
            avatar: Images.Avatar,
            name: 'Nick Wentz',
            title: 'VP of Marketing',
            linkedin: 'https://linkedin.com'
        },
        {
            avatar: Images.Avatar,
            name: 'Nick Wentz',
            title: 'VP of Marketing',
            linkedin: 'https://linkedin.com'
        },
        {
            avatar: Images.Avatar,
            name: 'Nick Wentz',
            title: 'VP of Marketing',
            linkedin: 'https://linkedin.com'
        },
        {
            avatar: Images.Avatar,
            name: 'Nick Wentz',
            title: 'VP of Marketing',
            linkedin: 'https://linkedin.com'
        },
        {
            avatar: Images.Avatar,
            name: 'Nick Wentz',
            title: 'VP of Marketing',
            linkedin: 'https://linkedin.com'
        },
        {
            avatar: Images.Avatar,
            name: 'Nick Wentz',
            title: 'VP of Marketing',
            linkedin: 'https://linkedin.com'
        },
        {
            avatar: Images.Avatar,
            name: 'Nick Wentz',
            title: 'VP of Marketing',
            linkedin: 'https://linkedin.com'
        },
        {
            avatar: Images.Avatar,
            name: 'Nick Wentz',
            title: 'VP of Marketing',
            linkedin: 'https://linkedin.com'
        },
    ]
    return(
        <div className='mt-28' >
                <span className='text-white text-3xl'>Who we are</span>
                <div className='grid  md:grid-cols-3 lg:grid-cols-6 grid-cols-2 gap-4 mt-10'>
                    {
                     users.map((user, index) => ( 
                            <div className="flex flex-col  border-t border-gray2 items-center hover:border-white cursor-pointer mb-16" key={`${user.name}+ ${index}`} >
                                <img src={user.avatar} className='h-16 w-16 rounded-full mt-6 transform duration-500 hover:scale-110 mb-3.5' />
                                <span className='text-white text-sm'>{user.name}</span>
                                <span className='text-white text-sm'>{user.title}</span>
                            </div> 
                            ) 
                        )
                    }
                </div>
        </div>
    )
}