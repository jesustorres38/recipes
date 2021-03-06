import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"
import RecipesList from "../components/RecipesList"
import Seo from "../components/Seo"

function About({ data }) {
  const recipes = data.allContentfulRecipe.nodes

  return (
    <Layout>
      <Seo title="About" description="Esta description es unica" />
      <main className="page">
        <section className="about-page">
          <article>
            <h2>
              “Si quieres cambiar el mundo, empieza por cambiar tú primero”
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adip, Lorem ipsum dolor
              sit amet, consectetur adip
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adip</p>
            <Link to="/contact" className="btn">
              Contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="Person Pouring Salt in bowl"
            className="about-img"
            placeholder="blurred"
          ></StaticImage>
        </section>
        <section className="featured-recipes">
          <h5>There is also vegetarian recipes!</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        prepTime
        cookTime
        slug
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

export default About
