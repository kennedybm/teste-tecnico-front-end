import * as Interfaces from "./interfaces";
import * as Styled from "./styles";

export const Modal = ({ children, name }: Interfaces.IModal) => {
  switch (name) {
    case "comments":
      return (
        <>
          <Styled.ModalSection>{children}</Styled.ModalSection>
        </>
      );
    default:
      return null;
  }
};
