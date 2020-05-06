import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import * as colors from '~/lib/colors';

export const NAV_HEIGHT = '60px';

interface INavProps {
  isHomepage?: boolean;
}

const Styled = styled.article`
  position: fixed;
  z-index: 50;
  height: ${NAV_HEIGHT};
  width: 100vw;
  top: 0;
  text-align: center;
  align-items: center;
  .nav__title {
    height: calc(${NAV_HEIGHT} - 16px);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background: ${colors.BLUE_DARK(0.3)};
    width: fit-content;
    padding: 0 16px;
    margin: 8px auto;
    border-radius: 5px;
  }
  .nav__title label {
    color: ${colors.WHITE()};
  }
  .nav__divider {
    margin: auto;
    height: 1px;
    width: 80px;
    background: ${colors.WHITE()};
    opacity: 0.5;
  }
`;

const Nav: React.FC<INavProps> = (props) => {
  const { isHomepage } = props;
  return (
    <Styled className="nav">
      <div className="nav__title">
        {isHomepage ? (
          <a href="https://www.heraldhq.com" target="_blank">
            <label>A Guide from Herald</label>
          </a>
        ) : (
          <Link to="/">
            <label>Data Driven Team</label>
          </Link>
        )}
      </div>
    </Styled>
  );
};

export default Nav;
