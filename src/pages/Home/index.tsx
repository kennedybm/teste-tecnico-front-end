import * as S from "./styles";
import { usePosts } from "../../providers/Api/Posts";
import { useUsers } from "../../providers/Api/Users";
import { useEffect, useState, useRef } from "react";
import { Header } from "../../components";

const Home = () => {
  const { fetchPosts, fetchComments, postsData, commentsData } = usePosts();
  const { usersData, setUsersData, fetchUsers } = useUsers();

  const [position, setPosition] = useState<boolean>(false);

  const [postId, setPostId] = useState<number | undefined>();

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    console.log(scrollPosition);
    if (scrollPosition >= 240) {
      setPosition(!position);
    } else if (scrollPosition < 240) {
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
      <S.Main>
        <Header position={position} />
        <S.PresentationSection>
          <S.PresentationTitle>
            <h2>Se mantenha atualizado</h2>
          </S.PresentationTitle>
          <S.PresentationDesc>
            <p>
              Descubra histórias, pensamentos e conhecimento de escritores de
              quaquer lugar do mundo, sobre qualquer assunto.
            </p>
          </S.PresentationDesc>
        </S.PresentationSection>
        <S.TesteTwo></S.TesteTwo>
      </S.Main>
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
