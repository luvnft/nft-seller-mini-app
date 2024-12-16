import { IndexPage } from "@/pages/IndexPage/IndexPage";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { CatalogPage } from "@/pages/CatalogPage/CatalogPage";
import { CatalogByIdPage } from "@/pages/CatalogByIdPage/CatalogByIdPage";
import { NftByAddressPage } from "@/pages/NftByAddressPage/NftByAddressPage";
import { NftTransferPage } from "@/pages/NftTransferPage/NftTransferPage";
import { WalletPage } from "@/pages/WalletPage/WalletPage";
import { useTheme } from "@/hooks/useTheme";
import { useWalletBalance } from "@/hooks/queries/useWalletBalance";
import { useUsdtWalletBalance } from "@/hooks/queries/useUsdtWalletBalance";
import { ErrorComponent } from "./ErrorComponent";

export function App() {
  useTheme();
  useWalletBalance();
  useUsdtWalletBalance();

  return (
    <HashRouter>
      <Routes>
        <Route
          element={<Layout />}
          errorElement={<ErrorComponent className="mt-10" />}
          path="/"
          children={[
            <Route element={<IndexPage />} path="/" />,
            <Route element={<CatalogPage />} path="/catalog" />,
            <Route element={<CatalogByIdPage />} path="/catalog/:id" />,
            <Route element={<NftByAddressPage />} path="/nft/:address" />,
            <Route
              element={<NftTransferPage />}
              path="/nft/:address/transfer"
            />,
            <Route element={<WalletPage />} path="/wallet" />,
          ]}
        />
        <Route element={<Navigate to="/" />} path="*" />
      </Routes>
    </HashRouter>
  );
}
