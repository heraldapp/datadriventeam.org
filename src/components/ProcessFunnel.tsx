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
  width: 500px;
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
    width: 340px;
    height: 340px;
    max-width: calc(100% - 120px);
  }

  .steps {
    position: absolute;
    left: 340px;
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
    transform: scale(1.2) translateX(10px);
  }
  .step--Capture {
    top: 50px;
  }
  .step--Qualify {
    top: 160px;
  }
  .step--Solve {
    top: 280px;
  }
  .step--Engage {
    width: 120px;
    text-align: center;
    top: 160px;
    left: 10px;
  }
  .step__title,
  .step__text {
    margin: 0;
  }
  .step__title__label {
    color: ${colors.ORANGE()};
    font-family: neuzeit-grotesk, sans-serif;
    font-size: 16px;
  }
  .step__text {
    font-size: 14px;
    line-height: 20px;
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
  @media screen and (max-width: 520px) {
    margin-top: -140px;
    .steps {
      left: calc(100% - 150px);
      width: 120px;
      height: 100%;
    }
    svg {
      height: 100%;
    }
    .step__title__label {
      font-size: 12px;
      line-height: 12px;
    }
    .step__text {
      font-size: 11px;
      line-height: 14px;
    }
    .step--Capture {
      top: 15%;
    }
    .step--Qualify {
      top: 40%;
    }
    .step--Solve {
      top: 70%;
    }
    .step--Engage {
      left: 10px;
      text-align: left;
      top: 41%;
    }
    .step--active {
      transform: scale(1.2) translateX(8px);
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
