import { useState } from 'react';

import AboutMeSection from '../../components/about/AboutMeSection';

export default function AboutMe() {
    const [sections] = useState([
        <AboutMeSection title='Who am I' contents={
            <div>
                <p className='font-normal'>
                    I'm an 18 year old software engineer from Texas. I've been coding
                    since 2019, where I started with Java. I've loved coding ever since.
                </p>
            </div>
        }/>,
        <AboutMeSection title='Interests' contents={
            <div>
                <p className='font-normal'>
                    I'm a fan of cryptocurrency, web development, and the Windows API. Additionally,
                    I love learning about JVM bytecode.
                </p>
            </div>
        }/>,
        <AboutMeSection title='Skills' contents={
            <div>
                <p className='font-bold'>
                    Development: <span className='font-normal'>Frontend development, backend development, mobile app
                    development, native app development</span>
                </p>
                <p className='font-bold'>
                    Cloud Computing : <span className='font-normal'>AWS (ECS, ECR, EC2, S3, Amplify, etc)</span>
                </p>
                <p className='font-bold'>
                    Database Management : <span className='font-normal'>SQL / Relational DBs, MongoDB</span>
                </p>
            </div>
        }/>,
        <AboutMeSection title='Frontend Technologies' contents={
            <div>
                <p className='font-bold'>
                    Languages / Tools: <span className='font-normal'>HTML, CSS, Dart, JavaScript</span>
                </p>
                <p className='font-bold'>
                    Frameworks: <span className='font-normal'>React.js, Next.js, TailwindCSS, Flutter, Electron</span>
                </p>
            </div>
        }/>,
        <AboutMeSection title='Backend Technologies' contents={
            <div>
                <p className='font-bold'>
                    Languages: <span className='font-normal'>Java, JavaScript, Python, C++</span>
                </p>
                <p className='font-bold'>
                    Frameworks: <span className='font-normal'>Node.js, Express.js, Flask</span>
                </p>
                <p className='font-bold'>
                    Other Technologies: <span className='font-normal'>Websockets, Selenium, Maven, Gradle, NPM, JSON, Unit Testing</span>
                </p>
                <p className='font-bold'>
                    Data Storage : <span className='font-normal'>SQL and other relational database software, MongoDB / NoSQL,
                    Redis</span>
                </p>
            </div>
        }/>,
        <AboutMeSection title='Operating Systems' contents={
            <div>
                <span className='font-normal'>Windows, MacOS, Linux</span>
            </div>
        }/>
    ]);

    return (
        <div className='h-5/6 text-center background'>
            <div className='text-4xl py-[15%] font-bold text-white' id='about'>
                About Me

                <div className='mt-5 mx-auto w-[min(600px,_80%)] text-lg font-seibold text-gray-200'>
                    I work with a variety of tools, software, and languages across multiple different platforms,
                    and the list is always growing.

                    <br/>
                    
                    I'm always looking to pick up new skills!
                </div>
                <div className='mx-[5%] mt-5 w-[90%] rounded-xl bg-neutral-800'>
                    <div className='md:grid md:grid-cols-3 lg:grid-cols-3'>
                        {sections.map(section => {
                            return <div className='mt-1' key={section.props.title}>{section}</div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}