import styled from "styled-components";

export const MainSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: var(--default);
  border: 1px solid blue;
  width: 100%;
`;

export const PostsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: var(--default);
  border: 1px solid black;
  width: 100%;
  height: 85em;

  @media (min-width: 700px) {
    flex-wrap: wrap;
    justify-content: space-evenly;
    height: 45em;
    max-width: 1000px;
  }

  @media (min-width: 1300px) {
    flex-wrap: wrap;
    justify-content: space-evenly;
    height: 41em;
    max-width: 1300px;
  }
`;

export const PaginationBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1000px;
  margin: 0 0 20px 0px;
  .paginationUl {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    padding: 0 10%;
    /* @media (min-width: 1024px){
        padding: 0 0;
    } */
  }
  .previousBttn,
  .nextBttn {
    font-family: var(--title);
    cursor: pointer;
  }
  .paginationActive {
    font-family: var(--title);
    text-decoration: underline;
  }
  .paginationPages {
    cursor: pointer;
  }
`;
