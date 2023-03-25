import { ReactNode } from "react";

export interface IHeaderProps extends React.HTMLAttributes<HTMLHeadElement> {
  position?: boolean;
  disable?: boolean;
}
