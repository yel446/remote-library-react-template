import React from "react";
import styled from "styled-components";
import sample from "../docs/sample.md";
import SampleComponent from "../components/SampleComponent/SampleComponent";
import ComponentPreviewer from "../components/ComponentPreviewer/ComponentPreviewer";
import useMarkdownFile from "../hooks/useMarkdownFile";
import MarkdownPreviewer from "../components/MarkdownPreviewer/MarkdownPreviewer";

const SamplePage: React.FC = () => {
  const markdown = useMarkdownFile(sample);
  return (
    <SampleContainer>
      <h1>
        <b>Sample Component</b>
      </h1>
      <ComponentPreviewer>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <SampleComponent text="Bonjour!!" />
          <p style={{ color: "var(--ui-gray)" }}>
            {`<SampleComponent`}
            <b style={{ color: "var(--ui-tertiary)" }}> text="Bonjour!!" </b>
            {`/>`}
          </p>
        </div>
      </ComponentPreviewer>
      <ComponentPreviewer>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <SampleComponent />
          <p style={{ color: "var(--ui-gray)" }}>{`<SampleComponent />`}</p>
        </div>
      </ComponentPreviewer>
      <MarkdownPreviewer children={markdown} />
    </SampleContainer>
  );
};

const SampleContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default SamplePage;
