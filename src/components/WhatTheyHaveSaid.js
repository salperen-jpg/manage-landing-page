import React from 'react';
import styled from 'styled-components';
import people from '../utils/people';
import Person from './Person';
const WhatTheyHaveSaid = () => {
  return (
    <Wrapper>
      <div className='section-center'>
        <h2>What they've said</h2>
        <div className='people-container'>
          {people.map((person) => {
            return <Person key={person.id} {...person} />;
          })}
        </div>
      </div>
      <button className='btn centered-btn'>get started</button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  h2 {
    text-align: center;
    color: var(--clr-dark-Blue);
  }
  .people-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-column-gap: 3rem;
  }
  .centered-btn {
    margin: 0 auto;
    padding: 0.7rem 1rem;
    border-radius: 20px;
  }
`;

export default WhatTheyHaveSaid;
