import React from "react";
import { HashLink } from "react-router-hash-link";
import Button from "../../button/Button";
import "./NtPage.scss";

function NtPage() {
  return (
    <div className="nt-page">
      <div className="nt-page-block">
        <div className="nt-page-block-button">
          <HashLink to="/">
            <Button className="btn blue-l" text="Вернуться на главную" />
          </HashLink>
        </div>
      </div>
    </div>
  );
}

export default NtPage;
