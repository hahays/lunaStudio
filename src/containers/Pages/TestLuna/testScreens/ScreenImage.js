import React, { useState } from "react";
import ELCIPSE from "../assets/eclipse.svg";

function ScreenImage({ questions, title, handleSelect, selectedItem }) {
  const [selectItem, setSelectItem] = useState(selectedItem);
  const onSelect = (item) => {
    handleSelect(item.value);
    setSelectItem(item.value);
  };
  console.log(questions);
  return (
    <div className="screenText">
      <section className="question-section">
        <p>{title}</p>
      </section>

      <section className="answer-section-image">
        {questions.map((item) => (
          <div
            key={item.value}
            // className={selectItem === item.value ? "active-image" : ""}
            onClick={() => onSelect(item)}
          >
            <div className="image-block-main">
              <div className="image-container">
                <img src={item.src} alt="card" />
                {selectItem === item.value && (
                  <div className="active-image-card">
                    <img className="elcipse" src={ELCIPSE} />
                  </div>
                )}
              </div>
              <div>
                <p> {item.answerText}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default ScreenImage;
