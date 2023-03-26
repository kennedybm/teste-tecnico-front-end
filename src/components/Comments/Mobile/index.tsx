import * as Styles from "./styles";
import * as Interfaces from "../interfaces";
import { useModal } from "../../../providers/Modal";
import avatarPng from "../../../assets/imgs/avatar.png";
import * as IaIcons from "react-icons/ai";

export const CommentsMobile = ({ data }: Interfaces.ICommentsData) => {
  const { handleModal } = useModal();

  const closeModal = (): void => {
    handleModal();
  };
  return (
    <>
      <Styles.CommentsMain>
        <Styles.ResponseBox>
          <p>Respostas: ({data.length})</p>
          <button onClick={() => closeModal()}>
            <IaIcons.AiOutlineClose />
          </button>
        </Styles.ResponseBox>
        <Styles.CommentsContent>
          {data.map((comment, index) => {
            return (
              <Styles.CommentsBox key={index}>
                <img src={avatarPng} alt="" />
                <h4> {comment.email}</h4>
                <h3>{comment.name}</h3>
                <p>{comment.body}</p>
              </Styles.CommentsBox>
            );
          })}
        </Styles.CommentsContent>
      </Styles.CommentsMain>
    </>
  );
};
