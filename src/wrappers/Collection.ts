import { TransactionArgs } from "@/types/TransactionArgs";
import {
  Address,
  beginCell,
  Builder,
  Cell,
  Contract,
  ContractABI,
  ContractProvider,
  Sender,
} from "@ton/core";
import { Maybe } from "@ton/core/dist/utils/maybe";

export type Mint = {
  catalogItemIndex: bigint;
};

export function storeMint(src: Mint) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeUint(977977286, 32);
    b_0.storeUint(src.catalogItemIndex, 16);
  };
}

export class Collection implements Contract {
  address: Address;
  init?: { code: Cell; data: Cell };
  abi?: Maybe<ContractABI>;

  constructor(address: Address) {
    this.address = address;
  }

  static fromAddress(address: Address): Collection {
    return new Collection(address);
  }

  async sendMint(
    provider: ContractProvider,
    via: Sender,
    args: TransactionArgs,
    message: Mint,
  ) {
    return await provider.internal(via, {
      ...args,
      body: beginCell().store(storeMint(message)).endCell(),
    });
  }
}
