import * as S from "./styles";
import * as Interfaces from "./interfaces";

export const Header = ({ position, disable }: Interfaces.IHeaderProps) => {
  return (
    <>
      <S.Header position={position} disable={disable}>
        <S.TitleBox>
          <h1>Be Curious</h1>
        </S.TitleBox>
        <S.LoginBox>
          <button>Sign in</button>
        </S.LoginBox>
      </S.Header>
    </>
  );
};
