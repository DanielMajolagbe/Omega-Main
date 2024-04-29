import Image from "next/image";
import Link from 'next/link';


interface datatype {
    heading: string;
    paragraph: string;
    paragraph2: string;
}

const Aboutdata: datatype[] = [
    {
        heading: "Daniel Idowu",
        paragraph: 'I can help you create an interactive web application and integrate it with a functional MongoDB Database.',
        paragraph2: 'Fullstack Developer',
    },
    {
        heading: "Emmanuel Adamu",
        paragraph: "I can help you design a seamless and intuitive user experience and craft wireframes and mockups that resonates with with the needs of your audience",
        paragraph2: 'UI/UX Designer',
    },
    {
        heading: "Josephine Owolabi",
        paragraph: 'I am a Database architect that can optimize APIs and ensure data security. I can help you develop a scalable backend infrastructure. ',
        paragraph2: 'Backend Developer',
    }
]

const Features = () => {
    return (
        <div className="bg-babyblue" id="features">
            <div className="mx-auto max-w-2xl py-20 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <h3 className="text-4xl sm:text-5xl font-semibold text-black text-center my-10">Recently Posted</h3>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-4 lg:gap-x-8 mt-10'>
                    {Aboutdata.map((item, i) => (
                        <div key={i} className='bg-white rounded-2xl p-5 featureShadow'>
                            <h3 className="text-2xl font-bold text-midnightblue mt-5">{item.heading}</h3>
                            <h4 className='text-lg font-normal text-black opacity-60 my-2'>{item.paragraph2}</h4>
                           <h4 className='text-lg font-normal text-black opacity-100 my-2'>{item.paragraph}</h4>
                           <div className="time">Less than 2h ago</div>
                           <p className="star">✯✯✯✯✯</p> <br />
                            <button className="gumroad-buttonx text-white text-xl font-medium py-6 px-12 rounded-3xl transition duration-150 ease-in-out bg-black hover:text-black hover:bg-white border-black">
View Details
      </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Features;
