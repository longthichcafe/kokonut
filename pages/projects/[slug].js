import { useState } from "react";
import { sanityClient, urlFor, usePreviewSubscription, PortableText } from "../../lib/sanity";

const projectQuery = `*[_type == "project" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    image,
    more_info,
    duration,
    language
}`

export default function OneProject({data}) {

    const {project} = data

    return (

        <article>

            <h1>{project.name}</h1>

            <main>
                <img src={urlFor(project?.image).url()}/>
                <div>
                    <ul>
                        {project.information?.map((information) => (
                            <li key={information}>
                                
                            </li>
                    
                        
                        ))}
                    </ul>
                </div>
                <h3> Languages: </h3>
                <h4>{project.language}</h4>
                <h3> Description: </h3>
                <h4>{project.more_info}</h4>
                <h4>{project.duration}</h4>
            </main>
              

        </article>
    )
}

export async function getStaticPaths() {
    const paths = await sanityClient.fetch(
        `*[_type == "project" && defined(slug.current)] {
            "params": {
                "slug": slug.current 
            }
        }`
    )
    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps({ params }) {
    const { slug } = params
    const project = await sanityClient.fetch(projectQuery, {slug})
    return { 
        props: { data: {project} } 
    }
}   