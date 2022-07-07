import React, { useContext } from 'react';
import navLinks from '../utils/links';
import { AppContext } from '../context';
import styled from 'styled-components';
const Sidebar = () => {
  const { isSidebarOpen } = useContext(AppContext);

  return (
    <Wrapper>
      <div className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
        <div className='content-container'>
          <ul>
            {navLinks.map((link) => {
              return <li key={link.id}>{link.text}</li>;
            })}
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  .sidebar {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: -99;
    opacity: 0;
    transition: var(--transition);
  }
  .show-sidebar {
    z-index: 99;
    opacity: 1;
  }
  .content-container {
    width: 90vw;
    margin: 0 auto;
    margin-top: 10rem;
    max-width: 500px;
    background-color: var(--clr-white);
    padding: 4rem;
    border-radius: 15px;
  }
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    li {
      text-transform: capitalize;
      color: var(--clr-dark-Blue);
      cursor: pointer;
      font-weight: 700;
      font-size: 1rem;
    }
  }
`;

export default Sidebar;
