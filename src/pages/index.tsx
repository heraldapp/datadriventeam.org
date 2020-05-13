import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Page, { Container } from '~/components/Layout';
import EmailInput from '~/components/EmailInput';
import Image from '~/components/Image';
import IllustrationChecklist from '~/illustrations/Checklist';
import IconArrow from '~/icons/Arrow';
import SECTIONS from '~/lib/sections';
import { NAV_HEIGHT } from '~/components/Nav';

import * as colors from '~/lib/colors';

const Styled = styled.div`
  .header {
    padding: 30px 0;
    padding-top: calc(${NAV_HEIGHT} + 30px);
    padding-bottom: 128px;
    background: ${colors.BLUE_DARK()};
    text-align: center;
    box-shadow: 0 0 30px ${colors.BLACK(0.3)};
  }
  .header__title {
    font-size: 56px;
    margin-top: 24px;
    margin-bottom: 8px;
    color: ${colors.WHITE()};
  }
  .header__tagline {
    font-size: 18px;
    line-height: 26px;
    width: 100%;
    max-width: 480px;
    margin: auto;
    margin-bottom: 48px;
    color: ${colors.GRAY_2(0.8)};
  }
  .header__tagline__start {
    display: none;
  }
  .header__tagline strong {
    color: ${colors.WHITE()};
  }
  .header__email-input {
    margin-bottom: 64px;
  }
  .header__email-input__description {
    font-size: 14px;
    color: ${colors.WHITE(0.7)};
    margin: 0;
    margin-top: 10px;
    white-space: nowrap;
    max-width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .header__inspiration__title {
    color: ${colors.WHITE()};
  }
  .header__inspiration__logos {
    margin-top: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .header__inspiration__logos__logo {
    width: 108px;
    height: 36px;
    margin: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .header__inspiration__logos__logo--notion {
    height: 28px;
    width: 48px;
  }
  .header__inspiration__logos__logo--brex {
    height: 24px;
    width: 48px;
  }
  .header__inspiration__logos__logo--sunsama {
    width: 90px;
  }
  .header__inspiration__logos__logo--deel {
    width: 64px;
  }
  .header__inspiration__logos__logo .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }
  .problem {
    padding: 32px;
    border-radius: 5px;
    box-shadow: 0 0 30px ${colors.BLACK(0.1)};
    background: ${colors.WHITE()};
    margin-top: -64px;
    margin-bottom: 96px;
    display: flex;
  }
  .problem__description {
    flex: 0 0 60%;
  }
  .problem__description__title {
    font-size: 24px;
    line-height: 32px;
    color: ${colors.GRAY_4()};
    font-weight: normal;
    margin-bottom: 16px;
  }
  .problem__description__description {
    font-size: 16px;
    line-height: 24px;
  }
  .problem__illustration {
    margin-left: 32px;
    flex: 1 1 auto;
    position: relative;
  }
  .problem__illustration svg {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: calc(100% + 64px);
  }
  .sections {
    text-align: center;
    margin-bottom: 96px;
  }
  .sections__grid {
    margin-top: 32px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
  }
  .about {
    text-align: center;
    margin-bottom: 96px;
  }
  .about__headshots {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .headshot {
    margin: 32px;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
  }
  .headshot__image {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 0 30px ${colors.BLACK(0.1)};
    margin-bottom: 16px;
  }
  .headshot__name {
    color: ${colors.GRAY_3()};
    font-size: 16px;
  }
  .about__description {
    width: 100%;
    max-width: 600px;
    margin: auto;
  }
  .about__description p {
    margin-bottom: 24px;
  }
  @media screen and (max-width: 600px) {
    .header__title {
      font-size: 40px;
    }
    .header__tagline__start {
      display: initial;
    }
    .header__email-input {
      margin-bottom: 32px;
    }
    .header__inspiration__logos {
      flex-flow: row wrap;
      margin-top: 2rem;
    }
    .problem {
      padding: 16px;
      margin-top: -96px;
      margin-bottom: 64px;
      flex-flow: column;
    }
    .problem__illustration {
      margin-left: 0;
      margin-top: 32px;
    }
    .problem__illustration svg {
      position: initial;
    }
    .sections__grid {
      grid-template-columns: 1fr;
    }
  }
`;

const StyledSection = styled.div`
  text-align: left;
  border-radius: 5px;
  box-shadow: 0 0 30px ${colors.BLACK(0.1)};
  background: ${colors.WHITE()};
  transition: 250ms all;
  &:hover {
    transform: translateY(-10px);
  }
  &:hover .section__top__arrow svg {
    transform: translateX(5px);
  }
  .section__top {
    padding: 16px 32px;
    display: flex;
    align-items: center;
  }
  .section__top__icon {
    display: flex;
    align-items: center;
  }
  .section__top__icon svg {
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }
  .section__top__title {
    font-size: 24px;
    margin-right: 1rem;
  }
  .section__top__arrow svg {
    width: 24px;
    transition: 250ms all;
  }
  .section__description {
    padding: 32px;
  }
  @media screen and (max-width: 600px) {
    .section__top {
      padding: 16px;
    }
    .section__description {
      padding: 16px;
    }
  }
`;

