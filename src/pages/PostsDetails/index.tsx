import { Header } from "../../components";
import * as Styles from "./styles";
import { useParams } from "react-router-dom";
import { postsData, usersData, commentsData } from "../../service/mock";
import { useState } from "react";
import avatarPng from "../../assets/imgs/avatar.png";

const PostsDetails = () => {
  const params: { postId: string; userId: string } = useParams();

  const [pageData, setPageData] = useState();
  //   console.log(params.postId, params.userId);

  const postContent = postsData.find(
    (post) => post.id === parseInt(params.postId)
  );

  const postComments = commentsData.filter(
    (comments) => comments.postId === parseInt(params.postId)
  );

  const postUser = usersData.filter(
    (user) => user.id === parseInt(params.userId)
  );

  //   console.log(postComments);
  console.log(postUser);

  return (
    <>
      <Styles.Main>
        <Header disable={true} />
        <Styles.ContentSection>
          <Styles.TestOne>
            <Styles.UserBox>
              <Styles.ImgBox>
                <img src={avatarPng} alt="default-avatar" />
              </Styles.ImgBox>
              <Styles.InfosBox>
                <h3>Alalsa dasdas</h3>
                <h3>Email</h3>
                <h3>Phone</h3>
                <h3>Website</h3>
              </Styles.InfosBox>
            </Styles.UserBox>
          </Styles.TestOne>
          <Styles.TestTwo>
            <Styles.TitleBox>
              <h2>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Oditdsaasd dasdasdsad dasdasdd dasdasd dada
              </h2>
            </Styles.TitleBox>
            <Styles.ContentBox>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
                adipisci iste saepe aspernatur. Consequuntur sint saepe,
                asperiores quo voluptatem eius aliquid modi iusto dignissimos
                tenetur optio expedita quibusdam explicabo? Quis. Lorem ipsum
                dolor sit amet consectetur, adipisicing elit. Suscipit ipsam,
                perferendis, possimus esse a assumenda explicabo, nihil
                temporibus iure impedit ducimus aliquid quas adipisci labore
                perspiciatis sequi. Aspernatur, ipsam eum. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Repellendus sunt laboriosam
                quos iusto ad cumque vel fugit eveniet est error saepe facilis,
                nobis quibusdam, nisi quod commodi libero, esse deleniti? Lorem
                ipsum dolor, sit amet consectetur adipisicing elit. Debitis
                quasi doloremque, dolor neque odit deserunt? Iusto totam neque
                itaque reprehenderit quaerat laborum, suscipit tempore aperiam
                ut, corporis perferendis repellat debitis. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Ducimus ipsum eligendi fuga
                debitis vel temporibus et placeat voluptatem deserunt veniam
                labore nulla atque sint in eum vero, quam, suscipit expedita!
              </p>
            </Styles.ContentBox>
          </Styles.TestTwo>
        </Styles.ContentSection>
      </Styles.Main>
    </>
  );
};
export default PostsDetails;
