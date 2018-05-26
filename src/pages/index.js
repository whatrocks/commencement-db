import React from 'react'
import Link from 'gatsby-link'

export default function Index({ data }) {
  const { edges: mdPosts } = data.allMarkdownRemark;
  return (
    <div>
      <div style={{ marginTop: "1rem" }}>
        {mdPosts
          .map(({ node: post }, i) => {
            return (
              <div key={i} style={{ marginBottom: "0.75rem" }}>
                <Link to={post.frontmatter.path}>
                  <div>
                    <span style={{ fontSize: "1.2rem" }}>
                      {`${post.frontmatter.speaker} at ${post.frontmatter.school} (${post.frontmatter.year})`}
                    </span>
                  </div>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___year] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            path
            year
            speaker
            school
          }
        }
      }
    }
  }
`;