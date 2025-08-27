import React from 'react'
import data from '@/lib/data.json'
import Image from 'next/image'
import DestinationNav from '@/app/ui/destinations.nav'
import { notFound } from 'next/navigation';

const PlanetPage = async ({ params }: { params: { slug: string } }) => {

    const { destinations } = data;
    const { slug } = await params;
    const destination = destinations.find(
        (d) => d.name.toLowerCase() === slug
    );

    if (!destination) return notFound();

    return (
        <article>
            <div>
                <Image src={destination.images.png}
                    alt={`Planet ${destination.name} image`}
                    width={445}
                    height={445} />
            </div>
            <div>
                <DestinationNav
                    slug={slug} 
                    destinations={destinations}/>
                <h1>
                    {destination.name}
                </h1>
                <p>
                    {destination.description}
                </p>
                <hr />
                <div>
                    <p>Avg. distance <span>{destination.distance} </span></p>
                    <p> Est. travel time <span>{destination.travel}</span></p>
                </div>
            </div>
        </article>

    )
}

export default PlanetPage