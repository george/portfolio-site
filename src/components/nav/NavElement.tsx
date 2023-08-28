import * as React from 'react';

interface NavElementProps {

    displayName: string,
    href: string,

}

export const NavElement:React.FC<NavElementProps> = (props: NavElementProps) => {
    return (
        <li>
            <a href={props.href} className='hover:text-secondary transition ease-in'>
                {props.displayName}
            </a>
        </li>
    )
}