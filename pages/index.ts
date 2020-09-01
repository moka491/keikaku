import Head from "next/head";
import styled from "styled-components";
import { MediaSearchbar } from "../components/MediaSearchbar";

const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Home() {
  return (
    <Container>
      <MediaSearchbar />
    </Container>
  );
}
