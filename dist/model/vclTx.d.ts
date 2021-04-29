import { VclTxAssetActivate } from "./vclTxAssetActivate";
import { VclTxAssetUpdate } from "./vclTxAssetUpdate";
import { VclTxAssetAllocationSend } from "./vclTxAssetAllocationSend";
import { VclTxAssetTransfer } from "./vclTxAssetTransfer";
export declare type VclTx = VclTxAssetActivate | VclTxAssetUpdate | VclTxAssetAllocationSend | VclTxAssetTransfer;
export declare const SYSTX: {
    ASSET_NEW: string;
    ASSET_UPDATE: string;
    ASSET_SEND: string;
    ASSET_ALLOCATION_SEND: string;
    ASSET_TRANSFER: string;
};
