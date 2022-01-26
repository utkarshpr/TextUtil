import React, { useState } from "react";
import Result from "./Result";
import styled from "styled-components";

let tt, color;
function TextForm(props) {
  if (props.btncolor === "primary") {
    color = "btn-primary";
  } else {
    color = "btn-danger";
  }
  const handleUp = () => {
    let newtext = text.toUpperCase();
    tt = newtext;
    console.log(tt);
    setText("");
  };
  const textSummary = () => {
    tt = text.split(" ").length + " word and " + text.length + " characters";
    console.log(tt);
    tt =
      tt +
      " and it will take " +
      0.008 * text.split(" ").length +
      " Minutes to read";
    setText("");
  };
  const lowerCase = () => {
    let newtext = text.toLowerCase();
    tt = newtext;
    console.log(tt);
    setText("");
  };
  const capitalize = () => {
    tt = text.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
    setText("");
  };
  const handleOnChange = (e) => {
    console.log("on change");
    setText(e.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div class="mb-3">
        <label htmlFor="myBox" className="form-label">
          <h2>{props.title}</h2>
        </label>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="6"
          placeholder="Enter the Text"
        ></textarea>
      </div>
      <Button className="container">
        <button className={"btn  m-1 " + color} onClick={handleUp}>
          {props.button}
        </button>
        <button className={"btn  m-1 " + color} onClick={textSummary}>
          Text Summary
        </button>
        <button className={"btn  m-1 " + color} onClick={lowerCase}>
          Convert to LowerCase
        </button>
        <button className={"btn  m-1 " + color} onClick={capitalize}>
          Convert to Capitalize Format
        </button>
      </Button>

      <div className="container" style={{ padding: "6rem 0px" }}>
        <Result title="Result : ❤️" value={tt} />
      </div>
    </>
  );
}

export default TextForm;
const Button = styled.div`
  display: flex;
  @media (max-width: 756px) {
    flex-direction: column;
  }
  flex-direction: row;
`;
