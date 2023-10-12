import * as React from 'react';

import { AnimatedComponent } from '../../components/animated/AnimatedComponent';

import { themeContext } from '../../context/ThemeContext';

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
    const context = React.useContext(themeContext);

    return (
        <div className={`overflow-x-hidden h-[45vh] mt-[5%] background-clouds text-center ${context.secondaryTextColor}`} id='contact'>
            <h1 className={`text-4xl font-extrabold ${context.primaryTextColor}`}>
                Looking to get in touch?
            </h1>

            <div className='text-lg font-normal mx-4'>
                <div className='mt-6'>
                    My best contact method is through my email, <a className={`underline`}
                                                                   href='mailto:george@hostile.org'>george@hostile.org</a>.
                </div>

                <p className='mt-6'>
                    I can also be reached on the following platforms:
                </p>

                <AnimatedComponent time={.75} distance={'5%'}>
                    <div className={`mt-8 mx-[10%] lg:mx-[30%] ${context.primaryObjectColor} shadow-xl 
                    ${context.shadowColor} rounded-xl`}>
                        <ul className='mt-5 px-[4%] inline-flex flex-wrap flex-row gap-x-8 items-center mb-4'>
                            { socialMediaPlatforms.map((platform) => {
                                return <li key={platform.name}>
                                    <a href={platform.platformLink}>
                                        <img className='rounded-full mx-auto' src={platform.iconUrl} alt={platform.name + ' Logo'} width={64}/>
                                    </a>
                                </li>
                            })}
                        </ul>
                    </div>
                </AnimatedComponent>
            </div>
        </div>
    );
}