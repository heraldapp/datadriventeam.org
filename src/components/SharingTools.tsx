import React, { useMemo } from 'react';
import styled from 'styled-components';

import * as colors from '~/lib/colors';
import Image from '~/components/Image';

interface ISharingToolsProps {
  slug: string;
  title: string;
}

const Styled = styled.div`
  position: fixed;
  right: 32px;
  bottom: 32px;
  padding: 16px;
  text-align: center;
  background: ${colors.WHITE()};
  box-shadow: 0 0 30px ${colors.BLACK(0.1)};
  border-radius: 3px;

  .sharing__title {
    color: ${colors.GRAY_3()};
  }
  .sharing__links {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .sharing__links__link {
    margin: 4px;
    width: 24px;
    height: 24px;
    opacity: 0.8;
    transition: 250ms all;
  }
  .sharing__links__link:hover {
    opacity: 1;
  }
  .sharing__links__link .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }
`;

const SharingTools: React.FC<ISharingToolsProps> = (props) => {
  const { slug, title } = props;

  const url = useMemo(() => escape(`https://datadriventeam.org${slug}`), [
    slug,
  ]);

  return (
    <Styled className="sharing">
      <div className="sharing__links">
        <a
          href={`https://www.facebook.com/sharer.php?u=${url}`}
          target="_blank"
          className="sharing__links__link"
        >
          <Image src="logos/facebook.png" />
        </a>
        <a
          href={`https://twitter.com/intent/tweet?text=${escape(
            title
          )}&url=${url}&via=AskHerald`}
          target="_blank"
          className="sharing__links__link"
        >
          <Image src="logos/twitter.png" />
        </a>
        <a
          href={`https://www.linkedin.com/shareArticle?url=${url}&mini=true&title=${escape(
            title
          )}&source=Data Driven Team`}
          target="_blank"
          className="sharing__links__link"
        >
          <Image src="logos/linkedin.png" />
        </a>
      </div>
    </Styled>
  );
};

export default SharingTools;
