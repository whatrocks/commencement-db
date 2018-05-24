const path = require("path");

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;
  const blogPostTemplate = path.resolve(`src/templates/speech.js`);
  const posts = [];
  // Fetch Markdown posts
  // return graphql(`
  //   {
  //     allMarkdownRemark(
  //       limit: 1000
  //     ) {
  //       edges {
  //         node {
  //           html
  //           id
  //           frontmatter {
  //             year
  //             path
  //             speaker
  //             school
  //           }
  //         }
  //       }
  //     }
  //   }
  // `).then(result => {
  //   if (result.errors) {
  //     return Promise.reject(result.errors);
  //   }
  //   markdownPosts = result.data.allMarkdownRemark.edges;
  //   markdownPosts.forEach(({ node }) => {
  //     createPage({
  //       path: node.frontmatter.path,
  //       component: blogPostTemplate,
  //       context: {}
  //     });
  //   });
  // });
};
