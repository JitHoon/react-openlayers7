'use client'

import styled from "@emotion/styled";

import MapArea from "./(map)/_components/MapArea";
import GlobalStyles from "./GlobalStyles";

export default function Home() {
  return (
    <>
      <GlobalStyles/>
      <Container>
        <MapArea/>
      </Container>
    </>
  );
}

const Container = styled.main`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-content: center;

  background-color: black
`
