import { ReactNode } from "react";

export interface IDefaultContextProps {
  children: ReactNode;
}

export interface IDefaultErrorResponse {
  error: string;
}

export interface IUsers {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface IContext {
  usersData: IUsers[];
  setUsersData: React.Dispatch<React.SetStateAction<IUsers[]>>;
  userDetails: IUsers[];
  setUserDetail: React.Dispatch<React.SetStateAction<IUsers[]>>;
  fetchUsers: () => Promise<void>;
  fetchUserDetails: (id: number) => Promise<void>;
}
