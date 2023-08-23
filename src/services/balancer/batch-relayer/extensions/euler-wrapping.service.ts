import { Interface } from '@ethersproject/abi';
import BatchRelayerLibraryAbi from '../abi/BatchRelayerLibrary.json';
import { BigNumberish } from '@ethersproject/bignumber';

export class EulerWrappingService {
  public encodeUnwrap(params: {
    wrappedToken: string;
    sender: string;
    recipient: string;
    amount: BigNumberish;
    outputReference: BigNumberish;
  }): string {
    const batchRelayerLibrary = new Interface(BatchRelayerLibraryAbi);

    return batchRelayerLibrary.encodeFunctionData('unwrapEuler', [
      params.wrappedToken,
      params.sender,
      params.recipient,
      params.amount,
      params.outputReference,
    ]);
  }
}
