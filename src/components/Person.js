import React from 'react';
import styled from 'styled-components';

const Person = ({ name, text, image }) => {
  return (
    <Wrapper>
      <h3>{name}</h3>
      <p>{text}</p>
      <img src={image} alt='' />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-Vary-Light-Gray);
  position: relative;
  padding: 2rem;
  h3 {
    color: var(--clr-dark-Blue);
    text-align: center;
    margin: 1.5rem 0;
  }
  p {
    line-height: 2;
    font-size: 0.9rem;
    text-align: center;
  }
  img {
    width: 3rem;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export default Person;
