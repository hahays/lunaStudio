import React, { useState } from "react";

function ScreenText({ questions, title, handleSelect, selectedItem }) {
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
          <button
            className={selectItem === item.value ? "active" : ""}
            onClick={() => onSelect(item)}
          >
            {item.answerText}
          </button>
        ))}
      </section>
    </div>
  );
}

export default ScreenText;
