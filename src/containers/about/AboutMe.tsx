import * as React from 'react';
import { useState } from 'react';

import { AboutMeSection } from '../../components/about/AboutMeSection';
import { SkillSet } from '../../components/skill/SkillSet';
import { AnimatedComponent } from '../../components/animated/AnimatedComponent';

import { themeContext } from '../../context/ThemeContext';

export const AboutMe:React.FC = () => {
    const context = React.useContext(themeContext);

    const [sections] = useState<React.ReactElement[]>([
        <AboutMeSection title='Who am I' contents={
            <div>
                <p className='font-normal'>
                    I'm an 18 year old software engineer from Texas. I've been coding
                    since 2019, where I started with Java, and I've loved it ever since.
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
                <SkillSet name='Development' skills={[
                    'Frontend web development',
                    'Backend web development',
                    'Mobile app development',
                    'Desktop app development',
                    'Native app development'
                ]}/>
                <SkillSet name='Cloud Computing' skills={[
                    'AWS (ECS, S3, Amplify, RDS, etc)'
                ]}/>
                <SkillSet name='Database Management' skills={[
                    'SQL (MySQL / MSSQL / Postgres)',
                    'MongoDB / NoSQL'
                ]}/>
            </div>
        }/>,
        <AboutMeSection title='Frontend Technologies' contents={
            <div>
                <SkillSet name='Languages / Tools' skills={[
                    'HTML / CSS',
                    'JavaScript',
                    'Dart',
                ]}/>
                <SkillSet name='Frameworks' skills={[
                    'React.js / Next.js',
                    'TailwindCSS',
                    'Electron',
                    'Flutter'
                ]}/>
            </div>
        }/>,
        <AboutMeSection title='Backend Technologies' contents={
            <div>
                <SkillSet name='Languages' skills={[
                    'Java',
                    'JavaScript',
                    'TypeScript',
                    'Python',
                    'C++',
                    'PHP'
                ]}/>
                <SkillSet name='Frameworks' skills={[
                    'Node.js / Express.js',
                    'Flask',
                    'Spring MVC',
                    'Laravel'
                ]}/>
                <SkillSet name='Other Technologies' skills={[
                    'Microservices',
                    'Websockets',
                    'Selenium',
                    'Maven / Gradle'
                ]}/>
                <SkillSet name='Databases / Data Storage' skills={[
                    'MySQL / MariaDB / Postgres',
                    'Microsoft SQL Server',
                    'NoSQL / MongoDB',
                    'Redis'
                ]}/>
            </div>
        }/>,
        <AboutMeSection title='Operating Systems' contents={
            <div className={`${context.primaryTextColor}`}>
                <span className='font-normal'>Windows, MacOS, Linux</span>
            </div>
        }/>
    ]);

    return (
        <div className={`overflow-x-hidden h-5/6 text-center ${context.primaryTextColor} ${context.backgroundColor} background-leaves`}>
            <div className='text-4xl py-[15%] font-bold' id='about'>
                About Me

                <div className={`mt-5 mx-auto w-[min(600px,_80%)] text-lg font-semibold ${context.secondaryTextColor}`}>
                    I work with a variety of tools, software, and languages across multiple different platforms,
                    and the list is always growing.

                    <br/>

                    I'm always looking to pick up new skills!
                </div>

                <AnimatedComponent time={.75} distance={'5%'}>
                    <div className={`mx-[5%] mt-5 w-[90%] rounded-xl ${context.primaryObjectColor} ${context.shadowColor} ${context.secondaryTextColor} shadow-xl`}>
                        <div className='md:grid md:grid-cols-3 lg:grid-cols-3'>
                            {sections.map(section => {
                                return <div className='my-2' key={section.props.title}>{section}</div>
                            })}
                        </div>
                    </div>
                </AnimatedComponent>
            </div>
        </div>
    )
}