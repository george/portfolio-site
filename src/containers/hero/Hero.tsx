import * as React from 'react';

import { Statistic } from '../../components/statistic/Statistic';

import { themeContext } from '../../context/ThemeContext';

export const Hero:React.FC = () => {
    const context = React.useContext(themeContext);

    return (
        <div className={`h-[100vh] ${context.backgroundColor} ${context.primaryTextColor} background-waves text-center`}>
            <div className={`${context.primaryTextColor} pt-[10%] text-6xl`} id='home'>
                <span>
                    I'm <span className='text-transparent bg-clip-text bg-gradient-to-r from-secondary
                    to-[#4287f5] drop-shadow-glow'>George</span>.
                </span>
            </div>

            <p className='mt-6 mx-[5%] text-2xl font-bold'>
                Full-stack web artisan, expert in all kinds of technologies.
            </p>

            <div className='mt-[2%] font-bold text-xl'>
                Some quick stats about me...
            </div>

            <div className={`${context.secondaryTextColor} mx-[10%] lg:mx-[20%] mt-[4%] rounded-xl pb-8 pt-0.5`}>
                <div className={`${context.primaryObjectColor} md:grid shadow-xl ${context.shadowColor} 
                rounded-xl shadow-md:grid-cols-3 lg:grid-cols-3 pb-4`}>
                    <Statistic info='4+' name='Years Of Experience'/>
                    <Statistic info='50+' name='Premium Projects'/>
                    <Statistic info='7+' name='Coding Languages'/>
                </div>
            </div>
            <button className='text-center mt-10 bg-secondary px-[max(2%,_40px)] py-[max(1%,_15px)]
            font-bold text-2xl text-neutral-100 rounded-xl'>
                <a href='#about'>
                    Get to know me
                </a>
            </button>
        </div>
    )
}