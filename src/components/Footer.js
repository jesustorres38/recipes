import React from 'react'

const Footer = () => {
  return (
    <footer className="page-footer">
      <p>
        &copy; {new Date().getFullYear()}{" "}
        <a href="https://github.com/jesustorres38">Jesus Torres</a>.
        Build with <a href="https://www.gatsbyjs.com/">Gatsby.js</a>
      </p>
    </footer>
  )
}

export default Footer
