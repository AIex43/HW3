import { PaymentProviderFactory } from "../core/PaymentProviderFactory";

export class PaymentContext {
  constructor(private factory: PaymentProviderFactory) {}

  processPayment(amount: number): void {
    const provider = this.factory.createPaymentProvider();
    const txId = provider.authorize(amount); 
    provider.capture(txId);
    provider.refund(txId);
  }
}
