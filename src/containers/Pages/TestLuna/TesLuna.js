import React, { useState } from "react";
import Header from "../../Header/Header";
import "./testLuna.scss";
import { questions } from "./questionSS";
import { results } from "./results";
import ScreenText from "./testScreens/ScreenText";
import ScreenImage from "./testScreens/ScreenImage";
import ResultScreen from "./ResultScreen/ResultScreen";
import StartScreen from "./StartScreen/StartScreen";

import GIFT from "./assets/icon.png";
import ARROW_NEXT from "./assets/arrowNext.svg";
import ARROW_BACK from "./assets/arrowBack.svg";
import ProgressBar from "../../../components/ProgressBar/ProgressBar";

function TesLuna() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedValues, setSelectedValues] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [showTest, setShowTest] = useState(false);

  const handleStartAgain = () => {
    setShowResult(false);
    setShowTest(false);
    setCurrentQuestion(0);
    setSelectedValues([]);
  };

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
      .sort((a, b) => b.value - a.value)[0];
    return (
      <ResultScreen
        onClick={() => {
          handleStartAgain();
        }}
        result={results.find((i) => i.value === result.key)}
      />
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
      <main className="test-container-main">
        {!showTest ? (
          <StartScreen
            onStart={() => {
              setShowTest(true);
            }}
          />
        ) : showResult ? (
          renderResult()
        ) : (
          <div className="quiz-screen">
            <div className="quiz-screen-header">
              <div className="quiz-screen-header-right">
                <img src={GIFT} />
              </div>
              <div className="quiz-screen-header-left">
                <p>
                  Приглашаем к сотрудничеству девушек из СПб, заработок от 90
                  000 в первый месяц
                </p>
              </div>
            </div>
            <div className="quiz-started">
              {questions.map((item, index) => (
                <div key={item.questionText}>
                  {index === currentQuestion && renderCard(item)}
                </div>
              ))}
            </div>
            <div className="quiz-footer">
              <div className="quiz-footer-left">
                <ProgressBar question={currentQuestion} />
              </div>
              <div className="quiz-footer-right">
                <div className="button-back">
                  {currentQuestion !== 0 && (
                    <img
                      onClick={() => {
                        setCurrentQuestion((prev) => prev - 1);
                      }}
                      src={ARROW_BACK}
                    />
                  )}
                </div>
                <div className="button-next">
                  <button
                    disabled={!selectedValues[currentQuestion]}
                    onClick={() => {
                      selectedValues.length === 6
                        ? setShowResult(true)
                        : setCurrentQuestion((prev) => prev + 1);
                    }}
                  >
                    <p>Далее</p> <img src={ARROW_NEXT} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default TesLuna;
