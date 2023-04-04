import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import overview from "../md/overview.md";
import styled from "styled-components";

const OverviewPage: React.FC = () => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(overview)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <OverviewContainer>
      <ReactMarkdown children={markdown} />
    </OverviewContainer>
  );
};

const OverviewContainer = styled.div`
  width: 60%;
  margin: 0 auto;
  padding-top: 30px;
`;

export default OverviewPage;
