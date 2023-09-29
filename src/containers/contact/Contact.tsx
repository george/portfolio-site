import * as React from 'react';

import { AnimatedComponent } from '../../components/animated/AnimatedComponent';

export interface SocialMediaPlatform {

    name: string,
    iconUrl: string,
    platformLink: string

}

const socialMediaPlatforms:SocialMediaPlatform[] = [
    {
        name: 'GitHub',
        iconUrl: '/logos/github-logo.png',
        platformLink: 'https://github.com/george'
    },
    {
        name: 'Chess',
        iconUrl: '/logos/chess.png',
        platformLink: 'https://chess.com/members/glove'
    },
    {
        name: 'Twitter / X',
        iconUrl: '/logos/x-logo.png',
        platformLink: 'https://twitter.com/@rigatoni'
    }
];

export const Contact:React.FC = () => {
    return (
        <div className='h-[45vh] mt-[5%] background-clouds' id='contact'>
            <div className='text-center'>
                <div className='text-4xl font-extrabold'>
                    Looking to get in touch?
                </div>
                <div className='text-lg font-normal mx-4'>
                    <div className='mt-6'>
                        My best contact method is through my email, <a className='underline'
                                                                       href='mailto:george@hostile.org'>george@hostile.org</a>.
                    </div>

                    <div className='mt-6'>
                        I can also be reached at the following socials:
                    </div>

                    <AnimatedComponent time={.75} distance={'5%'}>
                        <div className='mt-8 mx-[10%] lg:mx-[30%] bg-[#242424] shadow-xl shadow-neutral-800 rounded-xl'>
                            <ul className='px-[4%] inline-flex flex-wrap flex-row gap-x-2 gap-y-2 mb-4'>
                                { socialMediaPlatforms.map((platform) => {
                                    return <li key={platform.name}>
                                        <a href={platform.platformLink}>
                                            <img className='mt-5 rounded-full mx-auto mr-5' src={platform.iconUrl} alt={platform.name + ' Logo'} width={64}/>
                                        </a>
                                    </li>
                                })}
                            </ul>
                        </div>
                    </AnimatedComponent>
                </div>
            </div>
        </div>
    );
}