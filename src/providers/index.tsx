import { ReactNode } from "react";
import { PostsProvider } from "./Api/Posts";

export interface IProvidersDefault {
  children: ReactNode;
}

const Providers = ({ children }: IProvidersDefault) => {
  return <PostsProvider>{children}</PostsProvider>;
};
export default Providers;
