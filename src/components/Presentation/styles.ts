import styled from "styled-components";

export const PresentationSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--decor);
  height: 17em;
  width: 100%;
`;

export const PresentationTitle = styled.div`
  display: flex;
  align-items: flex-end;
  height: 40%;
  width: 100%;
  h2 {
    font-size: var(--fs-xl);
    font-family: var(--title);
    font-weight: 600;
    margin-left: 0.6em;
  }
  @media (min-width: 400px) {
    h2 {
      margin-bottom: 0.3em;
    }
  }
  @media (min-width: 600px) {
    h2 {
      margin-left: 0.48em;
      margin-bottom: 0.3em;
    }
  }
`;

export const PresentationDesc = styled.div`
  display: flex;
  width: 100%;
  p {
    font-size: var(--fs-sml);
    font-family: var(--title);
    font-weight: 500;
    margin-left: 1.3em;
    width: 77%;
    max-width: 20rem;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  @media (min-width: 600px) {
    p {
      font-size: 1rem;
      max-width: 27rem;
    }
  }
`;
