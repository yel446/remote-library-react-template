import React, { ReactNode } from "react";
import styled from "styled-components";

type TSuspenseFallback = {};

const SuspenseFallback: React.FC<TSuspenseFallback> = ({}) => {
  return (
    <SuspenseFallbackContainer>
      <h3>
        <b> Chargement en cours </b>
      </h3>
      <p> ••• </p>
    </SuspenseFallbackContainer>
  );
};

const SuspenseFallbackContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: #242424;
  color: #b8b7b7;
`;
export default SuspenseFallback;
