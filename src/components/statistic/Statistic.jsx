export default function Statistic({ name, info }) {
    return (
        <div className='mt-6 font-extrabold text-4xl text-white'>
            {info}
            <p className='font-bold text-lg'>{name}</p>
        </div>
    )
}