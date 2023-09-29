import * as React from 'react';

interface StatisticProps {

    name: string,
    info: string

}

export const Statistic:React.FC<StatisticProps> = (props: StatisticProps) => {
    return (
        <div className='mt-6 font-extrabold text-4xl'>
            {props.info}
            <p className='font-bold text-lg'>{props.name}</p>
        </div>
    )
}