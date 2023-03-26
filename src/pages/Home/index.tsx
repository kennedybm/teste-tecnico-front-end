import * as Styles from "./styles";
import { usePosts } from "../../providers/Api/Posts";
import { useEffect, useState } from "react";
import { Header, Presentaion, Posts } from "../../components";

const Home = () => {
  const { fetchPosts } = usePosts();

  const [position, setPosition] = useState<boolean>(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
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
