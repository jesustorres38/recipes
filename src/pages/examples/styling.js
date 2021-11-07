import React from "react"
import Layout from "../../components/Layout"
import "../../assets/examples/example-global.css"
import { item3 } from "../../assets/examples/example.module.css"

const styling = () => {
  return (
    <Layout>
      <main className="page">
        <h1>This are the posible options for styling in gatsby</h1>
        <ol>
          <li
            className="item-1"
            style={{ color: "blue", textTramsform: "capitalize" }}
          >
            Inline Style
          </li>
          <li className="item-2">Global CSS</li>
          <li className={item3}>CSS Module</li>
          <li className="item-4">Styled-Components</li>
        </ol>

        <ol>
          <li>La opcion numero 1 es la mas dificil de mantener.</li>
          <li>
            La opcion numero dos tambien es dificil de mantener y al ser un
            archivo generado (igual que todo el proyecto) da igual donde lo
            importes se aplicara sobre todas las paginas, incluso si solo lo
            importas desde un componente que llamas una sola vez. Por lo tanto
            esta opcion no es viable salvo para dar estilos globales. Y aun asi
            si el proyecto es muy grande pueden ocurrir names-colisions, tendras
            que ponerte creativo agregando nombres de clases para diferenciar.
          </li>
          <li>
            La opcion de modulos css esta construida dentro de gatsby, no hace
            falta instalar ni configurar nada. Por cada componente o cada pagina
            podemos crear un modulo de css, la diferencia con importar modulos
            css y archivos tradicionales css es que con los modulos podemos
            importar clases especificas y no nos preocupamos por names-colisions
            ya que modules css agrega un classname unico a cada elemento haciendo
            cada estilo sea unico en cada componente/pagina.
          </li>
        </ol>
      </main>
    </Layout>
  )
}

export default styling
