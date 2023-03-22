import { ReactNode } from "react";
import { PostsProvider } from "./Api/Posts";
import { UsersProvider } from "./Api/Users";

export interface IProvidersDefault {
  children: ReactNode;
}

const Providers = ({ children }: IProvidersDefault) => {
  return (
    <PostsProvider>
      <UsersProvider>{children}</UsersProvider>
    </PostsProvider>
  );
};
export default Providers;
