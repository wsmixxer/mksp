import { ReactNode } from "react";
import MobileNavigation from "../components/MobileNavigation";
import LargeScreenNavigation from "../components/LargeScreenNavigation";

type Props = {
  children: ReactNode;
};

function Layout({ children }: Props) {
  return (
    <body className="flex w-screen h-screen">
      <LargeScreenNavigation />

      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <MobileNavigation />
        <main className="flex flex-1 overflow-hidden">{children}</main>
      </div>
    </body>
  );
}

export default Layout;
