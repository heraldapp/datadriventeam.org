import React, { useState, useLayoutEffect } from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql, Link } from 'gatsby';

import * as colors from '~/lib/colors';
import Cross from '~/icons/Cross';

interface INavMenuProps {
  onClickClose: () => void;
}

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
  .nav__menu__exit {
    position: absolute;
    top: 0;
    right: 0;
    opacity: 0.5;
    transition: 250ms all;
    display: none;
  }
  .nav__menu__exit:hover {
    opacity: 1;
  }
  .nav__menu__exit svg {
    fill: ${colors.GRAY_3()};
    width: 16px;
    height: 16px;
  }
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
  @media screen and (max-width: 600px) {
    text-align: center;
    .nav__menu__exit {
      display: initial;
    }
    .nav__menu__section {
      margin-top: 32px;
    }
    .nav__menu__section__secondary {
      margin-top: 16px;
    }
    .nav__menu__section label {
      font-size: 18px;
    }
    .nav__menu__section__secondary {
      font-size: 18px;
    }
  }
`;

const NavMenu: React.FC<INavMenuProps> = (props) => {
  const { allMarkdownRemark: data } = useStaticQuery(query);

  const [activeSlug, setActiveSlug] = useState('');

  useLayoutEffect(() => {
    if (window) {
      const { pathname } = window.location;
      const s = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
      setActiveSlug(s);
    }
  }, []);

  return (
    <Styled className="nav__menu">
      <div className="nav__menu__exit" onClick={props.onClickClose}>
        <Cross />
      </div>
      {data.nodes.map((n: any) => (
        <Link
          to={n.fields.slug}
          key={n.id}
          className={n.fields.slug === activeSlug ? 'active' : 'inactive'}
        >
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
