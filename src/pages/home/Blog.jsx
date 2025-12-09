import React from 'react';
import { Link } from 'react-router-dom';
import Subtitle from '../../components/Subtitle';
import Title from '../../components/Title';

const Blog = () => {
    return (
        <section className="blog">
            <div className="blog__container container">
                <div className="blog__header">
                    <div className="blog__header-left">
                        <Subtitle text={'Our Blog'} className={'blog__subtitle subtitle'} />
                        <Title text='Design Expertise' className='blog__title title-xxl' />
                    </div>

                    <div className="blog__header-right">
                        <p className="blog__desc max-w-[340px]">We help brands grow with strategy, creativity, and technology.</p>
                    </div>
                </div>

                <div className="blog__grid">
                    <div className="blog__item">
                        <div className="blog__thumbnail-wrap">
                            <img src="../../../assets/img/blog/blog-image-1.png" alt="Blog 1" className="blog__thumbnail" />
                        </div>

                        <div className="blog__content">
                            <div className="blog__content-top">
                                <div className="blog__meta">
                                    <span className="blog__category">Design Inspiration</span>
                                    <span className='blog__date'>January 10, 2025</span>
                                </div>
                                <h2 className="blog__title title-xl">Design Trends That Will Shape 2025</h2>
                            </div>

                            <div className="blog__content-bottom">
                                <p className="blog__excerpt">Discover the latest UI, UX, and branding trends defining the next era of digital design.</p>

                                <div className="blog__btn-wrap">
                                    <Link className='blog__btn-text' to='/blog-details'>Read more</Link>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M9.70697 16.9496L15.414 11.2426L9.70697 5.53564L8.29297 6.94964L12.586 11.2426L8.29297 15.5356L9.70697 16.9496Z" fill="#333333" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="blog__item">
                        <div className="blog__thumbnail-wrap">
                            <img src="../../../assets/img/blog/blog-image-2.png" alt="Blog 1" className="blog__thumbnail" />
                        </div>

                        <div className="blog__content">
                            <div className="blog__content-top">
                                <div className="blog__meta">
                                    <span className="blog__category">Design Inspiration</span>
                                    <span className='blog__date'>January 10, 2025</span>
                                </div>
                                <h2 className="blog__title title-xl">Design Trends That Will Shape 2025</h2>
                            </div>

                            <div className="blog__content-bottom">
                                <p className="blog__excerpt">Discover the latest UI, UX, and branding trends defining the next era of digital design.</p>

                                <div className="blog__btn-wrap">
                                    <Link className='blog__btn-text' to='/blog-details'>Read more</Link>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M9.70697 16.9496L15.414 11.2426L9.70697 5.53564L8.29297 6.94964L12.586 11.2426L8.29297 15.5356L9.70697 16.9496Z" fill="#333333" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="blog__item">
                        <div className="blog__thumbnail-wrap">
                            <img src="../../../assets/img/blog/blog-image-3.png" alt="Blog 1" className="blog__thumbnail" />
                        </div>

                        <div className="blog__content">
                            <div className="blog__content-top">
                                <div className="blog__meta">
                                    <span className="blog__category">Design Inspiration</span>
                                    <span className='blog__date'>January 10, 2025</span>
                                </div>
                                <h2 className="blog__title title-xl">Design Trends That Will Shape 2025</h2>
                            </div>

                            <div className="blog__content-bottom">
                                <p className="blog__excerpt">Discover the latest UI, UX, and branding trends defining the next era of digital design.</p>

                                <div className="blog__btn-wrap">
                                    <Link className='blog__btn-text' to='/blog-details'>Read more</Link>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M9.70697 16.9496L15.414 11.2426L9.70697 5.53564L8.29297 6.94964L12.586 11.2426L8.29297 15.5356L9.70697 16.9496Z" fill="#333333" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="blog__item">
                        <div className="blog__thumbnail-wrap">
                            <img src="../../../assets/img/blog/blog-image-4.png" alt="Blog 1" className="blog__thumbnail w-full" />
                        </div>

                        <div className="blog__content flex flex-col justify-between gap-10 max-w-[310px] py-4">
                            <div className="blog__content-top">
                                <div className="blog__meta">
                                    <span className="blog__category">Design Inspiration</span>
                                    <span className='blog__date'>January 10, 2025</span>
                                </div>
                                <h2 className="blog__title title-xl">Design Trends That Will Shape 2025</h2>
                            </div>

                            <div className="blog__content-bottom">
                                <p className="blog__excerpt">Discover the latest UI, UX, and branding trends defining the next era of digital design.</p>

                                <div className="blog__btn-wrap">
                                    <Link className='blog__btn-text' to='/blog-details'>Read more</Link>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M9.70697 16.9496L15.414 11.2426L9.70697 5.53564L8.29297 6.94964L12.586 11.2426L8.29297 15.5356L9.70697 16.9496Z" fill="#333333" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> 
    );
};

export default Blog;