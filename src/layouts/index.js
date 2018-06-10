import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import './index.css'

const Layout = ({ children, data }) => {
  return (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      link={[{ rel: "shortcut icon", href: "/img/favicon.ico" }]}
      meta={[
        { name: 'description', content: 'Commencement address database' },
        { name: 'keywords', content: 'commencement address, commencement speech, university, college, graduation' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
