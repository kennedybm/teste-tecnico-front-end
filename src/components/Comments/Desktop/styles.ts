import styled from "styled-components";

export const CommentMain = styled.section`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
    background-color: var(--default);
    padding: 0.3em;
    border-left: 1px solid var(--gray1);
  }
`;

export const RespondeseBox = styled.div`
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
    padding-bottom: 0.5em;
  }
  @media (min-width: 1024px) {
    p {
      font-size: var(--fs-mid);
    }
  }
`;

export const CommentsContent = styled.section`
  display: flex;
  flex-direction: column;
  width: 96%;
  height: 26.5em;
  overflow: auto;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--gray3);
    border-radius: 3px;
  }
  @media (min-width: 1024px) {
    height: 28em;
  }
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
    font-size: var(--fs-sml);
    font-family: var(--content);
    font-weight: 300;
    color: var(--gray1);
    padding-bottom: 0.4em;
  }
  @media (min-width: 1024px) {
    h4 {
      font-size: var(--fs-sml);
    }
    h3 {
      font-size: var(--fs-mid);
    }
    p {
      font-size: var(--fs-mid);
    }
  }
`;
