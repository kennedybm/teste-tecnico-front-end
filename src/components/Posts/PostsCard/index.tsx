import * as Iterfaces from "./interfaces";
import * as Styles from "./styles";

export const PostsCard = ({ userId, id, title, body }: Iterfaces.IPosts) => {
  const foundPostOwner = (value: number) => {
    console.log(value);
  };

  return (
    <>
      <Styles.Card>
        <Styles.TitleBox>
          <h1>{title}</h1>
        </Styles.TitleBox>
        <Styles.OwnerBox>
          <span>by</span>
          <p onClick={() => foundPostOwner(userId)}>Marcia</p>
        </Styles.OwnerBox>
        <Styles.ContentBox>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            dolorem provident harum quisquam nobis vel eveniet necessitatibus
          </p>
        </Styles.ContentBox>
        <Styles.RedirectBox>
          <span>&#8594;</span>
          <p>Read Article</p>
        </Styles.RedirectBox>
      </Styles.Card>
    </>
  );
};
