import React from "react";
import styled from "styled-components";
import spashIcon from "../statics/img/splash.svg";
import loading from "../statics/img/loading.gif";

export default function Loading() {
  return (
    <Container>
      <Content>
        <img src={spashIcon} alt="icon weather" className="splash" />
        <img src={loading} alt="loading" className="loading" />
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .splash {
    height: 50vh;
    width: 50vw;
  }

  .loading {
    height: 5vh;
    width: 5vw;
  }
`;
