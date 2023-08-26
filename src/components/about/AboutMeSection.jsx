import { motion } from "framer-motion";

import { useState } from 'react';

export default function AboutMeSection({ title, contents }) {
    const [open, setOpen] = useState(false);

    const animationData = {
        height: open ? 'fit-content' : '0px',
        marginBottom: open ? '24px' : '0px'
    };

    return (
        <motion.div animate={open ? "open" : "closed"} className='pt-2 pb-5'>
            <button onClick={() => setOpen(!open)} className='items-center justify-between'>
                <motion.div animate={open ? "open" : "closed"}>
                    <span className={'text-center text-xl text-gray-200 font-medium'}>
                        {title}
                    </span>
                    <motion.div initial={false} animate={animationData} className='overflow-hidden text-gray-200'>
                        <div className='text-lg text-gray-200 mx-5'>{contents}</div>
                    </motion.div>
                </motion.div>
            </button>
        </motion.div>
    );
}