import React, { useState } from "react";
import Header from "../../Header/Header";
import "./testLuna.scss";
import { questions } from "./questionSS";
import { results } from "./results";
import ScreenText from "./testScreens/ScreenText";
import ScreenImage from "./testScreens/ScreenImage";
import ResultScreen from "./ResultScreen";

function TesLuna() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedValues, setSelectedValues] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (value) => {
    setSelectedValues((prev) => {
      const newValue = [
        ...prev.slice(0, currentQuestion),
        value,
        ...prev.slice(currentQuestion + 1),
      ];
      return newValue;
    });
  };

  const renderResult = () => {
    const result = selectedValues
      .reduce((acc, el) => {
        acc[el - 1] = { key: el, value: (acc[el - 1]?.value || 0) + 1 };
        return acc;
      }, [])
      .find((i) => i.value >= 3);
    return (
      <ResultScreen result={results.find((i) => i.value === result.key)} />
    );
  };

  const renderCard = (item) => {
    if (item.type === "text") {
      return (
        <ScreenText
          title={item.questionText}
          questions={item.answerOptions}
          handleSelect={handleSelect}
          selectedItem={
            item.answerOptions[selectedValues[currentQuestion] - 1]?.value
          }
        />
      );
    }
    if (item.type === "image") {
      return (
        <ScreenImage
          title={item.questionText}
          questions={item.answerOptions}
          handleSelect={handleSelect}
          selectedItem={
            item.answerOptions[selectedValues[currentQuestion] - 1]?.value
          }
        />
      );
    }
  };
  return (
    <div id="testLuna" className="test-container">
      <header className="test-container-header">
        <Header header="Тест" subHeader="Тест: какая ты госпожа" />
      </header>
      <main className="test-container-main">
        {showResult ? (
          renderResult()
        ) : (
          <div className="quiz">
            {questions.map((item, index) => (
              <div key={item.questionText}>
                {index === currentQuestion && renderCard(item)}
              </div>
            ))}
            <button
              disabled={!selectedValues[currentQuestion]}
              onClick={() => {
                selectedValues.length === 6
                  ? setShowResult(true)
                  : setCurrentQuestion((prev) => prev + 1);
              }}
            >
              Далее
            </button>
            {currentQuestion !== 0 && (
              <button
                onClick={() => {
                  setCurrentQuestion((prev) => prev - 1);
                }}
              >
                Назад
              </button>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

export default TesLuna;
