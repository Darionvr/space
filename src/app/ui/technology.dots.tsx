import React from 'react'
import data from '../../lib/data.json'
import Link from 'next/link'
import style from '@/app/Technology.module.css'

type Props = {
    slug: string;
    technology: Array<{ name: string }>; 
};

const TechnologyDots = ({slug, technology} : Props) => {
  return (
     <ul>
            {technology.map((t, i) => (
                <li key={t.name}> <Link className={slug === t.name.replace(/ /g, '_') ? `${style.active}` : ''}  href={`/technology/${t.name.replace(/ /g, '_')}`}> {i + 1} </Link> </li>
            ))}
        </ul>
  )
}

export default TechnologyDots