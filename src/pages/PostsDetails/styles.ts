import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  background-color: var(--default);
  header {
    position: unset;
  }
`;

export const ContentSection = styled.section`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
`;

//User
export const TestOne = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 5.5em;
  border: 1px solid blue;
  z-index: 2;
`;

export const UserBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  border: 1px solid yellow;
  height: 5.8em;
`;

export const ImgBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid yellow;
  width: 25%;
  max-width: 7em;
  img {
    width: 60%;
    max-width: 3em;
  }
`;

export const InfosBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid yellow;
  padding-left: 0.5em;
  width: 75%;
  h3 {
    font-family: var(--title);
    font-size: var(--fs-xs);
    font-weight: 400;
  }
`;
//--------------------------------

//Posts
export const TestTwo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 22.5em;
  border: 1px solid yellow;
  overflow: auto;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  z-index: 3;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  z-index: 2;
  h2 {
    color: var(--gray2);
    font-family: var(--title);
    font-size: var(--fs-mid);
    font-weight: bold;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0px 1rem;
    padding-top: 1.2em;
  }
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding-top: 1em;
  p {
    color: var(--gray2);
    font-family: var(--content);
    font-size: var(--fs-sml);
    font-weight: 300;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0px 1rem;
    padding-bottom: 1.5em;
  }
`;
