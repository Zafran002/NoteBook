import React, { useContext } from "react";
import noteContext from "../context/noteContext";

const About = () => {
  const a = useContext(noteContext);
  return (
    <div>
      <h2>
        this is about {a.state.name} {a.state.class}
      </h2>
    </div>
  );
};

export default About;
