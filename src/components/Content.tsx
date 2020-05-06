import styled from 'styled-components';

import * as colors from '~/lib/colors';

export default styled.div`
  p {
    font-size: 1.2rem;
    line-height: 2rem;
    margin-bottom: 1.2rem;
    font-family: adobe-caslon-pro, Georgia, 'Times New Roman', Times, serif;
    color: ${colors.GRAY_4()};
  }
  a,
  li {
    font-family: adobe-caslon-pro, Georgia, 'Times New Roman', Times, serif;
    font-size: 1.2rem;
    line-height: 2rem;
    color: ${colors.GRAY_4()};
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 1rem 0;
    color: ${colors.GRAY_4()};
  }
  h1 {
    font-size: 2rem;
    line-height: 2.2rem;
    margin-top: 3rem;
    &:first-child {
      margin-top: 0;
    }
  }
  h2 {
    font-size: 1.5rem;
    line-height: 2rem;
  }
  h3 {
    font-size: 1rem;
    line-height: 1.2rem;
  }
  h4 {
    font-size: 0.9rem;
    line-height: 1.1rem;
  }
  h5 {
    font-size: 0.8rem;
    line-height: 1rem;
  }
  ul {
    margin-bottom: 1.2rem;
  }
  li {
    list-style-type: disc;
    margin-left: 1rem;
  }
  li p {
    margin-bottom: 0.5rem;
  }
  blockquote,
  .hint {
    margin: 48px 0;
    background: ${colors.GRAY_2(0.5)};
    border-left: 4px solid ${colors.PURPLE_DARK()};
    border-radius: 3px;
    overflow: hidden;
    padding: 24px;
  }
  .hint p,
  .hint a,
  blockquote p,
  blockquote a {
    font-size: 18px;
    line-height: 26px;
    margin: 0;
    opacity: 0.8;
    font-family: neuzeit-grotesk, sans-serif;
    margin-bottom: 16px;
    color: ${colors.PURPLE_DARK()};
  }
  .hint a,
  blockquote a {
    text-decoration: underline;
  }
  blockquote p:first-child {
    opacity: 1;
  }
  .hint p:last-child,
  blockquote p:last-child {
    margin: 0;
  }
  figure {
    margin: 2rem 0;
    width: 100%;
    background: ${colors.GRAY_2(0.5)};
    padding: 2rem;
    display: flex;
    flex-flow: column;
    border-radius: 3px;
  }
  figure img {
    width: 100%;
    margin-bottom: 2rem;
    box-shadow: 0 0 30px ${colors.BLACK(0.1)};
  }
  figure figcaption {
    width: 100%;
    color: ${colors.GRAY_3()};
    font-size: 1rem;
    text-align: center;
  }
  .grid {
    display: grid;
    grid-gap: 24px;
    margin: 24px 0;
    padding: 24px;
    background: ${colors.GRAY_2(0.8)};
    border-radius: 5px;
  }
  .grid-2 {
    grid-template-columns: 1fr 1fr;
  }
  .grid > * {
    padding: 16px;
    background: ${colors.WHITE()};
    border-radius: 5px;
    box-shadow: 0 0 30px ${colors.BLACK(0.1)};
  }
  .grid a {
    transition: 250ms all;
  }
  .grid a:hover {
    transform: translateY(-10px);
  }
  .grid {
    p,
    h1,
    h2,
    h3 {
      font-family: neuzeit-grotesk, sans-serif;
    }
  }
  .grid p {
    font-size: 16px;
    line-height: 24px;
  }
  .grid p:last-child {
    margin: 0;
  }
  .grid h2,
  .grid h3 {
    margin: 0;
    margin-bottom: 8px;
  }
  .hint {
    display: flex;
    align-items: center;
    border-left: 4px solid ${colors.BLUE_LIGHT()};
    background: ${colors.BLUE_LIGHT(0.1)};
  }
  .hint p {
    color: ${colors.BLUE_LIGHT()};
  }
  .hint:before {
    content: '💡';
    display: block;
    margin-right: 16px;
    font-size: 24px;
  }
  @media screen and (max-width: 800px) {
    h1 {
      font-size: 2.5rem;
      line-height: 3rem;
    }
    h2 {
      font-size: 2rem;
      line-height: 2.5rem;
    }
    h3 {
      font-size: 1.75rem;
      line-height: 2rem;
    }
    h4,
    h5 {
      font-size: 1.5rem;
      line-height: 1.5rem;
    }
    p,
    li {
      font-size: 1.75rem;
      line-height: 2.5rem;
      margin-bottom: 1rem;
    }
    li {
      margin-bottom: 0rem;
      margin-left: 2rem;
    }
    figure {
      margin: 2rem -2rem;
      width: 100vw;
      padding: 2rem 1rem;
    }
    .grid {
      margin: 24px -24px;
      border-radius: 0;
      width: 100vw;
    }
    .grid-2 {
      grid-template-columns: 1fr;
    }
  }
`;
