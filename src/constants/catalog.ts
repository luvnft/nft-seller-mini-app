import { CatalogItem } from "@/types/CatalogItem";
import { toNano } from "@ton/core";

export const catalog: CatalogItem[] = [
  {
    index: 0n,
    name: "Lite",
    image:
      "https://github.com/tondevsby/public/blob/main/nft-seller/0.jpeg?raw=true",
    description: "lite tondevsby event ticket",
    price: {
      ton: toNano("0.33"),
      usdt: 2000000n,
    },
  },
  {
    index: 1n,
    name: "Pro",
    image:
      "https://github.com/tondevsby/public/blob/main/nft-seller/1.png?raw=true",
    description: "pro tondevsby event ticket",
    price: {
      ton: toNano("0.66"),
      usdt: 4000000n,
    },
  },
  {
    index: 2n,
    name: "VIP",
    image:
      "https://github.com/tondevsby/public/blob/main/nft-seller/2.jpeg?raw=true",
    description: "VIP tondevsby event ticket",
    price: {
      ton: toNano("1.2"),
      usdt: 8000000n,
    },
  },
];
