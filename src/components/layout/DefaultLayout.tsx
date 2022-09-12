import { FC, ReactNode } from "react";
import Navbar from "./Navbar";

interface ILayoutProps {
  children: ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="p-12">{children}</main>
    </>
  );
};

export default Layout;
