import Image from 'next/image';
import Link from 'next/link';

const People = () => {

    return (
        <div id="product">
            
            <div className="mx-auto max-w-7xl px-6">
                
                <div className='grid grid-cols-1 lg:grid-cols-12 pt-10 lg:pt-32 lg:mt-20'>

                    <div className='col-span-6 flex justify-center'>
                        <Image src="/assets/banner/about-our-team.svg" alt="nothing" width={500} height={405} />
                    </div>

                    <div className='col-span-6 flex flex-col justify-evenly lg:pl-24 mt-10 lg:mt-0'>
                        <h1 className='text-BLACK text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-143'>350+ Freelancers already waitlisted</h1>
                        <h3 className='text-black text-lg font-normal text-center lg:text-start lh-173 opacity-75 pt-5 lg:pt-0'>With the successful launch of its beta version in April 2024, Omega has swiftly emerged as a trailblazer in the realm of talent sourcing and freelancing platforms. The platform's innovative approach and user-friendly interface have resonated deeply within the creative community, .</h3>
                        <Link href={'/'} className="text-BLACK text-lg font-medium flex gap-2 mx-auto lg:mx-0 pt-5 lg:pt-0">
                        <u>Learn more</u> <Image src="/assets/people/arrow-right.svg" alt="arrow-right" width={24} height={24} />
                        </Link>
                    </div>

                    <div className='col-span-6 flex flex-col justify-evenly lg:pl-24 mt-10 lg:mt-0'>
                        <h1 className='nothing text-BLACK text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-143' >Building Partnerships with Prominent Companies</h1>
                        <h3 className='text-black text-lg font-normal text-center lg:text-start lh-173 opacity-75 pt-5 lg:pt-0'>Another milestone Omega has achieved is building partnerships with several 
                        prominent companies in the industry, expanding its network and enhancing its credibility. These partnerships have enabled Omega to offer exclusive opportunities and projects to its freelancers,
                         further solidifying its position as a premier platform for showcasing talent and connecting with employers.</h3>
                        <Link href={'/'} className="text-BLACK text-lg font-medium flex gap-2 mx-auto lg:mx-0 pt-5 lg:pt-0">
                            <u>Learn more</u> <Image src="/assets/people/arrow-right.svg" alt="arrow-right" width={24} height={24} />
                        </Link>
                    </div>

                    <div className='col-span-6 flex justify-center'>
                        <Image src="/assets/banner/people3.svg" alt="nothing" width={500} height={405} />
                    </div>

                    

                </div>
                
            </div>

            
        </div>
    )
}

export default People;
