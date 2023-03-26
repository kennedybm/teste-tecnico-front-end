import { Header, Comments, Modal } from "../../components";
import * as Styles from "./styles";
import { useParams } from "react-router-dom";
import { useModal } from "../../providers/Modal";
import { usePosts } from "../../providers/Api/Posts";
import * as tfiIcons from "react-icons/tfi";
import { useEffect } from "react";

const PostsDetails = () => {
  const params: { postId: string; userId: string } = useParams();
  const { postsData, commentsData, fetchComments } = usePosts();

  useEffect(() => {
    fetchComments(parseInt(params.postId));
  }, []);

  const { modalToggle, handleModal } = useModal();

  const postContent = postsData.filter(
    (post) => post.id === parseInt(params.postId)
  );

  const postComments = commentsData.filter(
    (comments) => comments.postId === parseInt(params.postId)
  );

  const openModal = (): void => {
    handleModal();
  };

  return (
    <>
      <Styles.Main>
        <Header disable={true} />
        <Styles.ContentSection>
          <Styles.PostsSection>
            {postContent
              ? postContent.map((post, index) => {
                  return (
                    <>
                      <Styles.TitleBox key={index}>
                        <h2>{post.title}</h2>
                      </Styles.TitleBox>
                      <Styles.ContentBox>
                        <p>{post.body}</p>
                      </Styles.ContentBox>
                    </>
                  );
                })
              : null}
          </Styles.PostsSection>
          {postComments ? (
            <Comments data={postComments} name={"desktop"}></Comments>
          ) : null}
        </Styles.ContentSection>
        {postComments && modalToggle ? (
          <Modal name={"comments"}>
            <Comments data={postComments} name={"mobile"}></Comments>
          </Modal>
        ) : null}

        <Styles.ToggleModalBox>
          <button onClick={() => openModal()}>
            <tfiIcons.TfiComments />
          </button>
        </Styles.ToggleModalBox>
      </Styles.Main>
    </>
  );
};
export default PostsDetails;
