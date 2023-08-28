import * as React from 'react';

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
        name: 'Twitter / X',
        iconUrl: '/logos/x-logo.png',
        platformLink: 'https://twitter.com/@rigatoni'
    }
];

export const Contact:React.FC = () => {

    return (
        <div className='h-[45vh] mt-[5%] background-clouds' id='contact'>
            <div className='text-white text-center'>
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

                    <div className='inline-flex'>
                        { socialMediaPlatforms.map((platform) => {
                            return <a href={platform.platformLink}>
                                <img className='mt-5 rounded-full mx-auto mr-5' src={platform.iconUrl} alt={platform.name + ' Logo'} width={64}/>
                            </a>
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}