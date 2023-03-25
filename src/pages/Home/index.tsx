import * as Styles from "./styles";
import { usePosts } from "../../providers/Api/Posts";
import { useUsers } from "../../providers/Api/Users";
import { useEffect, useState, useRef } from "react";
import { Header, Presentaion, Posts } from "../../components";

const Home = () => {
  const { fetchPosts, fetchComments, postsData, commentsData } = usePosts();
  const { usersData, setUsersData, fetchUsers } = useUsers();

  const [position, setPosition] = useState<boolean>(false);

  const [postId, setPostId] = useState<number | undefined>();

  // useEffect(() => {
  //   fetchPosts();
  // }, []);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    // console.log(scrollPosition);
    if (scrollPosition >= 206) {
      setPosition(!position);
    } else if (scrollPosition < 206) {
      setPosition(false);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Styles.Main>
        <Header position={position} />
        <Presentaion />
        <Posts />
      </Styles.Main>
    </>
  );
};
export default Home;

// useEffect(() => {
//   fetchUsers();
// }, []);

// console.log(postsData);

// const dataTest = [
//   {
//     id: 1,
//     name: "olá",
//   },
//   {
//     id: 2,
//     name: "olá",
//   },
// ];

// const handleId = (id: number) => {
//   fetchComments(id);
// };
// console.log(usersData);

{
  /* <p>Teste Front End</p>

      {usersData
        ? usersData.map((item, index) => {
            return (
              <>
                <h1 key={index}>{item.name}</h1>
                <button onClick={() => handleId(item.id)}>Enviar</button>
              </>
            );
          })
        : null} */
}
