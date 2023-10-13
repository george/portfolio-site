import * as React from 'react';

import { LanguageColor } from '../../types/LanguageColor';
import { ProjectType } from '../../types/ProjectType';

import { themeContext } from '../../context/ThemeContext';
export interface ProjectProps {

    name: string,
    type: ProjectType,
    description: string,
    link?: string,
    tools: string,
    languages: LanguageColor[]
}

export const Project:React.FC<ProjectProps> = (props: ProjectProps) => {
    const context = React.useContext(themeContext);

    return (
        <div className={`mb-[min(120px,_25%)] mx-[5%] lg:mx-[15%] py-[max(20px,_2%)] pl-[max(20px,_1%)] ${context.primaryObjectColor} 
        rounded-xl shadow-xl ${context.shadowColor}`}>
            <div className={`${context.secondaryTextColor} min-h-[55vh] md:min-h-[50vh]`}>
                <p className={`${context.primaryTextColor} font-extrabold text-3xl`}>
                    {props.name}
                </p>

                <br/>

                <div className='font-bold text-base min-h-[14vh] mx-[5%]'>
                    {props.description}

                    <div className='hidden md:block mt-14 font-bold text-lg'>
                        Written using: {props.tools}

                        <br/>

                        { props.link != null && <span className='font-normal'>
                            This project can be found <a href={props.link} className='underline'>here</a>!
                        </span>}
                    </div>
                </div>

                <div className='mt-[8vh] md:mt-[12vh]'>
                    {props.languages.map((color) => {
                        return (
                            <div key={color} style={{backgroundColor: color}} className={`rounded-full h-6 w-6 inline-block mr-2`}/>
                        )
                    })}
                </div>

                <div className={`my-2 pb-2 font-semibold ${context.secondaryTextColor} text-lg`}>
                    {props.type}
                </div>
            </div>
        </div>
    )
}