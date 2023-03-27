import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  background-color: var(--default);
  header {
    position: unset;
  }
`;

export const ContentSection = styled.section`
  display: flex;
  flex-direction: column;
  border-left: 1px solid var(--gray1);
  border-right: 1px solid var(--gray1);
  border-bottom: 1px solid var(--gray1);
  max-width: 1300px;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const PostsSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 29.5em;
  border-right: 1px solid var(--gray1);
  overflow: auto;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  z-index: 3;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (min-width: 768px) {
    height: 87vh;
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
  @media (min-width: 1024px) {
    h2 {
      font-size: var(--fs-lrg);
    }
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
  @media (min-width: 1024px) {
    p {
      font-size: var(--fs-mid);
    }
  }
`;

export const ToggleModalBox = styled.div`
  position: fixed;
  top: 13%;
  right: 1%;
  background-color: var(--default);
  z-index: 3;
  border-radius: 5px;
  button {
    color: var(--decor);
    font-size: 1.1rem;
    padding-right: 0.2em;
    background-color: transparent;
    cursor: pointer;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;
