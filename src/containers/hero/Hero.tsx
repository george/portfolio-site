import * as React from 'react';

import { Statistic } from '../../components/statistic/Statistic';

export const Hero:React.FC = () => {
    return (
        <div className='h-[100vh] text-white background-waves text-center'>
            <div className='pt-[10%] text-6xl font-extrabold text-white' id='home'>
                <span>
                    I'm <span className='text-transparent bg-clip-text bg-gradient-to-r from-secondary
                    to-[#A358A3] drop-shadow-glow'>George</span>.
                </span>
            </div>

            <p className='mt-6 text-2xl font-bold text-gray-300'>
                Software engineer working with all kinds of technologies.
            </p>

            <div className='mt-[5%] font-bold text-xl text-gray-200'>
                Some quick stats about me...
            </div>

            <div className='bg-neutral-800 mx-[20%] mt-[2%] rounded-xl pb-8 pt-0.5'>
                <div className='mx-[5%] md:grid md:grid-cols-3 lg:grid-cols-3'>
                    <Statistic info='4+' name='Years Of Experience'/>
                    <Statistic info='20+' name='Premium Projects'/>
                    <Statistic info='7' name='Coding Languages'/>
                </div>
            </div>
            <button className='text-center mt-10 bg-secondary px-[max(2%,_40px)] py-[max(1%,_15px)] font-bold text-2xl rounded-xl'>
                <a href='#about'>
                    Get to know me
                </a>
            </button>
        </div>
    )
}