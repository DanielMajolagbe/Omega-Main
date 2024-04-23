import { Disclosure } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Signdialog from "./Signdialog";
import Registerdialog from "./Registerdialog";


interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'Featured', href: '#product', current: true },
    { name: 'Available', href: '#Available', current: false },
    { name: 'Coupons', href: '#Coupons', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {

    const [isOpen, setIsOpen] = React.useState(false);

    return (

    <div className="relative h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
         
        <Disclosure as="nav" className="navbar">
                 <>
                <div className="mx-auto max-w-7xl px-6 md:py-4 lg:px-8 ">
                    <div className="relative flex h-20 items-center justify-between">
                        <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">

                            {/* LOGO */}

                            <div className="flex flex-shrink-0 items-center">
                              
                                <img
                                    className="image"
                                    src={'/assets/banner/Group(1).svg'}
                                    alt="paidin-logo"
                                />
                                 <p><b>Omega</b></p>
                            </div>

                            {/* LINKS */}

                            <div className="hidden lg:block ml-20">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <div key={item.name} className="relative">
                                                {item.name === 'Featured' ? (
                                                    <Link
                                                        href={item.href}
                                                        className={classNames(
                                                            item.current ? ' text-black hover:opacity-75' : 'hover:text-black hover:opacity-75',
                                                            'px-3 py- text-lg font-normal text-black space-links flex items-center'
                                                        )}
                                                        aria-current={item.href ? 'page' : undefined}
                                                    >
                                                        {item.name}
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 ml-1"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" stroke-width="1"/></svg>
                                                    </Link>
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
