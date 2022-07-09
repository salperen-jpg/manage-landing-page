import React, { useContext } from 'react';
import logo from '../Assets/images/logo.svg';
import hambuger from '../Assets/images/icon-hamburger.svg';
import close from '../Assets/images/icon-close.svg';
import navlinks from '../utils/links';
import { AppContext } from '../context';
import styled from 'styled-components';
const Navbar = () => {
  const { isSidebarOpen, toggleSidebar } = useContext(AppContext);

  React.useEffect(() => {
    document.documentElement.classList.toggle('no-scroll');
  }, [isSidebarOpen]);

  return (
    <Wrapper>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='logo' alt='manage' />
          <button
            type='button'
            className='btn toggle-btn'
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? (
              <img src={close} alt='' />
            ) : (
              <img src={hambuger} alt='' />
            )}
          </button>
        </div>
        <ul className='nav-links'>
          {navlinks.map((link) => {
            const { id, text } = link;
            return (
              <li className='nav-link' key={id}>
                {text}
              </li>
            );
          })}
        </ul>
        <button className='btn nav-btn'>get started</button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  height: 8rem;
  display: flex;
  align-items: center;
  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    justify-content: space-between;
  }
  .toggle-btn {
    background-color: transparent;
    position: static;
    z-index: 999;
  }
  .nav-links {
    display: none;
  }
  .nav-btn {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-center {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .nav-links {
      display: flex;
      gap: 1rem;
      .nav-link {
        text-transform: capitalize;
        color: var(--clr-dark-Blue);
        font-weight: 500;
        cursor: pointer;
      }
      .nav-link:hover {
        color: var(--clr-Very-Dark-Blue);
        font-weight: 700;
      }
    }
    .nav-btn {
      display: block;
      padding: 1rem 1.3rem;
      border-radius: 1.4rem;
      letter-spacing: 0;
    }
    .toggle-btn {
      display: none;
    }
  }
`;

export default Navbar;
