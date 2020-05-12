import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { Container } from '~/components/Layout';
import Image from '~/components/Image';
import Bars from '~/icons/Bars';
import * as colors from '~/lib/colors';

export const NAV_HEIGHT = '60px';

interface INavProps {
  isHomepage?: boolean;
  onClickOverflow?: () => void;
}

const Styled = styled.header`
  position: fixed;
  z-index: 50;
  height: ${NAV_HEIGHT};
  width: 100vw;
  top: 0;
  background: ${colors.BLUE_DARK(0.9)};
  .nav__left {
    display: flex;
    align-items: center;
    flex: 1 1 auto;
  }
  .nav__left__overflow {
    display: none;
    flex: 0 0 10px;
    margin-right: 12px;
  }
  .nav__left__herald {
    width: 90px;
  }
  .nav__left__overflow svg {
    fill: ${colors.WHITE()};
  }
  .nav__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .nav__left {
    width: 120px;
    height: calc(100% - 32px);
  }
  .nav__left .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }
  .nav__title {
    height: ${NAV_HEIGHT};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .nav__ddt {
    padding: 8px;
    border: 1px solid ${colors.WHITE(0.2)};
    border-radius: 3px;
    transition: 250ms all;
  }
  .nav__ddt:hover {
    background: ${colors.WHITE(0.1)};
  }
  .nav__ddt label {
    color: ${colors.WHITE()};
  }
  @media screen and (max-width: 600px) {
    .nav__left__overflow {
      display: initial;
    }
    .nav__left__herald {
      width: 80px;
    }
  }
`;

const Nav: React.FC<INavProps> = (props) => {
  const { onClickOverflow } = props;
  return (
    <Styled className="nav">
      <Container className="nav__container">
        <div className="nav__left">
          {onClickOverflow && (
            <div className="nav__left__overflow" onClick={onClickOverflow}>
              <Bars />
            </div>
          )}
          <a
            href="https://www.heraldhq.com"
            target="_blank"
            className="nav__left__herald"
          >
            <Image
              src="logos/herald.png"
              style={{ objectFit: 'contain', objectPosition: 'left' }}
            />
          </a>
        </div>
        <Link to="/" className="nav__ddt">
          <label>Data Driven Team</label>
        </Link>
      </Container>
    </Styled>
  );
};

export default Nav;
