export default function NavElement({ displayName, href }) {
    return (
        <li>
            <a href={href} className='hover:text-secondary transition ease-in'>
                {displayName}
            </a>
        </li>
    )
}