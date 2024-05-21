'use client'
import Image from 'next/image';
import Register from '../Navbar/Registerdialog';
import Modal from '@/app/components/Modal'
import { useState } from 'react';

const Banner = () => {
        const [isOpen, setIsOpen] = useState(false)

        const closeModal = () => {
            setIsOpen(false)
        }
        
        const openModal = () => {
            setIsOpen(true)
        }


        return (

      
        <div className=" mt-24 lg:mt-0 relative h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_2px,transparent_3px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className='flex w-full items-center justify-center text-center h-[65vh]'>
            <div className='flex items-center flex-col text-center gap-y-8'>
            <h1 className='text-6xl font-bold md:font-extrabold lg:font-black'>Empowering <strong>Freelancers</strong> & <br /> Redefining Talent Advertising</h1>
            <p className='text-base'> A place where diverse creative minds can showcase talent and help employers and Pre-Seed stage founders realize their dreams.</p>
            <div className="flex justify-center">
                
      <button onClick={openModal} className="gumroad-button text-white text-xl font-medium py-6 px-12 rounded-3xl transition duration-150 ease-in-out bg-black hover:text-black hover:bg-white border-black mr-4">
        Start for Free
        {
            isOpen ? <Modal setIsOpen={setIsOpen} isOpen={isOpen} /> : null
        }
      </button>
      <a href="https://www.youtube.com/watch?v=your_video_id" target="_blank" rel="noopener noreferrer">
    <button className="gumroad-button2 text-white text-xl font-medium py-6 px-12 rounded-3xl transition duration-150 ease-in-out bg-black hover:text-black hover:bg-white border-black">
        Watch Video
    </button>
    
    
</a>

<br /><br />

      
    </div>
    
    
            </div>
            
        </div>
       
        </div>

       
        
    )
}

export default Banner;
