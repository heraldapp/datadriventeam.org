import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Page, { Container } from '~/layout/Layout';
import EmailInput from '~/components/EmailInput';
import Image from '~/components/Image';
import { NAV_HEIGHT } from '~/components/Nav';

import * as colors from '~/lib/colors';

// Illustrations
import IllustrationChecklist from '~/illustrations/Checklist';

// Icons
import IconArrow from '~/icons/Arrow';
import IconMagic from '~/icons/Magic';
import IconHandHoldingHeart from '~/icons/HandHoldingHeart';
import IconFire from '~/icons/Fire';
import IconChartLine from '~/icons/ChartLine';

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
  .header__tagline strong {
    color: ${colors.WHITE()};
  }
  .header__email-input {
    margin-bottom: 64px;
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
    width: 128px;
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
  .header__inspiration__logos__logo--tandem {
    width: 96px;
  }
  .header__inspiration__logos__logo--brex {
    height: 24px;
    width: 48px;
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

const logos = ['brex', 'tandem', 'notion', 'openphone', 'sunsama'];

const IndexPage: React.FC = () => {
  return (
    <Page
      isHomepage={true}
      title="How well is your team set up to serve customers?"
      description="Herald is the best space for teams to collect, analyze, and collaborate on user feedback."
    >
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
              around it.
            </div>
            <div className="header__email-input">
              <EmailInput />
            </div>
            <div className="header__inspiration">
              <label className="header__inspiration__title">
                Featuring Lessons From
              </label>
              <div className="header__inspiration__logos">
                {logos.map((logo) => (
                  <div
                    key={logo}
                    className={`header__inspiration__logos__logo header__inspiration__logos__logo--${logo}`}
                  >
                    <Image
                      src={`logos/${logo}.png`}
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </div>
        <Container>
          <div className="problem">
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
                That’s why every team needs a process for how they collect,
                organize, and share it.{' '}
                <Link to="/problem">Read on to learn how</Link>.
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
              <Section
                title="The Problem"
                description="Everyone knows user feedback is an essential component to building products customer love. But how do you turn qualitative user feedback into quantifiable and actionable data?"
                icon={IconFire}
                slug="problem"
                color={colors.PURPLE_DARK}
              />
              <Section
                title="The Process"
                description="How do high-functioning startups deal with this problem? Get insights from our conversations with 50+ founders and leaders at customer-obssessed companies."
                icon={IconMagic}
                slug="process"
                color={colors.ORANGE}
              />
              <Section
                title="Implementation"
                description="Let's implement these best practices with your team. We provide a step-by-step guide along with an Airtable template to become data driven with your own user feedback."
                icon={IconChartLine}
                slug="implementation"
                color={colors.BLUE_LIGHT}
              />
              <Section
                title="How We Can Help"
                description="At Herald, we’re building software that helps your team quantify user feedback and bring these best practices to life. It’s the easiest way to stay data driven."
                icon={IconHandHoldingHeart}
                slug="help"
                color={colors.PURPLE_LIGHT}
              />
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
