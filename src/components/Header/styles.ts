import styled from "styled-components";

interface Props {
  position: boolean;
  disable?: boolean;
}

const handleBackgroundColors = (props: Props) => {
  if (props.position === true) {
    return `var(--gray1)`;
  } else if (props.position === false || props.disable === false) {
    return `var(--decor)`;
  }
};

export const Header = styled.header<Props>`
  display: flex;
  background-color: ${(props) => handleBackgroundColors(props)};
  width: 100%;
  height: 3em;
  border-bottom: 1px solid var(--gray2);
  position: fixed;
  top: 0%;
  z-index: 1;
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1em;
  /* border: 1px solid black; */
  width: 50%;
  h1 {
    font-size: 6vmin;
  }
`;

export const LoginBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 50%;
  button {
    margin-right: 1em;
    border-radius: 4px;
    background-color: transparent;
    text-decoration: underline var(--gray1);
    font-size: 0.75rem;
  }
`;
