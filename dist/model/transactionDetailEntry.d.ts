import { VclTx } from "./vclTx";
export interface TransactionDetailEntry {
    address?: string;
    category?: string;
    amount?: number;
    label?: string;
    vout?: number;
    vcltx?: VclTx;
    fee?: number;
}
