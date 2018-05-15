import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

export default function Template({ data, children }) {
  const { markdownRemark: post } = data;
  return (
    <div>
      <Helmet
        title={`${post.frontmatter.name} - ${post.frontmatter.school}: ${post.frontmatter.year}`}
      />
      <div>
        <h2>
            {`${post.frontmatter.name} - ${post.frontmatter.school}: ${post.frontmatter.year}`}
        </h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <div
          className="blog-post-content"
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "768px"
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        name
        school
        year
      }
    }
  }
`;