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
  SendMode,
  StateInit,
} from "@ton/core";
import { Maybe } from "@ton/core/dist/utils/maybe";

export type TokenTransfer = {
  queryId: bigint;
  amount: bigint;
  destination: Address;
  responseDestination: Address;
  customPayload: Cell | null;
  forwardAmount: bigint;
  forwardPayload: Cell | null;
};

export function storeTokenTransfer(src: TokenTransfer) {
  return (builder: Builder) => {
    const b_0 = builder;

    b_0.storeUint(260734629, 32);
    b_0.storeUint(src.queryId, 64);
    b_0.storeCoins(src.amount);
    b_0.storeAddress(src.destination);
    b_0.storeAddress(src.responseDestination);
    b_0.storeMaybeRef(src.customPayload);
    b_0.storeCoins(src.forwardAmount);
    b_0.storeMaybeRef(src.forwardPayload);
  };
}

export class JettonWallet implements Contract {
  address: Address;
  init?: Maybe<StateInit>;
  abi?: Maybe<ContractABI>;

  static fromAddress(address: Address) {
    return new JettonWallet(address);
  }

  constructor(address: Address) {
    this.address = address;
  }

  async sendTokenTransfer(
    provider: ContractProvider,
    via: Sender,
    args: TransactionArgs,
    message: TokenTransfer,
  ) {
    const body = beginCell().store(storeTokenTransfer(message)).endCell();

    return await provider.internal(via, {
      ...args,
      sendMode: SendMode.PAY_GAS_SEPARATELY,
      body,
    });
  }
}
