import React from "react";
import Header from "../../Header/Header";
import "./answers.scss";

const header = (
  <h2>
    Ответы <br></br> на частые вопросы
  </h2>
);

function Answers() {
  return (
    <div id="answers" className="answers-block">
      <header className="answers-block-header">
        <Header header="Ответы" subHeader={header} />
        <div className="answers-block-header-side-info">
          <p>
            Специально для вас мы ответили на самые частые вопросы на
            собеседованиях ВОПРОС-ОТВЕТ
          </p>
        </div>
      </header>
      <div className="answers-block-main">
        <div className="main-itemList">
          <div className="main-item">
            <div className="main-item-right">
              <div class="spoiler">
                <label for="spoiler1">
                  Со скольких лет к вам можно устроиться?
                </label>
                <input type="checkbox" id="spoiler1" />
                <label
                  className="spoiler-arrow"
                  for="spoiler1"
                  type="checkbox"
                ></label>
                <p>Только начиная с 18</p>
                <div className="spoiler-line"></div>
              </div>
            </div>
            <div className="main-item-right">
              <div class="spoiler">
                <label for="spoiler2">В чём состоит работа?</label>
                <input type="checkbox" id="spoiler2" />
                <label
                  className="spoiler-arrow"
                  for="spoiler2"
                  type="checkbox"
                ></label>
                <p>
                  Пользователи со всего мира приходят, чтобы отдохнуть от рутины
                  и обычных серых будней. Суть работы - это общение с аудиторией
                  на стримах в режиме онлайн трансялции.
                </p>
                <div className="spoiler-line"></div>
              </div>
            </div>
            <div className="main-item-right">
              <div class="spoiler">
                <label for="spoiler3">Что надо делать модели?</label>
                <input type="checkbox" id="spoiler3" />
                <label
                  className="spoiler-arrow"
                  for="spoiler3"
                  type="checkbox"
                ></label>
                <p>
                  Ты можешь просто вести переписку, можешь танцевать, петь,
                  флиртовать, дурачиться, главное - чтобы это нравилось
                  собеседникам. Также у нас существует определенный скрипт,
                  действуя по которому, можно хорошо раскрутить аккаунт.
                </p>
                <div className="spoiler-line"></div>
              </div>
            </div>
            <div className="main-item-right">
              <div class="spoiler">
                <label for="spoiler4">Как проходит обучение моделингу?</label>
                <input type="checkbox" id="spoiler4" />
                <label
                  className="spoiler-arrow"
                  for="spoiler4"
                  type="checkbox"
                ></label>
                <p>
                  Ты можешь просто вести переписку, можешь танцевать, петь,
                  флиртовать, дурачиться, главное - чтобы это нравилось
                  собеседникам. Также у нас существует определенный скрипт,
                  действуя по которому, можно хорошо раскрутить аккаунт.
                </p>
                <div className="spoiler-line"></div>
              </div>
            </div>
            <div className="main-item-right">
              <div class="spoiler">
                <label for="spoiler5">
                  Как проходит обучение моделингу? Важен ли опыт работу?
                </label>
                <input type="checkbox" id="spoiler5" />
                <label
                  className="spoiler-arrow"
                  for="spoiler5"
                  type="checkbox"
                ></label>
                <p>
                  Опыт работы не важен. У каждой модели есть свой куратор,
                  который поможет быстрее стать профессионалом. Пройдите
                  собеседование и убедитесь, что вебкам студия LUNA — лучшая в
                  Санкт-Петербурге. Особенно по части обучения моделей.
                </p>
                <div className="spoiler-line"></div>
              </div>
            </div>
            <div className="main-item-right">
              <div class="spoiler">
                <label for="spoiler6">Это заканно? Нужно раздеваться?</label>
                <input type="checkbox" id="spoiler6" />
                <label
                  className="spoiler-arrow"
                  for="spoiler6"
                  type="checkbox"
                ></label>
                <p>Добавить описание</p>
                <div className="spoiler-line"></div>
              </div>
            </div>
            <div className="main-item-right">
              <div class="spoiler">
                <label for="spoiler7">
                  Можно ли совмещать работу с учебой?
                </label>
                <input type="checkbox" id="spoiler7" />
                <label
                  className="spoiler-arrow"
                  for="spoiler7"
                  type="checkbox"
                ></label>
                <p>Добавить описание</p>
                <div className="spoiler-line"></div>
              </div>
            </div>
            <div className="main-item-right">
              <div class="spoiler">
                <label for="spoiler8">Когда происходят выплаты?</label>
                <input type="checkbox" id="spoiler8" />
                <label
                  className="spoiler-arrow"
                  for="spoiler8"
                  type="checkbox"
                ></label>
                <p>Добавить описание</p>
                <div className="spoiler-line"></div>
              </div>
            </div>
            <div className="main-item-right">
              <div class="spoiler">
                <label for="spoiler9">
                  Если у меня не ельная внешность, смогу-ли я работать?
                </label>
                <input type="checkbox" id="spoiler9" />
                <label
                  className="spoiler-arrow"
                  for="spoiler9"
                  type="checkbox"
                ></label>
                <p>Добавить описание</p>
                <div className="spoiler-line"></div>
              </div>
            </div>
            <div className="main-item-right">
              <div class="spoiler">
                <label for="spoiler10">Какой график работы?</label>
                <input type="checkbox" id="spoiler10" />
                <label
                  className="spoiler-arrow"
                  for="spoiler10"
                  type="checkbox"
                ></label>
                <p>Добавить описание</p>
                <div className="spoiler-line"></div>
              </div>
            </div>
            <div className="main-item-right">
              <div class="spoiler">
                <label for="spoiler11">Важно ли знание английского?</label>
                <input type="checkbox" id="spoiler11" />
                <label
                  className="spoiler-arrow"
                  for="spoiler11"
                  type="checkbox"
                ></label>
                <p>Добавить описание</p>
                <div className="spoiler-line"></div>
              </div>
            </div>
            <div className="main-item-right">
              <div class="spoiler">
                <label for="spoiler12">Какой средний заработок в вебкам?</label>
                <input type="checkbox" id="spoiler12" />
                <label
                  className="spoiler-arrow"
                  for="spoiler12"
                  type="checkbox"
                ></label>
                <p>Добавить описание</p>
                <div className="spoiler-line"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Answers;
