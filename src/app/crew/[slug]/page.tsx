import React from 'react'
import { notFound } from 'next/navigation';
import data from '@/lib/data.json'
import Dots from '@/app/ui/crew.dots'

const CrewPage = async ({ params }: { params: { slug: string } }) => {

    const { slug } = await params;

    const formattedName = slug.replace(/_/g, ' ');

    const crewMember = data.crew.find(
        (member) => member.name.toLowerCase() === formattedName.toLowerCase()
    );

    if (!crewMember) return notFound();

    return (
        <article>
            <div>
                <p>{crewMember.role}</p>
                <h1>{crewMember.name}</h1>
                <p>{crewMember.bio} </p>
                <Dots
                slug={slug}/>

            </div>
            <div>
                <img src={crewMember.images.webp}
                    alt={`Crew ${crewMember.name} image`}/>
            </div>

        </article>
    )
}

export default CrewPage