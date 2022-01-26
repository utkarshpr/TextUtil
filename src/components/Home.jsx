import React, { useState } from "react";
import styled from "styled-components";

import TextForm, { tt } from "./TextForm";

function Home(props) {
  const [btncolor, setBtn] = useState("primary");
  const [mystyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "orange",
  });

  const toggleStyle = () => {
    if (mystyle.color === "black") {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
      });
      setBtn("danger");
    } else {
      setMyStyle({
        color: "black",
        backgroundColor: "orange",
      });
      setBtn("primary");
    }
  };

  return (
    <div>
      <Body style={mystyle}>
        <div>
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
              onClick={toggleStyle}
            />
          </div>
        </div>

        <OriginalText>
          <div className="container p-3">
            <TextForm
              title="Enter the text to Transform"
              button="Convert to UpperCase"
              btncolor={btncolor}
            />
          </div>
        </OriginalText>
      </Body>
    </div>
  );
}

export default Home;
const Body = styled.div`
  background: orange;
  width: 100%;
  height: 110vh;
`;
const OriginalText = styled.div``;
