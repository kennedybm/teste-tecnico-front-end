import styled from "styled-components";

interface Props {
  position: boolean;
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
  height: 3em;
  border-bottom: 2px solid var(--gray2);
  position: fixed;
  top: 0%;
  z-index: 1;
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1em;
  width: 75%;
  h1 {
    font-size: var(--fs-xl);
    font-family: var(--title);
    font-weight: bold;
  }
`;

export const LoginBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 25%;
  button {
    margin-right: 1em;
    border-radius: 4px;
    background-color: transparent;
    text-decoration: underline var(--gray1);
    font-size: 0.75rem;
    font-family: var(--title);
    font-weight: 400;
  }
`;
