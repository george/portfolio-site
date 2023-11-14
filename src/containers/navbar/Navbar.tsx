import * as React from 'react';

import { NavElement } from '../../components/nav/NavElement';
import { ThemeSwitch } from '../../components/nav/ThemeSwitch';

import { themeContext } from '../../context/ThemeContext';

export const Navbar:React.FC = () => {
    const context = React.useContext(themeContext);

    return (
        <nav className={`w-[100%] ${context.backgroundColor} shadow-sm ${context.shadowColor} pb-4 sticky top-0 z-10`}>
            <div className={`pt-2 max-w-fit flex items-center mx-auto font-extrabold ${context.secondaryTextColor} text-xl`}>
                <a className='flex' href='#home'>
                    <img src='/logo.png' className='rounded-full mr-1' alt='g-logo' width='42'/>
                    <span className='ml-2 self-center font-montserrat'>George
                        <span className='ml-3 mr-3'>-</span>
                        <span className='font-normal text-lg'>
                            Software Engineer
                        </span>
                    </span>
                </a>

                <div className='hidden w-full md:inline md:w-auto'>
                    <ul className={`ml-[15%] font-medium flex flex-col p-4 md:p-0 md:flex-row md:space-x-8`}>
                        <NavElement href='#home' displayName='Home'/>
                        <NavElement href='#about' displayName='About'/>
                        <NavElement href='#projects' displayName='Projects'/>
                        <NavElement href='#contact' displayName='Contact'/>
                        <ThemeSwitch/>
                    </ul>
                </div>
            </div>

            <div className='md:hidden flex justify-center mx-[50%] mt-4'>
                <ThemeSwitch/>
            </div>
        </nav>
    )
}