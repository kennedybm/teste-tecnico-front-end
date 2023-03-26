import { createContext, useContext, useState } from "react";
import * as Interfaces from "./interfaces";

const ModalContext = createContext<Interfaces.IModalContext>(
  {} as Interfaces.IModalContext
);

export const ModalProvider = ({
  children,
}: Interfaces.IDefaultProviderProps) => {
  const [modalToggle, setModalToggle] = useState<boolean>(false);

  const handleModal = (): void => {
    setModalToggle(!modalToggle);
  };

  return (
    <ModalContext.Provider value={{ modalToggle, setModalToggle, handleModal }}>
      {children}
    </ModalContext.Provider>
  );
};
export const useModal = () => useContext(ModalContext);
