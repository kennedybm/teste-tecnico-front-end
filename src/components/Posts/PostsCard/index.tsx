import * as Iterfaces from "./interfaces";
import * as Styles from "./styles";
import { postsData, usersData } from "../../../service/mock";

export const PostsCard = ({ userId, id, title, body }: Iterfaces.IPosts) => {
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
          <p>Ler Artigo</p>
        </Styles.RedirectBox>
      </Styles.Card>
    </>
  );
};
