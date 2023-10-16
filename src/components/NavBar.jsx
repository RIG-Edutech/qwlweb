import { Disclosure, } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import logo_img from '../img/QWL.png'
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// function classNames(...classes) {
//     return classes.filter(Boolean).join(' ')
// }

export default function NavBar(props) {
    const location = useLocation()
    console.log(location.pathname);
    if(location.pathname==="/"){
        props.setPageNum(1)
    }
    else if(location.pathname==="/about"){
        props.setPageNum(2)
    }
    return (
        <Disclosure as="nav" className="bg-white shadow static">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ">
                        <div className="relative flex justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button */}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-200">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex-shrink-0 flex items-center">
                                    <img
                                        className="block lg:hidden h-8 w-auto"
                                        src={logo_img}
                                        alt="Mbejaji"
                                    />
                                    <img
                                        className="hidden lg:block h-8 w-auto"
                                        src={logo_img}
                                        alt="Mbejaji"
                                    />
                                </div>
                                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                                    {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                                    <Link
                                        to="/"
                                        onClick={()=>props.setPageNum(1)}
                                        className={props.pageNum === 1 ? "border-amber-200 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"}
                                    >
                                        Home
                                    </Link>

                                    <Link
                                        to="/about"
                                        onClick={()=>props.setPageNum(2)}
                                        className={props.pageNum === 2 ? "border-amber-200 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"}
                                    >
                                        About
                                    </Link>



                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="pt-2 pb-4 space-y-1">
                            {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                            <Link
                                to="/"
                                onClick={()=>props.setPageNum(1)} 
                                className={(props.pageNum === 1 ? "bg-indigo-50 border-sky-200 text-sky-300 block pl-3 pr-4 py-2 border-l-4 text-base font-medium" : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium")}
                            >
                                Home
                            </Link>
                            <Link
                                to="/about"
                                onClick={()=>props.setPageNum(2)}
                                className={(props.pageNum === 2 ? "bg-indigo-50 border-sky-200 text-sky-300 block pl-3 pr-4 py-2 border-l-4 text-base font-medium" : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium")}
                            >
                                About
                            </Link>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
