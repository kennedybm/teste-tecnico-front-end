import React from "react";

export interface IDefaultProviderProps {
  children: React.ReactNode;
}

export interface IModalContext {
  modalToggle: boolean;
  setModalToggle: React.Dispatch<React.SetStateAction<boolean>>;
  handleModal: () => void;
}
