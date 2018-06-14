import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.2rem',
    }}
  >
    <div
      style={{
        margin: '0',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
     {/* <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        > 
          {siteTitle}
        </Link>
      </h1> */}
      <ul>
      <li className = "nav" ><Link className = "nav" to="/">Home</Link></li>
      <li className = "nav" ><Link className = "nav" to="/news/">News</Link></li>
      <li className = "nav" ><Link className = "nav" to="/about/">About</Link></li>
      <li className = "nav" ><Link className = "nav" to="/page-3/">Activism</Link></li>
      </ul>
    </div>
  </div>
)

export default Header
