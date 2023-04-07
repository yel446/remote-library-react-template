import React from "react";
import SampleComponentContainer from "./SampleComponent.styles";

type TSAmple = {
  text?: string;
};
const SampleComponent: React.FC<TSAmple> = ({ text }) => {
  return (
    <SampleComponentContainer>
      {!!text ? <p> {text} 😎 </p> : <p> ... Aucun texte en props ... </p>}
    </SampleComponentContainer>
  );
};

export default SampleComponent;
