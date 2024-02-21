import React, { useEffect, useState } from 'react'

export default function Navbar() {

    return (
        <>
            <nav className=" px-0  ">
                <div className=" md:container mx-auto flex justify-between items-center  h-24 ">
                    <div className="flex flex-row  items-end justify-between w-full md:w-auto px-2">
                        <div className='md:flex md:flex-row'>
                            <div className=' md:text-2xl primary-color'>GOKUDEV</div>
                            <div className=' md:text-1xl primary-color mx-3 md:mr-36 '>카테고리</div>
                        </div>
                        <div class="relative">
                            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                                <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m4-5a8 8 0 11-16 0 8 8 0 0116 0z"></path>
                                </svg>
                            </span>
                            <input class="pl-8 appearance-none border rounded w-full py-4 pr-20 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " id="search" type="text" placeholder="Username" />
                        </div>
                        {/* <a href="#" className="text-dark text-lg font-semibold">Logo</a> */}
                    </div>

                    <div class="md:block  flex-row  hidden ">
                        <div class="flex items-center">
                        </div>
                        <div class="flex items-center">
                            <span>
                                <img src="https://www.testvalley.kr/common/home-event.svg" alt="" />
                            </span>
                            <span className='text-gray-300 mx-1'>|</span>
                            <span>
                                로그인 / 회원가입
                            </span>
                        </div>
                    </div>

                    {/* <div className="md:hidden">
                        <button className="text-dark focus:outline-none">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div> */}
                </div>
            </nav>

        </>

    )
}
