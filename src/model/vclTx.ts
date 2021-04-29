import { VclTxAssetActivate } from "./vclTxAssetActivate";
import { VclTxAssetUpdate } from "./vclTxAssetUpdate";
import { VclTxAssetAllocationSend } from "./vclTxAssetAllocationSend";
import { VclTxAssetTransfer } from "./vclTxAssetTransfer";

export type VclTx = VclTxAssetActivate | VclTxAssetUpdate | VclTxAssetAllocationSend | VclTxAssetTransfer;

export const SYSTX = {
  ASSET_NEW: 'assetactivate',
  ASSET_UPDATE: 'assetupdate',
  ASSET_SEND: 'assetsend',
  ASSET_ALLOCATION_SEND: 'assetallocationsend',
  ASSET_TRANSFER: 'assettransfer'
};

