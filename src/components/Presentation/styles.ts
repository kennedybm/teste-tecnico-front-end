import styled from "styled-components";

export const PresentationMainSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--decor);
  height: 17em;
  width: 100%;
`;
export const PresentationSecundarySection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--decor);
  height: 17em;
  width: inherit;
  padding-left: 1.3em;
`;

export const PresentationTitle = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 40%;
  h2 {
    font-size: var(--fs-xl);
    font-family: var(--title);
    font-weight: 600;
  }
`;

export const PresentationDesc = styled.div`
  display: flex;
  width: 100%;
  p {
    font-size: var(--fs-sml);
    font-family: var(--title);
    font-weight: 500;
    width: 77%;
    max-width: 20rem;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  @media (min-width: 1300px) {
    p {
      font-size: 1.3rem;
      -webkit-line-clamp: 5;
      max-width: 30rem;
    }
  }
`;
