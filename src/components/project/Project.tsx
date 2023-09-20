import * as React from 'react';

import { LanguageColor } from '../../types/LanguageColor';
import { ProjectType } from '../../types/ProjectType';

export interface ProjectProps {

    name: string,
    type: ProjectType,
    description: string,
    link?: string,
    tools: string,
    languages: LanguageColor[]
}

export const Project: React.FC<ProjectProps> = (props: ProjectProps) => {
    return (
        <div>
            <div className='mb-[min(120px,_25%)] mx-[5%] py-[max(20px,_2%)] pl-[max(20px,_1%)]
            h-[55vh] md:h-[50vh] font-bold bg-gray-800 rounded-xl'>
                <div className='text-left text-white'>
                    <p className='font-extrabold text-3xl'>
                        {props.name}
                    </p>

                    <br/>

                    <div className='font-bold text-base h-[14vh] mr-[15%]'>
                        {props.description}

                        <div className='hidden md:block mt-14 font-bold text-lg'>
                            Written using: {props.tools}

                            <br/>

                            { props.link != null && <span className='font-normal'>
                                This project can be found <a href={props.link} className='underline'>here</a>!
                            </span>}
                        </div>
                    </div>

                    <div className='mt-[17vh] md:mt-[12vh]'>
                        {props.languages.map((color) => {
                            return (
                                <div key={color} style={{backgroundColor: color}} className={`rounded-full h-6 w-6 inline-block mr-2`}/>
                            )
                        })}
                    </div>

                    <div className='my-2 pb-2 font-semibold text-gray-400 text-lg'>
                        {props.type}
                    </div>
                </div>
            </div>
            <p className='legend'>{props.name}</p>
        </div>
    )
}