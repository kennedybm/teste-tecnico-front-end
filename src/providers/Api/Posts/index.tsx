import { createContext, useContext, useState } from "react";
import * as Interfaces from "./interfaces";
import { postsURL } from "../../../service/api";
import { AxiosError } from "axios";

const PostContext = createContext<Interfaces.IContext>(
  {} as Interfaces.IContext
);

export const PostsProvider = ({
  children,
}: Interfaces.IDefaultContextProps) => {
  const [postsData, setPostsData] = useState<Interfaces.IPosts[]>(
    [] as Interfaces.IPosts[]
  );

  const [commentsData, setCommentsData] = useState<Interfaces.IComments[]>(
    [] as Interfaces.IComments[]
  );

  const fetchPosts = async (): Promise<void> => {
    await postsURL
      .get<Interfaces.IPosts[]>("")
      .then((res) => {
        setPostsData(res.data);
      })
      .catch((err) => {
        const currentError =
          err as AxiosError<Interfaces.IDefaultErrorResponse>;
        console.log(currentError);
      });
  };

  const fetchComments = async (id: number): Promise<void> => {
    await postsURL
      .get<Interfaces.IComments[]>(`/${id}/comments`)
      .then((res) => {
        setCommentsData(res.data);
      })
      .catch((err) => {
        const currentError =
          err as AxiosError<Interfaces.IDefaultErrorResponse>;
        console.log(currentError);
      });
  };

  return (
    <PostContext.Provider
      value={{
        postsData,
        setPostsData,
        commentsData,
        setCommentsData,
        fetchPosts,
        fetchComments,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
export const usePosts = () => useContext(PostContext);
