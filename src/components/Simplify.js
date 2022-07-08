import React from 'react';
import styled from 'styled-components';
import overlay from '../Assets/images/bg-tablet-pattern.svg';
const Simplify = () => {
  return (
    <Wrapper>
      <div className='section-center simplify-center'>
        <h2>Simplify how your team works today</h2>
        <button type='button' className='btn simplify-btn'>
          get started
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 40vh;
  background-color: var(--clr-bright-Red);
  display: grid;
  align-items: center;
  color: white;
  position: relative;
  z-index: 5;
  margin-bottom: 0;
  .simplify-center {
    text-align: center;
    h2 {
      max-width: 20rem;
      margin: 0 auto;
      margin-bottom: 0.5rem;
    }
    .simplify-btn {
      background-color: var(--clr-white);
      color: var(--clr-bright-Red);
      margin: 0 auto;
      padding: 0.7rem 1rem;
      border-radius: 20px;
    }
  }
  @media (min-width: 900px) {
    .simplify-center {
      text-align: left;
      display: flex;
      justify-content: space-between;
      align-items: center;
      h2 {
        max-width: 30rem;
        margin: 0;
      }
      .simplify-btn {
        margin: 0;
      }
    }
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 60%;
    height: 100%;
    background: url(${overlay}) center/cover no-repeat;
    z-index: -2;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(0, 0, 0, 0.1);
    z-index: -2;
  }

  @media (min-width: 800px) {
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 40%;
      height: 100%;
      background: url(${overlay}) center/cover no-repeat;
      z-index: -2;
    }
  }
`;

export default Simplify;
