import React from "react";

const Input = () => {
  const styleInputGrid = {
    margin: "auto 0 60px",
    width: 262,
    color: "var(--red)",
    display: "grid",
    rowGap: "33px",
  };
  const styleInput = {
    display: "grid",
    rowGap: "5px",
  };
  return (
    <div style={styleInputGrid}>
      <div style={styleInput}>
        <div className="font-subtitle">아이디</div>
        <input className="font-text"></input>
      </div>
      <div style={styleInput}>
        <div className="font-subtitle">비밀번호</div>
        <input type="password" className="font-text"></input>
      </div>
    </div>
  );
};

export default Input;
