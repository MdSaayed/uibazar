import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header header--one'>
            <div className='header__container container px-2xl-16 py-4'>
                <div className='header__content'>
                    <div className="header__logo-wrap">
                        <Link className='header__logo-link' to={'/'}>
                            <img className="header__logo" src='./assets/img/uibazar.png' />
                        </Link>
                    </div>
                    <div className="header__nav-menu">
                        <ul className="header__nav">
                            <li className="header__nav-item">
                                <a href="/" className="header__nav-link">Home</a>
                            </li>
                            <li className="header__nav-item">
                                <a href="/projects" className="header__nav-link">Projects</a>
                            </li>
                            <li className="header__nav-item">
                                <a href="/blog-details" className="header__nav-link">Blog Single</a>
                            </li>
                        </ul>
                    </div>
                    <div className="header__toggle">
                        <svg width="24" height="8" viewBox="0 0 24 8" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M1.33333 0C0.59696 0 0 0.4797 0 1.07143C0 1.66318 0.59696 2.14286 1.33333 2.14286H22.6667C23.4031 2.14286 24 1.66318 24 1.07143C24 0.4797 23.4031 0 22.6667 0H1.33333ZM1.33333 5.35714C0.59696 5.35714 0 5.83682 0 6.42857C0 7.02032 0.59696 7.5 1.33333 7.5H22.6667C23.4031 7.5 24 7.02032 24 6.42857C24 5.83682 23.4031 5.35714 22.6667 5.35714H1.33333Z" fill="#465150" />
                        </svg>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;