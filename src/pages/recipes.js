import React from "react"
import Layout from "../components/Layout"
import AllRecipes from '../components/AllRecipes'
import Seo from "../components/Seo"

function Recipes() {
  return (
    <Layout>
      <Seo title="Recetas" />
      <main className="page">
        <AllRecipes />
      </main>
    </Layout>
  )
}

export default Recipes
