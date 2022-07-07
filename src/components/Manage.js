import React from 'react';
import manage from '../utils/manage';
import styled from 'styled-components';
const Manage = () => {
  return (
    <Wrapper>
      <div className='section-center manage-center'>
        <div className='info-part'>
          <h2>What's different about Manage ?</h2>
          <p className='manage'>
            Manage provides all the functionality your team , needs without the
            complexity.Our software is tailor-mage for modern digital product
            teams.
          </p>
        </div>
        <div className='info-list'>
          {manage.map((m) => {
            const { id, text, exp } = m;
            return (
              <article className='single-manage' key={id}>
                <div className='pink-header'>
                  <span className='num'>0{id}</span>
                  <span className='text'>{text}</span>
                </div>
                <p>
                  <span className='header-big'>{text}</span>
                  <span className='exp'>{exp}</span>
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .info-part {
    margin-bottom: 2rem;
  }
  h2 {
    max-width: 20rem;
    line-height: 1.5;
    margin: 0 auto;
    margin-bottom: 1rem;
    text-align: center;
    color: var(--clr-dark-Blue);
  }
  .manage {
    text-align: center;
    line-height: 2;
    max-width: 23rem;
    margin: 0 auto;
  }
  .info-list {
    .single-manage {
      margin-bottom: 4rem;
    }
    .header-big {
      display: none;
    }
    .pink-header {
      padding: 1rem 0;
      background-color: var(--clr-Very-Pale-Red);
      border-top-left-radius: 25px;
      border-bottom-left-radius: 25px;
      margin-bottom: 1rem;
    }
    .num {
      padding: 1rem 2rem;
      color: var(--clr-white);
      background-color: var(--clr-bright-Red);
      border-radius: 25px;
    }
    .exp {
      line-height: 2;
    }
    .text {
      display: inline-block;
      margin-left: 1rem;
      color: var(--clr-dark-Blue);
      font-weight: 700;
      font-size: 1.2rem;
    }
  }
  @media (min-width: 992px) {
    .manage-center {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    .info-part {
      p {
        text-align: left;
        margin: 0;
      }
      h2 {
        max-width: 25rem;
        margin: 0;
        margin-bottom: 1rem;
        text-align: left;
      }
    }
    .info-list {
      .single-manage {
        margin-bottom: 2rem;
      }
    }
    .single-manage {
      display: flex;
      gap: 2rem;
      .pink-header {
        background-color: transparent;
        .text {
          display: none;
        }
      }
      .header-big {
        display: block;
        padding: 1rem 0;
        color: var(--clr-dark-Blue);
        font-size: 1.3rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
      }
    }
  }
`;

export default Manage;
