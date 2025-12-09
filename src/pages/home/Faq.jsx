import React, { useRef, useState } from 'react';
import faq_data from "../../data/faq-data";
import Subtitle from '../../components/Subtitle';
import Title from '../../components/Title';
import FaqItem from '../../components/elements/FaqItem';

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const faqItemRefs = useRef([]);

    return (
        <section className="faq bg-cream">
            <div className="faq__container container">
                <div class="faq__header">
                    <div class="faq__header-left">
                        <Subtitle text="FAQs" className="faq__subtitle" />
                        <Title text="Frequently Asked" className="faq__title title-xxl" />
                    </div>

                    <div class="faq__header-right">
                        <p class="faq__desc">Curious about how we work or what to expect?
                            Here’s everything you need to know before partnering with our team.</p>
                    </div>
                </div>

                <div class="faq__bottom">
                    <div class="faq__sidebar">
                        <ul class="faq__info-list">
                            <li class="faq__info-item">
                                <span class="faq__info-item-title">LOCAL TIME</span>
                                <span class="faq__info-item-value">3:02:07 PM</span>
                            </li>
                            <li class="faq__info-item">
                                <span class="faq__info-item-title">OPEN SLOT</span>
                                <span class="faq__info-item-value">10 SLOT</span>
                            </li>
                            <li class="faq__info-item">
                                <span class="faq__info-item-title">CURRENT LOCATION</span>
                                <span class="faq__info-item-value">REMOTE</span>
                            </li>
                        </ul>
                    </div>

                    <div className="faq__content">
                        {faq_data.map((item, index) => (
                            <FaqItem
                                key={item.id}
                                item={item}
                                index={index}
                                activeIndex={activeIndex}
                                setActiveIndex={setActiveIndex}
                                ref={(el) => (faqItemRefs.current[index] = el)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq; 