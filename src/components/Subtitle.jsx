import React from 'react';

const Subtitle = ({ text, className }) => {
    return (
        <div className="subtitle-wrap">
            <img src="../../../assets/img/subtitle-shape.png" alt="Subtitle" className="blog__subtitle-shape" />
            <p className={`${className}`}>{text}</p>
        </div>
    );
};

export default Subtitle;