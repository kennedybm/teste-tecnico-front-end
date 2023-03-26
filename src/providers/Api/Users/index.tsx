import { createContext, useContext, useState } from "react";
import { usersURL } from "../../../service/api";
import * as Interfaces from "./interfaces";
import { AxiosError } from "axios";

const UserContext = createContext<Interfaces.IContext>(
  {} as Interfaces.IContext
);

export const UsersProvider = ({
  children,
}: Interfaces.IDefaultContextProps) => {
  const [usersData, setUsersData] = useState<Interfaces.IUsers[]>(
    [] as Interfaces.IUsers[]
  );

  const [userDetails, setUserDetail] = useState<Interfaces.IUsers[]>(
    [] as Interfaces.IUsers[]
  );

  const fetchUsers = async (): Promise<void> => {
    await usersURL
      .get<Interfaces.IUsers[]>("")
      .then((res) => {
        setUsersData(res.data);
      })
      .catch((err) => {
        const currentError =
          err as AxiosError<Interfaces.IDefaultErrorResponse>;
        console.log(currentError);
      });
  };

  const fetchUserDetails = async (id: number): Promise<void> => {
    await usersURL
      .get<Interfaces.IUsers[]>(`/${id}`)
      .then((res) => {
        setUserDetail(res.data);
      })
      .catch((err) => {
        const currentError =
          err as AxiosError<Interfaces.IDefaultErrorResponse>;
        console.log(currentError);
      });
  };

  return (
    <UserContext.Provider
      value={{
        usersData,
        setUsersData,
        userDetails,
        setUserDetail,
        fetchUsers,
        fetchUserDetails,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export const useUsers = () => useContext(UserContext);
