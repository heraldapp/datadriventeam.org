const path = require(`path`);

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  const { type } = node.internal;
  if ((type === `MarkdownRemark` || type === `Mdx`) && node.frontmatter.title) {
    const slug = node.frontmatter.title.toLowerCase().replace(/ /g, '-');
    createNodeField({
      node,
      name: `slug`,
      value: `/${node.frontmatter.section}${
        node.frontmatter.weight % 100 === 0 ? '' : '/' + slug
      }`,
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
    {
      allMarkdownRemark {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `).then((result) => {
    const { allMarkdownRemark: md } = result.data;
    md.nodes.forEach((node) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/Article.tsx`),
        context: {
          slug: node.fields.slug,
        },
      });
    });
  });
};
