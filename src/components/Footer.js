import React from 'react';
import navLinks from '../utils/links';
import styled from 'styled-components';
import {
  TiSocialTwitter,
  TiSocialPinterest,
  TiSocialFacebook,
  TiSocialYoutube,
  TiSocialInstagram,
} from 'react-icons/ti';
import logo from '../Assets/images/logo.svg';
const Footer = () => {
  return (
    <Wrapper>
      <div className='section-center footer-center'>
        <form className='form'>
          <input type='text' className='form-input' />
          <button className='btn submit-btn'>go</button>
        </form>
        <ul className='links'>
          {navLinks.map((link) => {
            return <li key={link.id}>{link.text}</li>;
          })}
        </ul>

        <div className='socials'>
          <span>
            <TiSocialFacebook />
          </span>
          <span>
            <TiSocialYoutube />
          </span>
          <span>
            <TiSocialTwitter />
          </span>
          <span>
            <TiSocialPinterest />
          </span>
          <span>
            <TiSocialInstagram />
          </span>
        </div>
        <img src={logo} className='logo-footer' alt='' />
        <small>Copyright {new Date().getFullYear()}. All rights reserved</small>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  padding: 2rem 0;
  background-color: var(--clr-Very-Dark-Blue);

  .footer-center {
    display: grid;
    gap: 2rem;
  }
  .form {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    input {
      border: transparent;
      outline: none;
      appearance: none;
      border-radius: 15px;
      padding: 0.5rem;
      height: 2rem;
    }
    .submit-btn {
      padding: 0.5rem 1rem;
      border-radius: 15px;
      text-transform: uppercase;
      font-size: 0.7rem;
      height: 2rem;
    }
  }
  .links {
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem 4rem;

    li {
      text-transform: capitalize;
      font-size: 0.8rem;
      color: var(--clr-white);
    }
  }
  .socials {
    display: flex;
    justify-content: center;
    gap: 1rem;
    span {
      font-size: 2rem;
      color: var(--clr-white);
    }
  }
  .logo-footer {
    width: 10rem;
    margin: 0 auto;
  }
  small {
    text-align: center;
  }
`;

export default Footer;
