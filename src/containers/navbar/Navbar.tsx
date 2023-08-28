import * as React from 'react';

import { NavElement } from '../../components/nav/NavElement';

export const Navbar:React.FC = () => {
    return (
        <nav className='w-[100%] border-b-2 border-[#242424] bg-[#121212] pb-4 sticky top-0 z-10'>
            <div className='mt-5 max-w-fit flex items-center mx-auto font-extrabold text-white text-xl'>
                <a className='flex' href='#home'>
                    <img src='/logo.png' className='rounded-full' alt='g-logo' width='48'/>
                    <span className='ml-2 self-center'>George
                        <span className='ml-3 mr-3'>-</span>
                        <span className='font-normal text-lg'>
                            Software Engineer
                        </span>
                    </span>
                </a>

                <div className='hidden w-full md:inline md:w-auto'>
                    <ul className="ml-[15%] font-medium flex flex-col p-4 md:p-0 md:flex-row md:space-x-8">
                        <NavElement href='#home' displayName='Home'/>
                        <NavElement href='#about' displayName='About'/>
                        <NavElement href='#projects' displayName='Projects'/>
                        <NavElement href='#contact' displayName='Contact'/>
                    </ul>
                </div>
            </div>
        </nav>
    )
}