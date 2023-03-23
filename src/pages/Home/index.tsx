import * as S from "./styles";
import { usePosts } from "../../providers/Api/Posts";
import { useUsers } from "../../providers/Api/Users";
import { useEffect, useState } from "react";

const Home = () => {
  const [postId, setPostId] = useState<number | undefined>();
  const { fetchPosts, fetchComments, postsData, commentsData } = usePosts();

  const { usersData, setUsersData, fetchUsers } = useUsers();

  useEffect(() => {
    fetchUsers();
  }, []);

  // console.log(postsData);

  const dataTest = [
    {
      id: 1,
      name: "olá",
    },
    {
      id: 2,
      name: "olá",
    },
  ];

  const handleId = (id: number) => {
    fetchComments(id);
  };
  console.log(usersData);

  return (
    <S.Main>
      <p>Teste Front End</p>

      {usersData
        ? usersData.map((item, index) => {
            return (
              <>
                <h1 key={index}>{item.name}</h1>
                <button onClick={() => handleId(item.id)}>Enviar</button>
              </>
            );
          })
        : null}
    </S.Main>
  );
};
export default Home;
