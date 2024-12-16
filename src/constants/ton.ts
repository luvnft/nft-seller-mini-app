import { Address } from "@ton/core";

export const USDT_MASTER_ADDRESS = Address.parse(
  "kQD0GKBM8ZbryVk2aESmzfU6b9b_8era_IkvBSELujFZPsyy",
);

const TONCONNECT_PROD =
  "https://nft-seller-tma.vercel.app/tonconnect-manifest.json";
const TONCONNECT_DEV =
  "https://raw.githubusercontent.com/tondevsby/public/refs/heads/main/nft-seller/tma/tonconnect-manifest.json";

export const TONCONNECT_MANIFEST = import.meta.env.PROD
  ? TONCONNECT_PROD
  : TONCONNECT_DEV;

export const TONCENTER_API_URL = "https://testnet.toncenter.com/api/v3";

export const COLLECTION_ADDRESS =
  "kQAJlQ7uv_J6rhb2Ed1rMDMVYWniK2CnuQuL0tXR_-81TkjW";
