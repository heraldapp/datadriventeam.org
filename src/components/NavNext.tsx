import React, { useMemo } from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql, Link } from 'gatsby';

import * as colors from '~/lib/colors';
import Arrow from '~/icons/Arrow';

interface IMarkdownNode {
  fields: { slug: string };
  frontmatter: { title: string };
}

interface INavNextProps {
  slug: string;
}

interface IQuery {
  allMarkdownRemark: { nodes: IMarkdownNode[] };
}

const query = graphql`
  query NavNextQuery {
    allMarkdownRemark(sort: { fields: frontmatter___weight }) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
        }
      }
    }
  }
`;

const Styled = styled.div`
  display: flex;
  justify-content: space-between;
  .next__direction {
    display: flex;
    align-items: center;
    max-width: 50%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .next__direction svg {
    fill: ${colors.PURPLE_LIGHT()};
    transition: 250ms all;
  }
  .next__direction--prev svg {
    margin-right: 8px;
    transform: rotate(180deg);
  }
  .next__direction--prev:hover svg {
    transform: rotate(180deg) translateX(10px);
  }
  .next__direction--next {
    text-align: right;
  }
  .next__direction--next svg {
    margin-left: 8px;
  }
  .next__direction--next:hover svg {
    transform: translateX(10px);
  }
  @media screen and (max-width: 800px) {
    padding-bottom: 64px;
    .next__direction {
      white-space: initial;
    }
  }
`;

const NavNext: React.FC<INavNextProps> = (props) => {
  const { slug } = props;
  const { allMarkdownRemark: data } = useStaticQuery<IQuery>(query);

  const { prev, next } = useMemo(() => {
    const i = data.nodes.findIndex((n) => n.fields.slug === slug);
    if (i < 0) {
      return { prev: undefined, next: undefined };
    }
    return { prev: data.nodes[i - 1], next: data.nodes[i + 1] };
  }, [slug]);

  return (
    <Styled className="next">
      {prev ? (
        <Link
          to={prev.fields.slug}
          className="next__direction next__direction--prev"
        >
          <Arrow />
          <strong>{prev.frontmatter.title}</strong>
        </Link>
      ) : (
        <div className="next__spacer" />
      )}
      {next ? (
        <Link
          to={next.fields.slug}
          className="next__direction next__direction--next"
        >
          <strong>{next.frontmatter.title}</strong>
          <Arrow />
        </Link>
      ) : (
        <div className="next__spacer" />
      )}
    </Styled>
  );
};

export default NavNext;
