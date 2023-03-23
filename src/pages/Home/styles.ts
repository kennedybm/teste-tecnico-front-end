import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  background-color: var(--default);
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

export const PresentationSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--decor);
  height: 15em;
  width: 100%;
`;

export const PresentationTitle = styled.div`
  display: flex;
  align-items: flex-end;
  border: 1px solid #000;
  height: 40%;
  width: 100%;
  h2 {
    font-size: var(--fs-lrg);
    padding: 0px 0 0.1em 0.5em;
  }
`;

export const PresentationDesc = styled.div`
  display: flex;
  border: 1px solid #000;
  /* height: 50%; */
  width: 100%;
  p {
    font-size: var(--fs-sml);
    padding-top: 0.3rem;
    width: 65%;
    max-width: 20rem;
    padding-left: 1em;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const TesteTwo = styled.div`
  display: flex;
  background-color: black;
  height: 40em;
  width: 100%;
`;
