import { useState } from "react";

const TruthODare = () => {
  const [Truth, changeTruth] = useState(`pick truth or dare`);

  function getTruth() {
    fetch("https://api.truthordarebot.xyz/v1/truth")
      .then((d) => {
        return d.json();
      })
      .then((truth) => changeTruth(truth.question));
  }
  function getDare() {
    fetch("https://api.truthordarebot.xyz/v1/dare")
      .then((d) => {
        return d.json();
      })
      .then((dare) => changeTruth(dare.question));
  }

  const truthClick = () => {
    getTruth();
  };
  const dareClick = () => {
    getDare();
  };

  const clickGoBack = () => {
    document.querySelector(`#questionPage`).style.cssText =
      "display: flex;  position: absolute; left: 0;right: 0;margin-left: auto;margin-right: auto; margin-top: 6rem;width: clamp(20rem, 22vw, 30rem);height: 30rem;backgroundColor: #fff; border-radius: 15px;box-shadow: 0 4px 8px 2px var(--main-color);flex-direction: column;align-items: center;";
    document.querySelector(`#truthDarePage`).style.cssText = "display: none";
  };

  return (
    <section style={container} id="truthDarePage">
      <h2 style={h2Styles}>{Truth}</h2>
      <div style={truthOrDare}>
        <a style={truth} onClick={truthClick}>
          Truth
        </a>
        <a style={dare} onClick={dareClick}>
          Dare
        </a>
      </div>
      <a style={goBackBtn} onClick={clickGoBack}>
        Go Back
      </a>
    </section>
  );
};

export default TruthODare;

let container = {
  display: "none",
  position: "absolute",
  left: "0",
  right: "0",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "6rem",
  width: "clamp(20rem, 22vw, 30rem)",
  height: "30rem",
  backgroundColor: "#fff",
  borderRadius: "15px",
  boxShadow: "0 4px 8px 2px var(--main-color)",
  flexDirection: "column",
  alignItems: "center",
};
const h2Styles = {
  fontSize: "1.2rem",
  marginTop: "5rem",
  color: "#1b1b1b",
  textAlign: "center",
  padding: "0 5px",
};

const truth = {
  margin: "1rem",
  backgroundColor: "var(--main-color)",
  color: "#fff",
  padding: "5px 20px",
  borderRadius: "5px",
  fontWeight: "600",
  cursor: "pointer",
  filter: "drop-shadow(0 0 10px var(--main-color))",
};
const dare = {
  margin: "1rem",
  backgroundColor: "#EFBA45",
  color: "#1b1b1b",
  padding: "5px 20px",
  borderRadius: "5px",
  fontWeight: "600",
  cursor: "pointer",
  filter: "drop-shadow(0 0 10px #EFBA45)",
};
const truthOrDare = {
  marginTop: "5rem",
};

const goBackBtn = {
  marginTop: "2rem",
  cursor: "pointer",
  color: "red",
  textDecoration: "underline",
};
