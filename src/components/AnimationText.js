import MovingComponent from "react-moving-text";
const AnimationText = () => {
  return (
    <h1 className="ah-headline d-flex">
      {`I'm`}{" "}
      <MovingComponent
        type="typewriter"
        dataText={[
          "muhammad arham",
          "a web developer",
          "a guitarist",
          "a footballer",
        ]}
      />
    </h1>
  );
};
export default AnimationText;
