import * as Interfaces from "../interfaces";
import * as Styles from "./styles";
import avatarPng from "../../../assets/imgs/avatar.png";

export const CommentsDesktop = ({ data }: Interfaces.ICommentsData) => {
  return (
    <Styles.CommentMain>
      <Styles.RespondeseBox>
        <p>Respostas: ({data.length})</p>
      </Styles.RespondeseBox>
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
    </Styles.CommentMain>
  );
};
