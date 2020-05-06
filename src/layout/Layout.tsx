import React from 'react';
import styled from 'styled-components';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useStaticQuery, graphql } from 'gatsby';

import Icon from '~/images/favicon.png';
import GlobalStyle from '~/components/GlobalStyle';
import Nav from '~/components/Nav';

interface IQuery {
  site: {
    siteMetadata: ISiteMetadata;
  };
}

interface IProps {
  title?: string;
  description?: string;
  isHomepage?: boolean;
}

const query = graphql`
  query {
    site {
      siteMetadata {
        title
        twitterHandle
      }
    }
  }
`;

export const Container = styled.div`
  margin: auto;
  width: 100%;
  padding: 0 32px;
  height: 100%;
  max-width: 1024px;
  @media screen and (max-width: 600px) {
    padding: 0 16px;
  }
`;

interface IProps {
  promo?: JSX.Element;
  title?: string;
  description?: string;
  image?: string;
  style?: React.CSSProperties;
}

const Main = styled.main`
  min-height: calc(100vh - 14rem);
`;

const Layout: React.FC<IProps> = (props) => {
  const data: IQuery = useStaticQuery(query);

  const { description, isHomepage } = props;
  const { title: appName, twitterHandle } = data.site.siteMetadata;

  const title = props.image
    ? props.title
    : `${appName}${props.title ? ` | ${props.title}` : ''}`;

  const metaValues = [
    {
      property: 'og:type',
      content: 'article',
    },
    {
      name: 'twitter:card',
      content: 'summary',
    },
    {
      name: 'twitter:creator',
      content: twitterHandle,
    },
    {
      property: 'og:title',
      content: title,
    },
    {
      name: 'twitter:title',
      content: title,
    },
  ];
  if (description) {
    metaValues.push(
      {
        name: `description`,
        content: description,
      },
      {
        property: `og:description`,
        content: description,
      },
      {
        name: `twitter:description`,
        content: description,
      }
    );
  }
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet
          link={[
            {
              rel: 'icon',
              type: 'image/png',
              sizes: '16x16',
              href: `${Icon}`,
            },
            {
              rel: 'icon',
              type: 'image/png',
              sizes: '32x32',
              href: `${Icon}`,
            },
            {
              rel: 'shortcut icon',
              type: 'image/png',
              href: `${Icon}`,
            },
          ]}
          title={title}
          meta={metaValues}
          bodyAttributes={{
            class: props.app ? 'app' : '',
          }}
        ></Helmet>
      </HelmetProvider>
      <GlobalStyle />
      <Nav isHomepage={isHomepage} />
      <Main>{props.children}</Main>
    </React.Fragment>
  );
};

export default Layout;
