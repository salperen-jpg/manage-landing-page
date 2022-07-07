import React from 'react';
import bannerImg from '../Assets/images/illustration-intro.svg';
import styled from 'styled-components';
const Banner = () => {
  return (
    <Wrapper>
      <div className='section-center banner-center'>
        <div className='banner-info'>
          <h1>Bring everyone together to build better products.</h1>
          <p>
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger theam goals in view.
          </p>
          <button className='btn'>get started</button>
        </div>
        <div className='banner-img'>
          <img src={bannerImg} alt='' />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: calc(100vh - 8rem);
  padding: 2rem 0;
  display: flex;
  align-items: center;
  .banner-center {
    display: flex;
    flex-direction: column;
  }
  .banner-info {
    order: 1;
    text-align: center;
    h1 {
      color: var(--clr-dark-Blue);
      margin-bottom: 0.5rem;
      max-width: 30rem;
    }
    p {
      line-height: 1.5;
      margin: 0 auto;
      margin-bottom: 1rem;
      max-width: 25rem;
    }
    button {
      margin: 0 auto;
      padding: 0.75rem 1rem;
      border-radius: 20px;
    }
  }
  @media (min-width: 992px) {
    .banner-center {
      flex-direction: row;
    }
    .banner-info {
      flex: 0 0 50%;
      order: 0;
      text-align: left;
      button {
        margin: 1rem 0;
      }
      p {
        margin: 0;
      }
    }
  }
`;

export default Banner;
