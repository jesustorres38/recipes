import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

function About() {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>I'm baby coloring book poke taxidermy</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adip, Lorem ipsum dolor sit amet, consectetur adip</p>
            <p>Lorem ipsum dolor sit amet, consectetur adip</p>
            <Link to="/contact" className="btn">Contact</Link>
          </article>
          <StaticImage 
            src="../assets/images/about.jpeg" 
            alt="Person Pouring Salt in bowl"
            className="about-img"
            placeholder="blurred"

            >
          </StaticImage>
        </section>
      </main>
      <h1>About Page</h1>
    </Layout>
  )
}

export default About
