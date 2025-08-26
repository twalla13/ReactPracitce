//Make this dynamic by passing text as props

import { ReactNode } from "react";

//using children prop with type ReactNode we can pass children props to a component
interface Props {
  children: ReactNode;
}
const Alert = ({ children }: Props) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
