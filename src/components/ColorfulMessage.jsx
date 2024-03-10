const ColorfulMessage = ({ color, children }) => {
  const contentStyleA = {
    color,
    fontSize: "18px",
    margin: "10px",
  };
  return <p style={contentStyleA}>{children}</p>;
};

export default ColorfulMessage;
