import React, { CSSProperties } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

interface IProps {
  src: string;
  style?: CSSProperties;
  alt?: string;
}

const query = graphql`
  query GetAllImagesQuery {
    images: allFile(filter: { extension: { regex: "/jpeg|jpg|png|gif/" } }) {
      edges {
        node {
          extension
          relativePath
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

const Image: React.FC<IProps> = (props) => {
  const data = useStaticQuery(query);
  const img = data.images.edges.find(
    (edge: any) => edge.node.relativePath === props.src
  );
  return img ? (
    <Img
      fluid={img.node.childImageSharp.fluid}
      imgStyle={props.style}
      objectFit="contain"
    />
  ) : (
    <Img
      fluid={data.images.edges[0].node.childImageSharp.fluid}
      imgStyle={props.style}
      alt={props.alt}
    />
  );
};

export default Image;
