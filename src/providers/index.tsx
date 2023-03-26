import { ReactNode } from "react";
import { PostsProvider } from "./Api/Posts";
import { UsersProvider } from "./Api/Users";
import { ModalProvider } from "./Modal";

export interface IProvidersDefault {
  children: ReactNode;
}

const Providers = ({ children }: IProvidersDefault) => {
  return (
    <PostsProvider>
      <UsersProvider>
        <ModalProvider>{children}</ModalProvider>
      </UsersProvider>
    </PostsProvider>
  );
};
export default Providers;
