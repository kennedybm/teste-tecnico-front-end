import styled from "styled-components";

export const CommentsMain = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 99%;
  max-width: 500px;
  height: 29.5em;
  justify-content: normal;
  border-radius: 4px;
  background-color: var(--default);
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.37),
    0px 0px 5.5px rgba(0, 0, 0, 0.241), 0px 0px 13.3px rgba(0, 0, 0, 0.185),
    0px 0px 44px rgba(0, 0, 0, 0.129);
`;

export const ResponseBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 2em;
  align-items: center;
  border-bottom: 1px solid var(--gray1);
  p {
    font-family: var(--title);
    font-size: var(--fs-sml);
    font-weight: 500;
    padding-left: 0.4em;
  }
  button {
    padding-right: 0.4em;
    font-size: var(--fs-xs);
    background-color: transparent;
    color: var(--gray1);
  }
  @media (min-width: 768px) {
    button {
      display: none;
    }
  }
`;

export const CommentsContent = styled.section`
  display: flex;
  flex-direction: column;
  width: 96%;
  height: 24em;
  overflow: auto;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
`;

export const CommentsBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 1px solid var(--gray1);
  margin-bottom: 0.5em;
  img {
    width: 8%;
    padding-top: 0.4em;
    padding-bottom: 0.3em;
  }
  h4 {
    font-size: var(--fs-xs);
    font-family: var(--title);
    font-weight: 300;
    padding-bottom: 0.4em;
  }
  h3 {
    font-size: var(--fs-sml);
    font-family: var(--title);
    font-weight: 400;
    padding-bottom: 0.4em;
  }
  p {
    font-size: var(--fs-mid);
    font-family: var(--content);
    color: var(--gray1);
    padding-bottom: 0.4em;
  }
`;
