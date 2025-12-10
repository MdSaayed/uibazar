import React from 'react';

const BlogCard = () => {
    return (
        <div className='blog-card'>
            <div class="blog-card__meta">
                <span class="blog-card__date">21 September 2025</span>
            </div>
            <div class="blog-card__thumbnail-wrap">
                <img src="../../assets/img/blog/blog-card-img.png" className='blog-card__thumbnail' alt="" />
            </div>
            <div class="blog-card__content">
                <h2 class="blog-card__title">The Future of Web Design Trends Shaping 2025</h2>
            </div>
        </div>
    );
};

export default BlogCard;