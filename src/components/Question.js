import { useState, useEffect } from "react";

const Question = () => {
  // getting the questions via an api
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "f858ffbd64msh58d1f4a32e8751ap1dd925jsn7f91c02b3fae",
      "X-RapidAPI-Host": "trivia-by-api-ninjas.p.rapidapi.com",
    },
  };

  const [Question, setQuestion] = useState("The Question is..");
  const [Answer, setAnswer] = useState("Unkown");

  function getQuestion() {
    fetch("https://trivia-by-api-ninjas.p.rapidapi.com/v1/trivia", options)
      .then((response) => response.json())
      .then((response) => {
        setQuestion(response[0].question);
        setAnswer(response[0].answer);
      })
      .catch((err) => console.error(err));
  }

  // triggering the function so we can display the question
  useEffect(() => {
    getQuestion();
  }, []);

  // clicking the btn thats gonna return a right or false tree

  const onClick = () => {
    let inputValue = document.querySelector(`#input`).value;

    if (inputValue) {
      if (inputValue.toLowerCase() === Answer.toLowerCase()) {
        document.querySelector(`#correctIcon`).style.cssText =
          "display: initial";
        setTimeout(() => {
          getQuestion();
          document.querySelector(`#correctIcon`).style.cssText =
            "display: none";
          document.querySelector(`#input`).value = "";
        }, 500);
      } else {
        alert(`the right answer is ${Answer}`);
        document.querySelector(`#truthDarePage`).style.cssText =
          "display: flex;  position: absolute; left: 0;right: 0;margin-left: auto;margin-right: auto; margin-top: 6rem;width: clamp(20rem, 22vw, 30rem);height: 30rem;backgroundColor: #fff; border-radius: 15px;box-shadow: 0 4px 8px 2px var(--main-color);flex-direction: column;align-items: center;";
        document.querySelector(`#questionPage`).style.cssText = "display: none";
      }
    } else {
      alert(`please type down something`);
    }
  };

  const clickSkip = () => {
    getQuestion();
  };

  return (
    <section style={container} id="questionPage">
      <i class="bx bx-check" id="correctIcon"></i>
      <h2 style={h2Styles}>{Question}</h2>
      <div style={inputContainer}>
        <input
          placeholder="Answer the question"
          style={inputStyles}
          id="input"
        />
        <i class="bx bx-send" style={btn} onClick={onClick}></i>
      </div>
      <a style={skipBtn} onClick={clickSkip}>
        Skip
      </a>
    </section>
  );
};

export default Question;

let container = {
  display: "flex",
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

const inputStyles = {
  width: " 18rem",
  height: "3rem",
  borderRadius: "5px",
  border: "1px solid RGB(188, 188, 188)",
  outline: "none",
  padding: "0 10px",
  color: "#1b1b1b",
};

const h2Styles = {
  fontSize: "1.2rem",
  marginTop: "5rem",
  color: "#1b1b1b",
  textAlign: "center",
  padding: "0 5px",
};

const inputContainer = {
  display: "flex",
  justifyContent: "center",
  position: "relative",
  marginTop: "5rem",
};
const btn = {
  fontSize: "1.5rem",
  position: "absolute",
  top: "0.8rem",
  right: "1.1rem",
  color: "var(--main-color)",
  cursor: "pointer",
};
const skipBtn = {
  marginTop: "2rem",
  cursor: "pointer",
  color: "red",
  textDecoration: "underline",
};
