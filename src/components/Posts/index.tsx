import { useState } from "react";
import { PostsCard } from "./PostsCard";
import { usePosts } from "../../providers/Api/Posts";
import * as Styles from "./styles";
import { Pagination } from "../Pagination";
import { postsData, usersData } from "../../service/mock";

export const Posts = () => {
  // const { postsData } = usePosts();

  const [pageNumber, setPageNumber] = useState(0);

  const postsPerPage = 6;
  const viewedPosts = pageNumber * postsPerPage;

  const displayPosts = postsData.slice(viewedPosts, viewedPosts + postsPerPage);
  const pageCount = Math.ceil(postsData.length / postsPerPage);

  const switchPage = ({ selected }: { selected: number }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <Styles.MainSection>
        <Styles.PostsSection>
          {displayPosts
            ? displayPosts.map((item, index) => {
                return (
                  <PostsCard
                    key={index}
                    userId={item.userId}
                    id={item.id}
                    title={item.title}
                    body={item.body}
                  />
                );
              })
            : null}
        </Styles.PostsSection>
        <Styles.PaginationBox>
          <Pagination switchPage={switchPage} pageCount={pageCount} />
        </Styles.PaginationBox>
      </Styles.MainSection>
    </>
  );
};
