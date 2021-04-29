import { VircleRpcClient } from "../src/VircleRpcClient";

async function createClient(rpcConfigOptions) {
    let client = new VircleRpcClient(rpcConfigOptions);
    return client;
}

export { createClient };