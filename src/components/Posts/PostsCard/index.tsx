import * as Iterfaces from "./interfaces";
import * as Styles from "./styles";
import { useHistory } from "react-router-dom";

export const PostsCard = ({ userId, id, title, body }: Iterfaces.IPosts) => {
  const history = useHistory();

  const handleRedirect = (postId: number, userId: number) => {
    history.push(`/posts/${postId}/${userId}`);
  };

  return (
    <>
      <Styles.Card>
        <Styles.TitleBox>
          <h1>{title}</h1>
        </Styles.TitleBox>
        <Styles.ContentBox>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            dolorem provident harum quisquam nobis vel eveniet necessitatibus
          </p>
        </Styles.ContentBox>
        <Styles.RedirectBox>
          <span>&#8594;</span>
          <p onClick={() => handleRedirect(id, userId)}>Ler Artigo</p>
        </Styles.RedirectBox>
      </Styles.Card>
    </>
  );
};
