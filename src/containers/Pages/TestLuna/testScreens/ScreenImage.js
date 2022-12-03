import React, { useState } from "react";

function ScreenImage({ questions, title, handleSelect, selectedItem }) {
  const [selectItem, setSelectItem] = useState(selectedItem);
  const onSelect = (item) => {
    handleSelect(item.value);
    setSelectItem(item.value);
  };
  return (
    <div className="screenText">
      <section className="question-section">
        <p>{title}</p>
      </section>

      <section className="answer-section">
        {questions.map((item) => (
          <div
            // className={selectItem === item.value ? "active" : ""}
            onClick={() => onSelect(item)}
          >
            <div className="image-container">
              <img src={item.src} alt="card" />
              {selectItem === item.value && (
                <div className="active-image-card"></div>
              )}
            </div>

            <div>
              <p> {item.answerText}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default ScreenImage;
