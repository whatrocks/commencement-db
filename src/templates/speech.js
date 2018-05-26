import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

export default function Template({ data, children }) {
  const { markdownRemark: post } = data;
  return (
    <div>
      <Helmet
        title={`${post.frontmatter.speaker} at ${post.frontmatter.school} (${
          post.frontmatter.year
        })`}
      />
      <div>
        <h2>
          {`${post.frontmatter.speaker} at ${post.frontmatter.school} (${
            post.frontmatter.year
          })`}
        </h2>
        {post.frontmatter.youtube_id.length ? (
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${
              post.frontmatter.youtube_id
            }?rel=0`}
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
          />
        ) : (
          <span />
        )}
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
        speaker
        school
        year
        youtube_id
      }
    }
  }
`;
