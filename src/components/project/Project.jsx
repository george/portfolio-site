export default function Project({ name, type, description, link, tools, languageColors }) {
    return (
        <div>
            <div className='mb-[min(120px,_25%)] mx-[5%] py-[max(20px,_2%)] pl-[max(20px,_1%)] h-[50vh] font-bold bg-gray-800 rounded-xl'>
                <div className='text-left text-white'>
                    <p className='font-extrabold text-4xl'>
                        {name}
                    </p>

                    <br/>

                    <div className='font-bold text-lg h-[14vh] mr-[15%]'>
                        {description}

                        <div className='hidden md:block mt-14 font-bold text-xl'>
                            Written using: {tools}

                            <br/>

                            { link != null && <span className='font-normal'>
                                This project can be found <a href={link} className='underline'>here</a>!
                            </span>}
                        </div>
                    </div>

                    <div className='mt-[12vh]'>
                        {languageColors.map((color) => {
                            return (
                                <div key={color} style={{
                                    'background-color': `${color}`
                                }} className={`rounded-full h-6 w-6 inline-block mr-2`}/>
                            )
                        })}
                    </div>

                    <div className='my-2 pb-2 font-semibold text-gray-400 text-lg'>
                        {type} Project
                    </div>
                </div>
            </div>
            <p className='legend'>{name}</p>
        </div>
    )
}