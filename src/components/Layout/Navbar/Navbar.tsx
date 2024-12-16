import { cn } from "@/lib/utils";
import { useLocation } from "react-router-dom";
import { NavItem } from "./NavItem";
import { isIOS } from "react-device-detect";
import { routes } from "./routes";

export function Navbar() {
  const { pathname } = useLocation();

  return (
    <div
      className={cn(
        "fixed bottom-0 flex w-full flex-row justify-evenly bg-card py-2",
        isIOS && "pb-5",
      )}
    >
      {routes.map((route, index) => (
        <NavItem key={index} selected={route.isSelected(pathname)} {...route} />
      ))}
    </div>
  );
}
