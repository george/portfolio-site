import * as React from 'react';
import { useState } from 'react';

import { motion, VariantLabels } from 'framer-motion';

import { themeContext } from '../../context/ThemeContext';

export interface AboutMeProps {
    title: string,
    contents: React.ReactElement
}

interface AnimateProps {

    height: string,
    marginBottom: string
}

export const AboutMeSection:React.FC<AboutMeProps> = (props: AboutMeProps) => {
    const [open, setOpen] = useState(false);
    const context = React.useContext(themeContext);

    const animationData: VariantLabels | AnimateProps = {
        height: open ? 'fit-content' : '0px',
        marginBottom: open ? '24px' : '0px'
    };

    return (
        <motion.div animate={open ? 'open' : 'closed'} className='pt-2 pb-5'>
            <button onClick={() => setOpen(!open)} className={`items-center justify-between ${context.primaryObjectColor}`}>
                <motion.div animate={open ? 'open' : 'closed'}>
                    <span className={'text-center text-xl font-medium'}>
                        {props.title}
                    </span>
                    <motion.div initial={false} animate={animationData} className='overflow-hidden'>
                        <div className='text-lg mx-3'>{props.contents}</div>
                    </motion.div>
                </motion.div>
            </button>
        </motion.div>
    );
}