import * as Styles from "./styles";
import * as Interfaces from "./interfaces";
import { useHistory } from "react-router-dom";

export const Header = ({ position, disable }: Interfaces.IHeaderProps) => {
  const history = useHistory();
  const redirect = (): void => {
    history.push("/");
  };
  return (
    <>
      <Styles.Header position={position} disable={disable}>
        <Styles.TitleBox>
          <h1 onClick={() => redirect()}>Be Curious</h1>
        </Styles.TitleBox>
        <Styles.LoginBox>
          <button>Sign in</button>
        </Styles.LoginBox>
      </Styles.Header>
    </>
  );
};
