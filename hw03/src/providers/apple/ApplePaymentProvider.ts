import { PaymentProvider } from "../../core/PaymentProvider";

export class ApplePaymentProvider implements PaymentProvider {
  authorize(amount: number): string {
    const txId = `ap_${Math.random().toString(36).substr(2, 6)}`;
    console.log(`[ApplePay] Authorizing $${amount}`);
    return txId;
  }

  capture(transactionId: string): void {
    console.log(`[ApplePay] Capturing transaction ${transactionId}`);
  }

  refund(transactionId: string): void {
    console.log(`[ApplePay] Refunding transaction ${transactionId}`);
  }
}
