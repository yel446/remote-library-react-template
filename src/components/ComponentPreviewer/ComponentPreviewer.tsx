import React, { ReactNode } from "react";
import styled from "styled-components";

type TComponentPreviewer = {
  children: ReactNode;
};

const ComponentPreviewer: React.FC<TComponentPreviewer> = ({ children }) => {
  return <ComponentPreviewerContainer>{children}</ComponentPreviewerContainer>;
};

const ComponentPreviewerContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
  border: 1px solid var(--ui-gray);
  border-radius: 10px;
  background: #020304;
  gap: 20px;
`;
export default ComponentPreviewer;