interface ISectionProps {
  title: string;
  description: string;
  icon: React.FC<any>;
  slug: string;
  color: (o: number) => string;
}

const Section: React.FC<ISectionProps> = (props) => {
  const { title, description, icon: Icon, slug, color } = props;
  return (
    <Link to={`/${slug}`}>
      <StyledSection className="section">
        <div className="section__top" style={{ backgroundColor: color(0.1) }}>
          <div className="section__top__icon">
            <Icon fill={color(1)} />
          </div>
          <h3 className="section__top__title" style={{ color: color(1) }}>
            {title}
          </h3>
          <div className="section__top__arrow">
            <IconArrow style={{ fill: color(1) }} />
          </div>
        </div>
        <div className="section__description">
          <p className="text-no-margin">{description}</p>
        </div>
      </StyledSection>
    </Link>
  );
};

const logos = {
  yc: 'https://www.ycombinator.com',
  brex: 'https://www.brex.com',
  notion: 'https://www.notion.com',
  tandem: 'https://www.tandem.chat',
  openphone: 'https://www.openphone.co',
  sunsama: 'https://www.sunsama.com',
  deel: 'https://www.letsdeel.com',
};

const IndexPage: React.FC = () => {
  return (
    <Page>
      <Styled>
        <div className="header">
          <Container>
            <h1 className="header__title">Data Driven Team</h1>
            <div className="header__tagline">
              <strong>
                Data driven startups measure how well they listen to customers.
                Does yours?
              </strong>{' '}
              This tactical guide presents how customer-obsessed startups
              quantify user feedback and center their development processes
              around it.{' '}
              <a className="header__tagline__start" href="#sections">
                Start reading.
              </a>
            </div>
            <div className="header__email-input">
              <EmailInput />
              <p className="header__email-input__description">
                Get updated when we post new interviews, stories, and tips.
              </p>
            </div>
            <div className="header__inspiration">
              <label className="header__inspiration__title">
                Featuring Lessons From
              </label>
              <div className="header__inspiration__logos">
                {Object.keys(logos).map((logo, i) => (
                  <a
                    key={logo}
                    href={logos[logo]}
                    target="_blank"
                    className={`header__inspiration__logos__logo header__inspiration__logos__logo--${logo} ${
                      i > 4 ? 'drop-at-small' : ''
                    }`}
                  >
                    <Image
                      src={`logos/${logo}.png`}
                      style={{ objectFit: 'contain' }}
                    />
                  </a>
                ))}
              </div>
            </div>
          </Container>
        </div>
        <Container>
          <div className="problem" id="problem">
            <div className="problem__description">
              <h4 className="problem__description__title">
                <mark>
                  Product analytics can tell you the <strong>what</strong>.
                  <br />
                  But only user feedback can tell you the <strong>why</strong>.
                </mark>
              </h4>
              <p className="problem__description__description text-no-margin">
                However, it’s hard to quantify user feedback, and easy to let
                biases creep in how a team shares and interprets user feedback.
                That’s why every team needs a repeatable process for how they
                collect, organize, and share it.{' '}
                <Link to="/problem">Learn how</Link>.
              </p>
            </div>
            <div className="problem__illustration">
              <IllustrationChecklist />
            </div>
          </div>
        </Container>
        <div className="sections" id="sections">
          <Container>
            <label className="sections__title">Sections</label>
            <div className="sections__grid">
              {Object.keys(SECTIONS).map((s) => (
                <Section
                  key={s}
                  title={SECTIONS[s].title}
                  description={SECTIONS[s].description}
                  icon={SECTIONS[s].icon}
                  slug={s}
                  color={colors[SECTIONS[s].color]}
                />
              ))}
            </div>
          </Container>
        </div>
        <div className="about">
          <Container>
            <label className="about__title">About</label>
            <div className="about__headshots">
              <div className="headshot">
                <div className="headshot__image">
                  <Image src="headshots/neel.jpg" />
                </div>
                <h5 className="headshot__name">Nilkanth Patel</h5>
              </div>
              <div className="headshot">
                <div className="headshot__image">
                  <Image src="headshots/jay.jpg" />
                </div>
                <h5 className="headshot__name">Jay A. Patel</h5>
              </div>
            </div>
            <div className="about__description">
              <p>
                Over the past few months, Neel and Jay have spoken with 50+
                companies to understand how they “make something people want.”{' '}
                <a href="https://www.heraldhq.com/userstand" target="_blank">
                  We are chronicling many of these conversations in the
                  Userstand blog
                </a>
                .
              </p>
              <p>
                While each of the Userstand conversation focuses on a single
                company, this guide summarizes how customer-obsessed startups
                like Brex, Notion, and Tandem quantify user feedback and center
                their development processes around it.
              </p>
            </div>
          </Container>
        </div>
      </Styled>
    </Page>
  );
};

export default IndexPage;
