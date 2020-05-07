import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import toast from 'cogo-toast';

import * as colors from '~/lib/colors';

import spinner from '~/images/spinner.gif';

const BUTTON_HEIGHT = 36;
const BUTTON_HEIGHT_SMALL = 28;

const PADDING = 3;

const Styled = styled.div`
  width: 100%;
  height: calc(${BUTTON_HEIGHT}px + ${PADDING * 4}px);
  max-width: 500px;
  margin: auto;
  background: ${colors.GRAY_1()};
  box-shadow: 0 0 30px ${colors.BLACK(0.2)};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${PADDING}px;
  border: 2px solid ${colors.WHITE()};
  transition: 250ms all;

  :focus-within {
    border: 2px solid ${colors.PURPLE_LIGHT()};
  }

  :focus-within input {
    opacity: 1;
  }

  .email-input__input {
    flex: 1 1 auto;
    height: ${BUTTON_HEIGHT}px;
    outline: none;
    margin-right: 8px;
    border: none;
    font-size: 16px;
    padding: 0 8px;
    opacity: 0.8;
    transition: 250ms all;
    background: ${colors.GRAY_1()};
  }
  .email-input__button {
    padding: 0 16px;
    height: ${BUTTON_HEIGHT}px;
    border-radius: 5px;
    font-size: 16px;
    display: flex;
    align-items: center;
    font-weight: bold;
    background: ${colors.PURPLE_LIGHT()};
    color: ${colors.WHITE()};
    position: relative;
    white-space: nowrap;
  }
  .email-input__button__text {
    transition: 250ms opacity;
  }
  .email-input__button__spinner {
    position: absolute;
    width: 28px;
    height: 28px;
    top: calc(50% - 14px);
    left: calc(50% - 14px);
    transition: 250ms opacity;
    opacity: 0;
  }
  .email-input__button--loading .email-input__button__text {
    opacity: 0;
  }
  .email-input__button--loading .email-input__button__spinner {
    opacity: 1;
  }
  @media screen and (max-width: 600px) {
    height: calc(${BUTTON_HEIGHT_SMALL}px + ${PADDING * 4}px);
    .email-input__input {
      height: ${BUTTON_HEIGHT_SMALL}px;
      font-size: 12px;
      padding: 0 6px;
    }
    .email-input__button {
      height: ${BUTTON_HEIGHT_SMALL}px;
      font-size: 12px;
      padding: 8px;
    }
  }
`;

const emailRegex = new RegExp(
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

const validateEmail = (email: string) =>
  emailRegex.exec(email) ? true : false;

const signup = async (email: string) => {
  return fetch(
    `${process.env.GATSBY_API_BASE_URL}/marketing/request-ddt-updates`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email.toLowerCase() }),
    }
  );
};

const EmailInput = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const onClick = useCallback(async () => {
    setLoading(true);
    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      toast.error(
        <span>
          <strong>{email}</strong> is not a valid e-mail address.
        </span>
      );
      setLoading(false);
      return;
    }
    try {
      await signup(email);
      toast.success(
        <span>
          You've successfully signed up to receive updates at{' '}
          <strong>{email}</strong>!
        </span>
      );
    } catch (e) {
      console.log(e);
      toast.error(e);
    } finally {
      setLoading(false);
    }
  }, [email]);

  return (
    <Styled className="email-input">
      <input
        className="email-input__input"
        placeholder="Your e-mail address..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        className={`email-input__button email-input__button--${
          loading ? 'loading' : 'static'
        }`}
        onClick={onClick}
      >
        <span className="email-input__button__text">Get Updates</span>
        <img src={spinner} className="email-input__button__spinner" />
      </button>
    </Styled>
  );
};

export default EmailInput;
