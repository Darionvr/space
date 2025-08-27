import React from 'react'
import data from '../../lib/data.json'
import Link from 'next/link'
import style from '@/app/Destinations.module.css'

const DestinationNav = ({slug} : {slug: string}) => {

    return (
        <ul>
            {data.destinations.map((d) => (
                <li key={d.name} > <Link href={`/destinations/${d.name.toLowerCase()}`}> <button className={slug === d.name.toLowerCase() ? `${style.active}` : ''}>{d.name}</button> </Link> </li>
            ))}
        </ul>
    )
}
export default DestinationNav 