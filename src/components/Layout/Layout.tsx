import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar/Navbar";

export function Layout() {
  return (
    <>
      <Outlet />

      <Navbar />
    </>
  );
}
