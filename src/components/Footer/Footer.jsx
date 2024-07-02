import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'
function Footer() {
  return (
    <section className=" cursor-pointer relative overflow-hidden py-10 bg-gray-400 border-t-2 shadow-black dark:dark:bg-[#333333] shadow-md rounded-t-xl border-t-black ">
            <div className="relative z-10 mx-auto max-w-7xl px-4">
                <div className="-m-6 flex flex-wrap">
                    <div className="w-full p-6 md:w-1/2 lg:w-5/12">
                        <div className="flex h-full flex-col justify-between">
                            <div className="mb-4 inline-flex items-center">
                                <Logo width="113px" />
                                <div className="tag hidden sm:block my-auto dark:text-white font-black z-[5px] px-2 cursor-pointer text-3xl">Start<span className='text-red-600 '>Up</span><span>Connect</span></div>
                                </div>
                            <div>
                                <p className="text-sm dark:text-white text-gray-600">
                                    &copy; Copyright 2023. All Rights Reserved by JSS.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2  lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-gray-500 hover:text-gray-600   ">
                                Company
                                <div className=" w-24 h-1 border-b-2 mt-3 bg-yellow-300 rounded-2xl"></div>

                            </h3>

                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-900 dark:text-white hover:text-gray-700"
                                        to="/"
                                    >

                                        Features
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-900 dark:text-white hover:text-gray-700"
                                        to="/"
                                    >
                                        Pricing
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-900 dark:text-white hover:text-gray-700"
                                        to="/"
                                    >
                                        Affiliate Program
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className=" text-base font-medium text-gray-900 dark:text-white hover:text-gray-700"
                                        to="/"
                                    >
                                        Press Kit
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500 hover:text-gray-600 ">
                                Support
                                <div className=" w-24 h-1 border-b-2 mt-3 bg-yellow-300 rounded-2xl"></div>

                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-900 dark:text-white hover:text-gray-700"
                                        to="/"
                                    >
                                        Account
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-900 dark:text-white hover:text-gray-700"
                                        to="/"
                                    >
                                        Help
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-900 dark:text-white hover:text-gray-700"
                                        to="/"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className=" text-base font-medium text-gray-900 dark:text-white hover:text-gray-700"
                                        to="/"
                                    >
                                        Customer Support
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500 hover:text-gray-600 ">
                                Legals
                                <div className=" w-24 h-1 border-b-2 mt-3 bg-yellow-300 rounded-2xl"></div>

                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-900 dark:text-white hover:text-gray-700"
                                        to="/"
                                    >
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-900 dark:text-white hover:text-gray-700"
                                        to="/"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className=" text-base font-medium text-gray-900 dark:text-white hover:text-gray-700"
                                        to="/"
                                    >
                                        Licensing
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Footer