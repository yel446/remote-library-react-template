import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MarkdownPreviewer from "../components/MarkdownPreviewer/MarkdownPreviewer";
import useMarkdownFile from "../hooks/useMarkdownFile";
import overview from "../docs/overview.md";

const OverviewPage: React.FC = () => {
  const markdown = useMarkdownFile(overview);
  return (
    <OverviewContainer>
      <MarkdownPreviewer children={markdown} />
    </OverviewContainer>
  );
};

const OverviewContainer = styled.div`
  width: 60%;
  margin: 0 auto;
  padding-top: 30px;
`;

export default OverviewPage;
