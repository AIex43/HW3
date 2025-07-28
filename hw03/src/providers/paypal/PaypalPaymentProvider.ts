import { PaymentProvider } from "../../core/PaymentProvider";

export class PaypalPaymentProvider implements PaymentProvider {
  authorize(amount: number): string {
    const txId = `pp_${Math.random().toString(36).substr(2, 6)}`;
    console.log(`[PayPal] Authorizing $${amount}`);
    return txId;
  }

  capture(transactionId: string): void {
    console.log(`[PayPal] Capturing transaction ${transactionId}`);
  }

  refund(transactionId: string): void {
    console.log(`[PayPal] Refunding transaction ${transactionId}`);
  }
}
