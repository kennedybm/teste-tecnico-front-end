import { ReactNode } from "react";

export interface IDefaultContextProps {
  children: ReactNode;
}

export interface IDefaultErrorResponse {
  error: string;
}

export interface IPosts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IComments {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface IContext {
  postsData: IPosts[];
  setPostsData: React.Dispatch<React.SetStateAction<IPosts[]>>;
  commentsData: IComments[];
  setCommentsData: React.Dispatch<React.SetStateAction<IComments[]>>;
  fetchPosts: () => Promise<void>;
  fetchComments: (id: number) => Promise<void>;
}
