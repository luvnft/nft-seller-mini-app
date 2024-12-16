import { Address } from "@ton/core";

export type Nft = {
  index: number;
  address: Address;
  collectionAddress: Address;
  ownerAddress: Address;
  meta: NftMetadata;
};

export type RawNft = {
  index: number;
  address: string;
  collection_address: string;
  owner_address: string;
  content: {
    uri: string;
  };
};

export type NftMetadata = {
  name: string;
  image: string;
  description: string;
};
