import React from 'react'
import data from '../../lib/data.json'
import Link from 'next/link'
import style from '@/app/Crew.module.css'

type Props = {
    slug: string;
    crew: Array<{ name: string }>; 
};

const CrewDots = ({slug, crew} : Props) => {
    return (
        <ul>
            {crew.map((c) => (
                <li key={c.name}> <Link className={slug === c.name.replace(/ /g, '_') ? `${style.active}` : ''} href={`/crew/${c.name.replace(/ /g, '_')}`}>  </Link> </li>
            ))}
        </ul>
    )
}

export default CrewDots