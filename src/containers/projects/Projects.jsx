import {Carousel} from "react-responsive-carousel";

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Project from "../../components/project/Project";

const LanguageColors = {
    JAVA: '#b07219',
    C_PLUS_PLUS: '#f34b7d',
    PYTHON: '#3572a5',
    JAVASCRIPT: '#f1e05a',
    DART: '#00B4AB'
};

export default function Projects() {
    return (
        <div className='text-center bubbles-background'>
            <div className='pt-[15vh] text-4xl font-bold text-white'>
                Projects

                <div className='my-5'>
                    <Carousel>
                        <Project name='Hostile' description="The most powerful OSINT and personal online protection site, offering
                        powerful data protection services, a browser extension protecting against spam and malware, while also
                        providing a password and 2FA manager, a blazing fast OSINT tool, and an enterprise API."
                                 tools='Express.js, Flask, Next.js, MongoDB, Redis, and AWS'
                                 link='https://hostile.org'
                                 type='Tech Startup'
                                 languageColors={[LanguageColors.JAVASCRIPT, LanguageColors.PYTHON]}/>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}