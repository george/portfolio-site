import * as React from 'react';

import { Carousel } from 'react-responsive-carousel/lib/js';

import { Project } from '../../components/project/Project';

import { LanguageColor } from '../../types/LanguageColor';
import { ProjectType } from '../../types/ProjectType';
import { AnimatedComponent } from '../../components/animated/AnimatedComponent';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

export const Projects:React.FC = () => {
    return (
        <div className='overflow-x-hidden text-center background-bubbles'>
            <div className='pt-[15vh] text-4xl font-bold text-white'>
                Projects

                <div className='my-5' id='projects'>
                    <AnimatedComponent time={.75} distance={'5%'}>
                        <Carousel>
                            <Project name='Hostile' description='The most powerful OSINT and personal online protection site, offering
                            powerful data protection services, a browser extension protecting against spam and malware, while also
                            providing a password and 2FA manager, a blazing fast OSINT tool, and an enterprise API.'
                                     tools='Express.js, Flask, Next.js, MongoDB, Redis, and AWS'
                                     link='https://hostile.org'
                                     type={ProjectType.TechStartup}
                                     languages={[
                                         LanguageColor.Javascript,
                                         LanguageColor.Typescript,
                                         LanguageColor.Python,
                                         LanguageColor.Java
                                     ]}/>
                            <Project name='Blind' description='The ideal dating app for people who put personality first. Meet
                            your match before showing your face, determined based off of common interests and user preferences.'
                                     tools='Express.js, Flutter'
                                     link='https://meetblind.dating'
                                     type={ProjectType.General}
                                     languages={[
                                         LanguageColor.Javascript,
                                         LanguageColor.Typescript,
                                         LanguageColor.Dart,
                                     ]}/>
                            <Project name='Notifier Service' description='A Windows service-level application used in production
                            to notify patients about their next appointments two days before scheduled, increasing patient retention.'
                                     type={ProjectType.Production}
                                     tools='Windows API, Sybase / Microsoft SQL Server'
                                     languages={[
                                         LanguageColor.CPlusPlus
                                     ]}/>
                            <Project name='Daily Wordle' description='An open-source cross-platform mobile application to
                            play the daily "Wordle" from the New York Times using their API, while also keeping track of
                            streaks and other data.'
                                     type={ProjectType.OpenSource}
                                     tools='Flutter'
                                     languages={[
                                         LanguageColor.Dart
                                     ]}/>
                            <Project name='MSA Exploit Checker' description='A Flask Rest API and utility bot that checks if
                            a Microsoft account has a FIDO enabled device attached to it, allowing the owner of the device to
                            regain access to the account at any time through a method simply named "The Exploit".'
                                     type={ProjectType.OpenSource}
                                     link='https://github.com/george/msa-exploit-checker'
                                     tools='Flask'
                                     languages={[
                                         LanguageColor.Python
                                     ]}/>
                            <Project name='Java Native Study' description='A study performed to measure the effects
                            and performance impacts of natively obfuscating a Java application. This research showed that, while
                            performance was significantly decreased in almost all categories, IO performance was significantly
                            improved when done through native JNI calls.'
                                     type={ProjectType.OpenSourceStudy}
                                     link='https://github.com/george/java-native-obfuscation-study'
                                     tools='Java Native Obfuscation'
                                     languages={[
                                         LanguageColor.Java
                                     ]}/>
                            <Project name='URL Shortener' description='A simple and basic URL shortener, with a Flask Rest API
                            that uses MongoDB to store shortened URLs.'
                                     type={ProjectType.OpenSource}
                                     link='https://github.com/george/url-shortener'
                                     tools='Flask, MongoDB'
                                     languages={[
                                         LanguageColor.Python
                                     ]}/>
                        </Carousel>
                    </AnimatedComponent>
                </div>
            </div>
        </div>
    )
}