import * as React from 'react';

interface SkillSetProps {

    name: string,
    skills: string[]

}
export const SkillSet:React.FC<SkillSetProps> = (props: SkillSetProps) => {
    return (
        <div className='font-normal text-base list-disc list-inside'>
            <p className='font-bold mt-3'>{props.name}</p>

            <ul className='font-normal text-base list-disc list-inside'>
                {props.skills.map((skill) => {
                    return <li key={skill.split(' ')[0].toLowerCase()}>{skill}</li>
                })}
            </ul>
        </div>
    );
}