import { useTonConnect } from "../useTonConnect";
import { COLLECTION_ADDRESS, TONCENTER_API_URL } from "@/constants/ton";
import { Nft, NftMetadata, RawNft } from "@/types/Nft";
import { Address } from "@ton/core";
import useSWR from "swr";

export function useNfts() {
  const { walletAddress } = useTonConnect();

  return useSWR<Nft[]>(
    walletAddress
      ? createUrl(walletAddress.toString(), COLLECTION_ADDRESS)
      : null,
    fetcher,
  );
}

function createUrl(ownerAddress: string, collectionAddress: string) {
  return (
    `${TONCENTER_API_URL}/nft/items?` +
    new URLSearchParams({
      owner_address: ownerAddress,
      collection_address: collectionAddress,
      limit: "50",
      offset: "0",
    })
  );
}

async function fetcher(url: string): Promise<Nft[]> {
  const nfts = await fetch(url)
    .then((res) => res.json())
    .then((res) => res.nft_items as RawNft[])
    .then(
      async (res) =>
        await Promise.all(
          res.map(
            async (rawNft: RawNft): Promise<Nft> => ({
              index: rawNft.index,
              address: Address.parse(rawNft.address),
              collectionAddress: Address.parse(rawNft.collection_address),
              ownerAddress: Address.parse(rawNft.owner_address),
              meta: await metadataFetcher(rawNft.content.uri),
            }),
          ),
        ),
    )
    .then((res) => res.reverse());

  return nfts;
}

async function metadataFetcher(url: string): Promise<NftMetadata> {
  return await fetch(url)
    .then((res) => res.json())
    .then((res) => res as NftMetadata);
}
