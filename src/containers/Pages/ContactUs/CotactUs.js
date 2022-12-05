import Header from "../../Header/Header";
import { React, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./contact.scss";
import Button from "../../button/Button";

const sayHello = () => {
  alert("OTPRAVLENO");
};

function CotactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [checked, setChecked] = useState(false);
  const [state, handleSubmit] = useForm("xayvdkrr", {
    data: {
      subject: "Someone joined the newsletter",
      pageTitle: function () {
        setName("");
        setEmail("");
        setMessage("");
        setPhone("");
        setChecked(true);
        if (state.succeeded) {
          sayHello();
        }
      },
    },
  });
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleCheck = () => {
    console.log(`Do: ${checked}`);
    setChecked(!checked);
    console.log(`POCLE: ${checked}`);
  };
  return (
    <div id="contactUs" className="contact-us-block">
      <Header
        header="Собеседование"
        subHeader="Запишитесь на собеседование сейчас"
      />

      <div className="contact-us-block-main">
        <div className="main-left">
          <div className="text-about">
            <div className="text-about-header">
              <h2>
                Если ты желаешь прокачать свою жизнь, изменив ее к лучшему, -
                заполни анкету, мы перезвоним и расскажем о студии{" "}
              </h2>
            </div>
            <div className="text-about-number">
              <h1>+7 (911) 139 49 85</h1>
            </div>
            <div className="text-about-subHeader">
              <h2>г. Санкт-Петербург, м. Садовая</h2>
            </div>
          </div>
        </div>
        <div className="main-right">
          <div className="central-form">
            <div className="col"></div>
            <div className="back-form">
              <form onSubmit={handleSubmit}>
                <div className="back-form-top">
                  <div className="name-form">
                    <input
                      className="main-input"
                      required
                      pattern={name}
                      value={name}
                      id="name"
                      type="text"
                      onChange={handleName}
                      name="name"
                      placeholder="Ваше имя"
                    />
                    <ValidationError
                      prefix="Name"
                      field="name"
                      errors={state.errors}
                    />
                  </div>
                  <div className="phone-form">
                    <input
                      required
                      className="main-input"
                      pattern={phone}
                      value={phone}
                      type="telephone"
                      name="telephone"
                      id="telephone"
                      placeholder="Ваш телефон"
                      onChange={handlePhone}
                    />
                    <ValidationError
                      prefix="Telephone"
                      field="telephone"
                      errors={state.errors}
                    />
                  </div>
                </div>
                <div className="back-form-bottom">
                  <div className="email-form">
                    <input
                      className="main-input"
                      required
                      pattern={email}
                      id="email"
                      type="email"
                      onChange={handleEmail}
                      name="email"
                      value={email}
                      placeholder="Ваш email"
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                  </div>

                  <div className="textArea-form">
                    <textarea
                      className="main-textarea"
                      required
                      pattern={message}
                      id="message"
                      onChange={handleMessage}
                      value={message}
                      name="message"
                      placeholder="Расскажите о себе"
                    />
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                    />
                  </div>
                </div>

                <div className="checkBox-form">
                  <input
                    className="custom-checkbox"
                    required
                    type="checkbox"
                    name="_optin"
                    pattern={checked}
                    id="message"
                    value={checked}
                  />
                  <label for="_optin"></label>
                  Согласие на обработку{" "}
                  <a
                    href="https://sun9-east.userapi.com/sun9-41/s/v1/ig2/lJqRTfNS3dgdIJTWCLIiPuZGRscgAa8K3i37Gh6znyNEaTxcm7mssqYUAD_3XdyXY483x9zi7yiGQdtZXbK8ArTf.jpg?size=1920x1920&quality=96&type=album"
                    target="_blank"
                    rel="noreferrer"
                  >
                    персональных данных.
                  </a>
                  <ValidationError
                    prefix="Optin"
                    field="_optin"
                    errors={state.errors}
                  />
                </div>
                <div className="send-btn">
                  <Button className="btn blue-b" text="Отправить" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CotactUs;
