import { TonIcon } from "@/components/ui/icons";
import { UserRound, WalletCards } from "lucide-react";

type Route = {
  icon: React.ReactNode;
  name: string;
  to: string;
  isSelected: (pathname: string) => boolean;
};

export const routes: Route[] = [
  {
    to: "/",
    name: "Profile",
    icon: <UserRound />,
    isSelected: (pathname) => pathname === "/" || pathname.includes("/nft"),
  },
  {
    to: "/catalog",
    name: "Catalog",
    icon: <WalletCards />,
    isSelected: (pathname) => pathname.includes("/catalog"),
  },
  {
    to: "/wallet",
    name: "Wallet",
    icon: <TonIcon />,
    isSelected: (pathname) => pathname.includes("/wallet"),
  },
];
