import { Companies } from "./Companies"
import { JoinClearbit } from "./JoinClearbit"
import { Location } from "./Location"
import { OurMisson } from "./OurMission"
import { Steeper } from "./Stepper"
import { TeamUsers } from "./TeamUsers"

const About = () => {
    return(
        <div>
            <div className='bg-gradient-to-b from-blue via-gr2 via-gr3 via-gr4  to-gr6'>
                <div className='max-w-screen-xl m-auto pt-20  sm:px-24 px-4 '>
                    <OurMisson />
                    <Steeper />
                    <Location />
                    <TeamUsers />
                    <Companies />
                </div>
            </div>
            <div className='bg-blue6'>
                  <JoinClearbit />
            </div>
        </div>
    )
}

export default About