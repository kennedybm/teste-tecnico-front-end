import * as Styles from "./styles";
import * as Interfaces from "./interfaces";

export const Header = ({ position, disable }: Interfaces.IHeaderProps) => {
  return (
    <>
      <Styles.Header position={position} disable={disable}>
        <Styles.TitleBox>
          <h1>Be Curious</h1>
        </Styles.TitleBox>
        <Styles.LoginBox>
          <button>Sign in</button>
        </Styles.LoginBox>
      </Styles.Header>
    </>
  );
};
