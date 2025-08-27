import React from 'react'
import Link from 'next/link'
import style from '@/app/Destinations.module.css'

type Props = {
    slug: string;
    destinations: Array<{ name: string }>; 
};

const DestinationNav = ({ slug, destinations }: Props) => {

    return (
        <ul>
            {destinations.map((d) => (
                <li key={d.name} > <Link href={`/destinations/${d.name.toLowerCase()}`}> <button className={slug === d.name.toLowerCase() ? `${style.active}` : ''}>{d.name}</button> </Link> </li>
            ))}
        </ul>
    )
}
export default DestinationNav 