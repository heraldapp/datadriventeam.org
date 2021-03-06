import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import rehypeReact from 'rehype-react';
import { graphql } from 'gatsby';

import Page from '~/components/Layout';
import Content from '~/components/Content';
import Menu from '~/components/NavMenu';
import Next from '~/components/NavNext';
import Sharing from '~/components/SharingTools';
import EmailInput from '~/components/EmailInput';
import ProcessFunnel, { PROCESS_SECTIONS } from '~/components/ProcessFunnel';

import SECTIONS from '~/lib/sections';
import { NAV_HEIGHT } from '~/components/Nav';

import * as colors from '~/lib/colors';

const Styled = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr minmax(600px, 1024px) 1fr;
  align-items: flex-start;
  .article__main__header {
    padding: 48px;
    padding-top: calc(${NAV_HEIGHT} + 30px);
    height: 400px;
    overflow: hidden;
    position: relative;
  }
  .article__main__header__text {
    width: 50%;
    margin-top: 32px;
  }
  .article__main__header__text__title,
  .article__main__header__text__description {
    color: ${colors.WHITE()};
    z-index: 1;
    position: relative;
  }
  .article__main__header__text__title {
    font-size: 32px;
    margin-bottom: 8px;
  }
  .article__main__header__illustration {
    position: absolute;
    right: -40px;
    top: -${NAV_HEIGHT};
    width: 500px;
    height: 500px;
  }
  .article__main__header__illustration svg {
    width: 100%;
    height: 100%;
  }
  .article__left,
  .article__right {
    flex: 1 1 auto;
    height: 100%;
  }
  .article__right__header {
    height: 400px;
    width: 100%;
  }
  .article__left {
    background: ${colors.GRAY_2(0.5)};
  }
  .article__middle {
    width: 100%;
    max-width: 1024px;
    display: grid;
    grid-template-columns: 240px auto;
    min-height: 100%;
  }
  .article__nav {
    padding: 48px;
    background: ${colors.GRAY_2(0.5)};
    height: 100%;
    display: flex;
    flex-flow: column;
  }
  .article__nav__container {
    position: fixed;
    margin-top: 24px;
  }
  .article__fixed {
    position: fixed;
    bottom: 32px;
    left: 32px;
    width: 400px;
  }
  .article__fixed__email__title {
    color: ${colors.GRAY_3()};
    margin-bottom: 16px;
    line-height: 24px;
  }
  .article__fixed__sharing {
    position: fixed;
    right: 32px;
    bottom: 32px;
    padding: 16px;
    text-align: center;
    background: ${colors.WHITE()};
    box-shadow: 0 0 30px ${colors.BLACK(0.1)};
    border-radius: 3px;
  }
  .article__main__content {
    padding: 48px;
  }
  @media screen and (max-width: 1280px) {
    .article__fixed {
      bottom: 0;
      left: 0;
      width: 100vw;
      padding: 16px;
      background: ${colors.WHITE(0.8)};
      z-index: 3;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .article__fixed__email {
      flex: 1 1 auto;
    }
    .article__fixed__email .email-input {
      margin: 0;
    }
    .article__fixed__sharing {
      flex: 0 0 100px;
      position: initial;
      background: none;
      box-shadow: none;
      padding: 0;
      margin-left: 16px;
    }
    .article__fixed__email__title {
      display: none;
    }
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    .article__middle {
      grid-template-columns: 100vw;
    }
    .article__left,
    .article__right {
      display: none;
    }
    .article__nav {
      display: none;
    }
    .article__nav--open {
      display: initial;
      padding: 24px;
      position: fixed;
      width: 100vw;
      height: 100vh;
      background: ${colors.WHITE()};
      z-index: 101;
    }
    .article__nav__container {
      margin: 0;
      width: calc(100% - 48px);
    }
    .article__main__header {
      padding-left: 24px;
      padding-right: 24px;
    }
    .article__main__header__text {
      position: relative;
      width: 100%;
      z-index: 2;
    }
    .article__main__header__text__description {
      font-size: 16px;
    }
    .article__main__header__illustration {
      opacity: 0.2;
    }
    .article__main__content {
      padding: 24px;
    }
  }
`;

interface IQueryData {
  markdownRemark: {
    fields: { slug: string };
    frontmatter: {
      title: string;
      section: string;
      short: string;
    };
    html: any;
    htmlAst: any;
  };
}

const components: { [key: string]: React.FC } = {
  'process-funnel': ProcessFunnel,
};
Object.keys(PROCESS_SECTIONS).forEach((s) => {
  components[`process-funnel-${s}`] = () => <ProcessFunnel step={s} />;
});

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components,
}).Compiler;

const Article: React.FC<{ data: IQueryData }> = (props) => {
  const {
    fields: { slug },
    htmlAst,
    frontmatter: { section: s, title },
  } = props.data.markdownRemark;

  const section = useMemo(() => SECTIONS[s], [s]);
  const [navOpen, setNavOpen] = useState(false);

  return (
    <Page title={title} onClickOverflow={() => setNavOpen(true)}>
      <Styled className="article">
        <div className="article__fixed">
          <div className="article__fixed__email">
            <h5 className="article__fixed__email__title">
              Get updated when we post
              <br />
              new interviews, stories, and tips.
            </h5>
            <EmailInput />
          </div>
          <div className="article__fixed__sharing">
            <Sharing slug={slug} title={title} />
          </div>
        </div>
        <div className="article__left" />
        <div className="article__middle">
          <div
            className={`article__nav article__nav--${
              navOpen ? 'open' : 'closed'
            }`}
          >
            <div className="article__nav__container">
              <Menu onClickClose={() => setNavOpen(false)} />
            </div>
          </div>
          <div className="article__main">
            <div
              className="article__main__header"
              style={{ backgroundColor: colors[section.color]() }}
            >
              <div className="article__main__header__text">
                <h2 className="article__main__header__text__title">
                  {section.title}
                </h2>
                <p className="article__main__header__text__description">
                  {section.description}
                </p>
              </div>
              <div className="article__main__header__illustration">
                <section.illustration />
              </div>
            </div>
            <div className="article__main__content">
              <Content>{renderAst(htmlAst)}</Content>
              <div className="article__main__next">
                <Next slug={slug} />
              </div>
            </div>
          </div>
        </div>

        <div className="article__right">
          <div
            className="article__right__header"
            style={{ backgroundColor: colors[section.color]() }}
          />
        </div>
      </Styled>
    </Page>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        section
        short
      }
      htmlAst
    }
  }
`;

export default Article;
