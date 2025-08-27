import React from 'react'
import data from '../../lib/data.json'
import Link from 'next/link'
import style from '@/app/Technology.module.css'

const TechnologyDots = ({slug} : {slug: string}) => {
  return (
     <ul>
            {data.technology.map((t, i) => (
                <li key={t.name}> <Link className={slug === t.name.replace(/ /g, '_') ? `${style.active}` : ''}  href={`/technology/${t.name.replace(/ /g, '_')}`}> {i + 1} </Link> </li>
            ))}
        </ul>
  )
}

export default TechnologyDots