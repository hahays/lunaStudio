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
                  Мне меньше 18, я могу стать моделью?
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
                <p>
                  Нет. Часто гости сайтов обычные одинокие люди или просто люди
                  которым немного скучно. Работа вебкам модели больше направлена
                  на общение и игру с публикой. Обнажаться или нет — решать
                  только тебе, но ни одно правило сайта не требует от модели
                  чего-то подобного.
                </p>
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
                <p>
                  Конечно, можно. График очень гибкий, можно самостоятельно
                  решить, когда выйти на смену. Рабочие дни распределяются на
                  неделю вперед, и есть возможность поменять свой график в
                  течение недели. Мы предлагаем условия работы от 4 дней в
                  неделю. Если модель ставит себе две смены в один день, это
                  считается уже как два рабочих дня. Очень удобно для тех, кто
                  учится или работает где-то еще. Хотя, по итогу, для
                  большинства Luna становится основным источником дохода.
                </p>
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
                <p>
                  Оплата новичкам осуществляется после каждой смены первые две
                  недели. Так называемые “стажерские”. Затем зарплата выдается
                  стабильно дважды в месяц, каждые две недели.
                </p>
                <div className="spoiler-line"></div>
              </div>
            </div>
            <div className="main-item-right">
              <div class="spoiler">
                <label for="spoiler9">
                  Если у меня не модельная внешность, смогу-ли я работать?
                </label>
                <input type="checkbox" id="spoiler9" />
                <label
                  className="spoiler-arrow"
                  for="spoiler9"
                  type="checkbox"
                ></label>
                <p>
                  На каждую модель найдется любитель. Даже если ты не очень
                  уверен(а) в себе, или в своей внешности, со временем ты
                  научишься превращать свои недостатки в изюминку и пользоваться
                  этим. В любом случае ты ничем не рискуешь, а только обретешь
                  уверенность в себе. Пробуй! Мы против стереотипных мнений о
                  внешности.
                </p>
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
                <p>
                  Модель самостоятельно решает в какие дни и время выходить.
                  Обязательный минимум — 4 смены в неделю. Однако на период
                  promotion (когда ты работаешь впервые) мы рекомендуем выходить
                  5-6 смен подряд.
                </p>
                <p className="space-p">Утро 09:00-16:00 (7 часов)</p>
                <p className="space-p">День 16:00-23:00 (7 часов)</p>
                <p className="space-p">Ночь 23:00-08:00 (9 часов)</p>
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
                <p>
                  Все пользователи общаются на английском, однако нет никаких
                  проблем в том, чтобы пользоваться быстрым переводчиком. Даже
                  если модель не знает иностранных языков, главные ее качества
                  для нас: обаяние и харизма. В любом случае, частое общение на
                  сайтах позволит улучшить знания языка и выйти на новый
                  уровень.
                </p>
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
                <p>
                  Средний заработок в месяц от 50 000 до 180 000 рублей (за
                  30–40 часов в неделю).
                </p>
                <p>
                  У успешных моделей есть возможность зарабатывать более 250 000
                  рублей в месяц при загрузке в среднем 35 часов в неделю. При
                  этом, вся эта сумма может быть заработана и за неделю! Сумма
                  зависит от искренности модели и ее умения себя преподносить.
                  Для наших сотрудниц самое важное нести аудитории позитивный
                  вайб, поэтому внешность и знание английского языка отходит на
                  второй план.
                </p>
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
