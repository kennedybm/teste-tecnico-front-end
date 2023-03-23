import styled from "styled-components";

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
  height: 40%;
  width: 100%;
  h2 {
    font-size: var(--fs-xl);
    padding: 0px 0 0.1em 0.5em;
  }
`;

export const PresentationDesc = styled.div`
  display: flex;
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
