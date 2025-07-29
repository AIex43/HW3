import { PaymentProvider } from "../../core/PaymentProvider";

export class StripePaymentProvider implements PaymentProvider {
  authorize(amount: number): string {
    const txId = `tx_${Math.random().toString(36).substr(2, 6)}`;
    console.log(`[Stripe] Authorizing $${amount}`);
    return txId; 
  }

  capture(transactionId: string): void {
    console.log(`[Stripe] Capturing transaction ${transactionId}`);
  }

  refund(transactionId: string): void {
    console.log(`[Stripe] Refunding transaction ${transactionId}`);
  }
}



