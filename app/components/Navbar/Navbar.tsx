import { Disclosure } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React, { useState } from 'react';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Signdialog from "./Signdialog";
import Registerdialog from "./Registerdialog";
import Image from 'next/image';


interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'Featured', href: '#product', current: true },
   
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
            <Disclosure as="nav" className="navbar">
                <>
                    <div className="mx-auto max-w-7xl px-6 md:py-4 lg:px-8 ">
                        <div className="relative flex h-20 items-center justify-between">
                            <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
                                {/* LOGO */}
                                <div className="flex flex-shrink-0 items-center">
                                    <Image
                                        className="image"
                                        src={'/assets/banner/important/favicon.svg'}
                                        alt="paidin-logo"
                                        width={30}
                                        height={40}
                                    />
                                    <p>Omega</p>
                                </div>
                                {/* LINKS */}
                                <div className="hidden lg:block ml-20">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <div key={item.name} className="relative">
                                                {item.name === 'Featured' ? (
                                                    <div className="relative group">
                                                        <Link
                                                            href={item.href}
                                                            className={classNames(
                                                                'px-3 py- text-lg font-normal text-black space-links flex items-center group-hover:opacity-75 relative'
                                                            )}
                                                            aria-current={item.href ? 'page' : undefined}
                                                        >
                                                            {item.name}
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 ml-1"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" strokeWidth="0.5"/></svg>
                                                        </Link>
                                                        <div className="absolute left-0 mt-12 w-30 bg-white border-white rounded-2xl shadow-lg opacity-0 group-hover:opacity-100 z-10 p-6 flex justify-between">
                                                            <a href='https://omegafreelance.notion.site/Omega-Freelancers-6ce4c6f0ea074d549305578ee97c1b46'>
                                                            <div className="mr-6">
                                                                <h5>Freelancers</h5>
                                                                <br />
                                                                <h6>Developers</h6>
                                                                <br />
                                                                <h6>Project Managers</h6>
                                                                <br />
                                                                <h6>Designers</h6>
                                                                <br />
                                                                <h6>Others</h6>
                                                                <br />
                                                            </div> </a>
                                                           
                                                        </div>


                                                    </div>
                                                ) : (
                                                    <Link
                                                        href={item.href}
                                                        className={classNames(
                                                            item.current ? ' text-black hover:opacity-75' : 'hover:text-black hover:opacity-75',
                                                            'px-3 py-4 text-lg font-normal text-black space-links'
                                                        )}
                                                        aria-current={item.href ? 'page' : undefined}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            {/* SIGNIN DIALOG */}
                            <Signdialog />
                            {/* REGISTER DIALOG */}
                            <Registerdialog />
                            {/* DRAWER FOR MOBILE VIEW */}
                            {/* DRAWER ICON */}
                            <div className='block lg:hidden'>
                                <Bars3Icon className="block h-6 w-6" aria-hidden="true" onClick={() => setIsOpen(true)} />
                            </div>
                            {/* DRAWER LINKS DATA */}
                            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                                <Drawerdata />
                            </Drawer>
                        </div>
                    </div>
                </>
            </Disclosure>
        </div>
    )
}

export default Navbar;
