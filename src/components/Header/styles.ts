import styled from "styled-components";

interface Props {
  position?: boolean;
  disable?: boolean;
}

const handleBackgroundColors = (props: Props) => {
  if (props.position === true) {
    return `var(--default)`;
  } else if (props.position === false || props.disable === false) {
    return `var(--decor)`;
  }
};

export const Header = styled.header<Props>`
  display: flex;
  background-color: ${(props) => handleBackgroundColors(props)};
  width: 100%;
  height: 4.1em;
  border-bottom: 2px solid var(--gray2);
  position: fixed;
  top: 0%;
  z-index: 1;
`;

export const HeaderContent = styled.section`
  display: flex;
  width: 100%;
  margin-left: 1em;
  border: 1px solid black;
  @media (min-width: 1300px) {
    margin-left: 1em;
  }
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 50%;
  h1 {
    cursor: pointer;
    font-size: var(--fs-tt);
    font-family: var(--title);
    font-weight: bold;
    padding-left: 0.8em;
  }
  @media (min-width: 425px) {
    h1 {
      padding-left: 0.5em;
    }
  }
`;

export const LoginBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 50%;
  button {
    margin-right: 1.9em;
    border-radius: 4px;
    background-color: transparent;
    text-decoration: underline var(--gray1);
    font-size: var(--fs-sml);
    font-family: var(--title);
    font-weight: 300;
  }
`;
