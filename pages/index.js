import Head from 'next/head'
import Link from 'next/link'
import { sanityClient, urlFor } from '../lib/sanity'

const projectsQuery = "*[_type == 'project']{name,_id,slug,image}"

export default function Home({projects}) {
  
  return (
    <div>
      <Head>
        <title>kokonut 🌴</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Welcome to kokonut!</h1>

      <ul className='project-list'>

        {projects?.length > 0 && projects.map((project) => (

        <li key={project._id} className='project-card'>
          <Link href={`/projects/${project.slug.current}`}>
            <a>
              <img src={urlFor(project.image)}/>
              <span>
                {project.name}
              </span>
            </a>
          </Link>
        </li>

        ))}
      </ul>
      
    </div>
  )
}

export async function getStaticProps() {
    const projects = await sanityClient.fetch(projectsQuery)
    return {
      props: { projects }
    }
}