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
  StateInit,
} from "@ton/core";
import { Maybe } from "@ton/core/dist/utils/maybe";

export type Transfer = {
  queryId: bigint;
  destination: Address;
  responseDestination: Address | null;
  customPayload: Cell | null;
  forwardAmount: bigint;
  forwardPayload: Cell | null;
};

export function storeTransfer(src: Transfer) {
  return (b_0: Builder) => {
    b_0.storeUint(1607220500, 32);
    b_0.storeUint(src.queryId, 64);
    b_0.storeAddress(src.destination);
    b_0.storeAddress(src.responseDestination);
    b_0.storeMaybeRef(src.customPayload);
    b_0.storeCoins(src.forwardAmount);
    b_0.storeMaybeRef(src.forwardPayload);
  };
}

export class NftItem implements Contract {
  address: Address;
  init?: Maybe<StateInit>;
  abi?: Maybe<ContractABI>;

  constructor(address: Address) {
    this.address = address;
  }

  static fromAddress(address: Address) {
    return new NftItem(address);
  }

  async sendTransfer(
    provider: ContractProvider,
    via: Sender,
    args: TransactionArgs,
    message: Transfer,
  ) {
    const body = beginCell().store(storeTransfer(message)).endCell();

    return await provider.internal(via, { ...args, body });
  }
}
