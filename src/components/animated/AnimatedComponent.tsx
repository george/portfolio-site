import * as React from 'react';

import { useRef } from 'react';
import {motion } from 'framer-motion';
import { useIsVisible } from '../../hooks/useIsVisible';

interface AnimatedComponentProps {

    time: Number,
    distance: string,
    children: React.ReactElement
}

export const AnimatedComponent:React.FC<AnimatedComponentProps> = (props: AnimatedComponentProps) => {
    const ref = useRef();
    const visible = useIsVisible(ref);

    return (
        // @ts-ignore
        <motion.div ref={ref} animate={visible ? {x: props.distance } : 0 } transition={{ transition: 'ease-in',
            duration: props.time }}>

            <div className={`translate-x-[-${props.distance}]`}>
                {props.children}
            </div>
        </motion.div>
    )
}