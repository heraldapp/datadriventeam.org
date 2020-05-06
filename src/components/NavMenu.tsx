import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql, Link } from 'gatsby';

import * as colors from '~/lib/colors';

const query = graphql`
  query NavQuery {
    allMarkdownRemark(sort: { fields: frontmatter___weight }) {
      nodes {
        id
        fields {
          slug
        }
        frontmatter {
          weight
          short
        }
      }
    }
  }
`;

const Styled = styled.div`
  position: fixed;
  width: 100%;
  margin-top: 24px;
  .nav__menu__section {
    margin-top: 24px;
  }
  .nav__menu__section label {
    color: ${colors.GRAY_4()};
    opacity: 0.7;
    transition: 250ms all;
    cursor: pointer;
  }
  .active .nav__menu__section label {
    color: ${colors.PURPLE_LIGHT()};
    opacity: 1;
  }
  .nav__menu__section__secondary {
    margin-top: 8px;
    font-size: 14px;
    font-weight: normal;
    color: ${colors.GRAY_4()};
    opacity: 0.6;
    transition: 250ms all;
    cursor: pointer;
  }
  .active .nav__menu__section__secondary {
    color: ${colors.PURPLE_LIGHT()};
    opacity: 1;
  }
  .nav__menu__section label:hover,
  .nav__menu__section__secondary:hover {
    opacity: 1;
  }
`;

const NavMenu: React.FC = () => {
  const { allMarkdownRemark: data } = useStaticQuery(query);
  return (
    <Styled className="nav__menu">
      {data.nodes.map((n) => (
        <Link to={n.fields.slug} activeClassName="active" key={n.id}>
          {n.frontmatter.weight % 100 === 0 ? (
            <div className="nav__menu__section">
              <label>{n.frontmatter.short}</label>
            </div>
          ) : (
            <div className="nav__menu__section__secondary">
              {n.frontmatter.short}
            </div>
          )}
        </Link>
      ))}
    </Styled>
  );
};

export default NavMenu;
