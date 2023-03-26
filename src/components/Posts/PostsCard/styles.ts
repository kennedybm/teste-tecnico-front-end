import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--gray0);
  width: 85%;
  max-width: 25em;
  height: 12em;
  border-radius: 5px;
  overflow: hidden;
  @media (min-width: 700px) {
    max-width: 30em;
    width: 47%;
  }

  @media (min-width: 1300px) {
    justify-content: space-around;
    max-width: 25.5em;
    height: 13em;
  }
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 2.9em;
  h1 {
    color: var(--gray2);
    font-family: var(--title);
    font-size: var(--fs-mid);
    font-weight: bold;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0px 1rem;
  }

  /* @media (min-width: 1300px) {
    h1 {
      font-size: var(--fs-xm);
    }
  } */
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 5em;
  width: 100%;
  p {
    color: var(--gray2);
    font-family: var(--content);
    font-size: var(--fs-sml);
    font-weight: 300;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0px 1rem;
  }
`;

export const RedirectBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 3em;
  span {
    color: var(--gray2);
    font-size: 1.2rem;
    margin: 0px 0.5rem 0px 0.8rem;
  }
  p {
    display: inline-block;
    position: relative;
    color: var(--gray2);
    font-size: var(--fs-sml);
    font-weight: 500;
    font-family: var(--title);
    cursor: pointer;
  }
  p::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 5%;
    left: 0;
    background-color: var(--gray2);
    transform-origin: bottom left;
    transition: transform 0.25s ease-out;
    text-decoration: none;
  }
  p:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

// export const OwnerBox = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   width: 100%;
//   height: 1.5em;
//   span {
//     font-family: var(--title);
//     font-size: var(--fs-xs);
//     font-weight: 300;
//     color: var(--gray2);
//     margin: 0px 0.5rem 0 1rem;
//   }
//   p {
//     display: inline-block;
//     position: relative;
//     color: var(--gray2);
//     font-size: var(--fs-sml);
//     font-weight: 600;
//     font-family: var(--title);
//     cursor: pointer;
//   }
//   p::after {
//     content: "";
//     position: absolute;
//     width: 100%;
//     transform: scaleX(0);
//     height: 2px;
//     bottom: 5%;
//     left: 0;
//     background-color: var(--gray2);
//     transform-origin: bottom left;
//     transition: transform 0.25s ease-out;
//     text-decoration: none;
//   }
//   p:hover::after {
//     transform: scaleX(1);
//     transform-origin: bottom left;
//   }
// `;
