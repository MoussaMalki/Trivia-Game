import React from "react";

const Header = () => {
  return (
    <header style={headerStyle}>
      <h2 style={h2Style}>Let's Make It Fun</h2>
    </header>
  );
};

export default Header;

let headerStyle = {
  display: "flex",
  justifyContent: "center",
  height: "4rem",
  backgroundColor: "#EFBA45",
};

let h2Style = {
  fontStyle: "italic",
  paddingTop: "1rem",
  color: "#1b1b1b",
};
