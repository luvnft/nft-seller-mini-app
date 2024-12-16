export type CatalogItem = {
  index: bigint;
  name: string;
  image: string;
  description: string;
  price: {
    ton: bigint;
    usdt: bigint;
  };
};
