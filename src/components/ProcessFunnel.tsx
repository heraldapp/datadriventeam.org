import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Funnel from '~/icons/Funnel';
import * as colors from '~/lib/colors';

export const PROCESS_SECTIONS = {
  capture: { slug: 'capture-feedback-diligently' },
  qualify: { slug: 'qualify-feedback-based-on-business-goals' },
  solve: { slug: 'solve-qualified-problems-every-week' },
  engage: { slug: 'engage-with-customers-about-their-feedback' },
};

const Styled = styled.div`
  position: relative;
  width: 380px;
  padding: 20px;
  padding-bottom: 10px;
  margin-top: -110px;
  background: ${colors.WHITE()};
  border-radius: 4px;
  box-shadow: 0 0 30px ${colors.BLACK(0.1)};
  max-width: 100%;
  overflow: hidden;

  &.process-funnel--no-active {
    margin-top: 24px;
  }

  svg {
    width: 240px;
    height: 240px;
    max-width: calc(100% - 80px);
  }

  .steps {
    position: absolute;
    left: 250px;
    top: 0;
    width: 120px;
  }
  .step {
    position: absolute;
    opacity: 0.5;
    transition: 250ms all;
  }
  .step:hover {
    opacity: 1;
  }
  .step--active,
  &.process-funnel--no-active .step {
    opacity: 1;
  }
  .step--active {
    transform: scale(1.1);
  }
  .step--Capture {
    top: 30px;
  }
  .step--Qualify {
    top: 110px;
  }
  .step--Solve {
    top: 200px;
  }
  .step--Engage {
    width: 90px;
    text-align: center;
    top: 115px;
    left: 15px;
  }
  .step__title,
  .step__text {
    margin: 0;
  }
  .step__title__label {
    color: ${colors.ORANGE()};
    font-family: neuzeit-grotesk, sans-serif;
  }
  .step__text {
    font-size: 11px;
    line-height: 14px;
    font-family: neuzeit-grotesk, sans-serif;
  }
  .funnel__piece {
    opacity: 1;
  }
  .funnel__piece--capture {
    opacity: 0.3;
  }
  .funnel__piece--qualify {
    opacity: 0.6;
  }
  .funnel__piece--engage {
    opacity: 1;
  }
  @media screen and (max-width: 400px) {
    .steps {
      left: calc(100% - 90px);
      width: 80px;
    }
    .step--Engage {
      left: 10px;
      text-align: left;
    }
  }
`;

const Step: React.FC<any> = (props) => {
  const { title, text, step } = props;
  const section =
    PROCESS_SECTIONS[title.toLowerCase()] || PROCESS_SECTIONS.capture;
  return (
    <Link to={`/process/${section.slug}`}>
      <div
        className={`step step--${title} step--${
          step === title.toLowerCase() ? 'active' : 'inactive'
        }`}
      >
        <h4 className="step__title">
          <label className="step__title__label">{title}</label>
        </h4>
        <p className="step__text">{text}.</p>
      </div>
    </Link>
  );
};

const ProcessFunnel: React.FC<{ step?: string }> = (props) => {
  const { step } = props;
  return (
    <Styled
      className={`process-funnel process-funnel--${
        Object.keys(PROCESS_SECTIONS).includes(step) ? 'active' : 'no-active'
      }`}
    >
      <Funnel className={step} />
      <div className="steps">
        <Step title="Capture" text="feedback diligently" step={step} />
        <Step
          title="Qualify"
          text="problems based on business goals"
          step={step}
        />
        <Step title="Solve" id="solve" text="qualified problems" step={step} />
      </div>
      <Step title="Engage" text="with customers about feedback" step={step} />
    </Styled>
  );
};

export default ProcessFunnel;
