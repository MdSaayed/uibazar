import { useEffect, useRef } from "react";

const FaqItem = ({ item, index, activeIndex, setActiveIndex, ref }) => {
  const answerRef = useRef(null);
  const isActive = index === activeIndex;

  useEffect(() => {
    if (answerRef.current) {
      if (isActive) {
        answerRef.current.style.height = answerRef.current.scrollHeight + "px";
      } else {
        answerRef.current.style.height = "0px";
      }
    }
  }, [isActive]);

  const handleToggle = () => {
    setActiveIndex(isActive ? null : index);
  };

  return (
    <div
      className={`faq__item ${isActive ? "faq__item--active" : ""}`}
      ref={ref}
    >
      <div className="faq__question">
        <div className="faq__question-inner">
          <h3 className="faq__question-text">{item.question}</h3>
          <button className="faq__toggle" onClick={handleToggle}>
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
              <path d="M18.6666 9.00004V9.66664C18.6666 10.0348 18.3682 10.3333 18 10.3333H10.3333V18C10.3333 18.3681 10.0348 18.6666 9.66663 18.6666H9.00003C8.63183 18.6666 8.33333 18.3681 8.33333 18V10.3333H0.66667C0.29848 10.3333 0 10.0348 0 9.66664V9.00004C0 8.63184 0.29848 8.33334 0.66667 8.33334H8.33333V0.66666C8.33333 0.29847 8.63183 0 9.00003 0H9.66663C10.0348 0 10.3333 0.29847 10.3333 0.66666V8.33334H18C18.3682 8.33334 18.6666 8.63184 18.6666 9.00004Z" fill="black" />
            </svg>
          </button>
        </div>
      </div>
      <div className="faq__answer" ref={answerRef}>
        <p className="faq__answer-text">{item.answer}</p>
      </div>
    </div>
  );
};

export default FaqItem;
