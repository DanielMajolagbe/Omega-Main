"use client";
import { SetStateAction, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const names = [
    {
        heading: "Back-End Developer",
        button: "View Suggestions(30)",
        category: 'yearly',
      
    },
    {
        heading: "Web Developer",
        button: "View Suggestions (41)",
        category: 'yearly',
        imgSrc: '/assets/pricing/startwo.svg',
    },
    {
        heading: "Product Designer",
        button: "View Suggestions (12)",
        category: 'yearly',
        imgSrc: '/assets/pricing/starthree.svg',
    },
    {
        heading: "Product Designer",
        button: "View Suggestions (12)",
        category: 'yearly',
        imgSrc: '/assets/pricing/starthree.svg',
    },
    {
        heading: "Product Designer",
        button: "View Suggestions (12)",
        category: 'yearly',
        imgSrc: '/assets/pricing/starthree.svg',
    },
    {
        heading: "Product Designer",
        button: "View Suggestions (12)",
        category: 'yearly',
        imgSrc: '/assets/pricing/starthree.svg',
    },
    {
        heading: "Product Designer",
        button: "View Suggestions (12)",
        category: 'yearly',
        imgSrc: '/assets/pricing/starthree.svg',
    },
    {
        heading: "Product Designer",
        button: "View Suggestions (12)",
        category: 'yearly',
        imgSrc: '/assets/pricing/starthree.svg',
    },
    {
        heading: "Others",
        button: "View Suggestions (12)",
        category: 'yearly',
        imgSrc: '/assets/pricing/starthree.svg',
    },
    {
        heading: "Hiring: Web Developer with React / Next",
        price: "100K+",
        button: "View Jobs (2)",
        category: 'monthly',
        imgSrc: '/assets/pricing/starone.svg',
    },
    {
        heading: "Hiring: Mobile App Developer",
        price: "Null",
        subscriber: 0.50,
        button: "View Jobs (13)",
        option: 'Sed ut perspiciatis unde',
        category: 'monthly',
        imgSrc: '/assets/pricing/startwo.svg',
    },
   
    {
        heading: "Hiring: Web Developer with React / Next",
        price: "100K+",
        button: "View Jobs (2)",
        category: 'monthly',
        imgSrc: '/assets/pricing/starone.svg',
    },
    {
        heading: "Hiring: Web Developer with React / Next",
        price: "100K+",
        button: "View Jobs (2)",
        category: 'monthly',
        imgSrc: '/assets/pricing/starone.svg',
    },
    {
        heading: "Hiring: Web Developer with React / Next",
        price: "100K+",
        button: "View Jobs (2)",
        category: 'monthly',
        imgSrc: '/assets/pricing/starone.svg',
    },
    {
        heading: "Hiring: Web Developer with React / Next",
        price: "100K+",
        button: "View Jobs (2)",
        category: 'monthly',
        imgSrc: '/assets/pricing/starone.svg',
    },
    {
        heading: "Hiring: Web Developer with React / Next",
        price: "100K+",
        button: "View Jobs (2)",
        category: 'monthly',
        imgSrc: '/assets/pricing/starone.svg',
    },
    {
        heading: "Hiring: Web Developer with React / Next",
        price: "100K+",
        button: "View Jobs (2)",
        category: 'monthly',
        imgSrc: '/assets/pricing/starone.svg',
    },
     {
        heading: "Other Jobs This Month",
        price: "Null",
        subscriber: 0.50,
        button: "View Jobs (327)",
        option: 'Sed ut perspiciatis unde',
        category: 'monthly',
        imgSrc: '/assets/pricing/starthree.svg',
    },
]


const Pricing = () => {

    const [selectedCategory, setSelectedCategory] = useState('monthly');

    const handleCategoryChange = (category: SetStateAction<string>) => {
        setSelectedCategory(category);
    };

    const filteredData = names.filter((item) => item.category === selectedCategory);

    return (
        <div id="pricing" className='pricing-bg relative py-10'>
             <div className='mx-auto max-w-7xl sm:py-20 lg:px-8 my-16'>
                <h3 className='text-center text-4xl sm:text-65xl font-black'>Available Jobs & Services</h3>

                <p className='text-lg font-normal text-center text-black opacity-60 pt-5'></p>

                <div className='mt-6 relative'>
                    <div className='flex justify-center'>
                        <div className='bg-black flex py-1 px-1 rounded-full '>
                            <h3
                                className={`text-xl font-medium cursor-pointer ${selectedCategory === 'yearly' ? 'text-electricblue bg-white rounded-full py-2 px-4 sm:py-4 sm:px-16' : 'text-white py-2 px-4 sm:py-4 sm:px-16'
                                    }`}
                                onClick={() => handleCategoryChange('yearly')}
                            >
                                Freelancers
                            </h3>
                            <h3
                                className={`text-xl font-medium cursor-pointer ${selectedCategory === 'monthly' ? 'text-electricblue bg-white rounded-full py-2 px-4 sm:py-4 sm:px-16' : 'text-white py-2 px-4 sm:py-4 sm:px-16'
                                    }`}
                                onClick={() => handleCategoryChange('monthly')}
                            >
                                Jobs
                            </h3>
                        </div>
                    </div>
                </div>


                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16 mx-5 gap-6'>
                    {
                        filteredData.map((item, index) => (
                            <div className='pt-10 pb-23 pl-10 pr-10 bg-white rounded-3xl bxshd relative cursor-pointer hover:bg-black group' key={index}>
                                <h4 className='text-4xl sm:text-3xl font-semibold mb-8 text-grey group-hover:text-white'>{item.heading}</h4>
                             <a href=''> <button  className='text-xl font-medium text-white w-full bg-black hover:text-black group-hover:bg-cornflowerblue group-hover:border-black border-2 border-grey rounded-2xl py-4 px-12 mb-8'>{item.button}</button> </a>
                            

                            
                            </div>
                        ))}
                </div>

            </div>
        </div>
    );
}

export default Pricing;
