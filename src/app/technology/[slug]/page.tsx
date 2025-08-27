import React from 'react'
import { notFound } from 'next/navigation';
import data from '@/lib/data.json'
import Image from 'next/image';
import Dots from '@/app/ui/technology.dots'
import style from '@/app/Technology.module.css'


const PageTech = async ({ params }: { params: { slug: string } }) => {

    const { slug } = await params;

    const formattedName = slug.replace(/_/g, ' ');

    const tech = data.technology.find(
        (t) => t.name.toLowerCase() === formattedName.toLowerCase());

    if (!tech) return notFound();

    return (
        <article>
            <Dots
                slug={slug} />
            <div>
                <p>The terminology</p>
                <h1>{tech.name}</h1>
                <p>{tech.description} </p>


            </div>
            <div>
                <Image src={tech.images.portrait}
                    alt={`Technology ${tech.name} image`}
                    width={515}
                    height={527} 
                    className={style.squareimage}/>

                <Image src={tech.images.landscape}
                    alt={`Technology ${tech.name} image`}
                    width={768}
                    height={310} 
                    className={style.landscapeimage}/>
            </div>

        </article>
    )
}

export default PageTech