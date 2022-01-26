import React from "react";

function Result(props) {
  return (
    <>
      <div class="mb-3 p-3">
        <label htmlFor="myBox" className="form-label">
          <h2>{props.title}</h2>
        </label>
        <textarea
          className="form-control"
          value={props.value}
          id="myBox"
          rows="4"
          placeholder="Result"
          readOnly
        ></textarea>
      </div>
    </>
  );
}

export default Result;
