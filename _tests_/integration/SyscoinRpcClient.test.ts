import { createClient } from '../utilities';
import config from "../config";
import { VircleRpcClient } from "../../src/VircleRpcClient";

const configOptions = config;

describe('Vircle RPC Client Tests', () => {
  let client: VircleRpcClient;

  beforeAll(async () => {
    console.log("cl");
    try {
      client = await createClient(configOptions);
    } catch (e) {
      console.log("E-ERROR: " + e);
    }
  });

  describe('callRpc', () => {
    it('callRpc returns data for the most basic command', async () => {
      let result = await client.callRpc("getbestblockhash").call();
      console.log("Getblockhash result:", result);
      expect(typeof result).toBe('string');
    });
  });

  describe('batch', () => {
    it('batch returns proper result data for multiple results', async () => {
      let result = await client.batch([
        client.callRpc("getbestblockhash"),
        client.callRpc("getbestblockhash")
      ], false);

      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBe(2);
      expect(result[0].result).toBeDefined();
      expect(result[0].error).toBeNull();
    });

    it('unwraps nested responses by default', async () => {
      let result = await client.batch([
        client.callRpc("getbestblockhash"),
        client.callRpc("getbestblockhash")
      ]);

      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBe(2);
      expect(typeof result[0]).toBe('string');
      expect(typeof result[1]).toBe('string');
    });
  });

  describe('Client options', () => {
    it('should enable/disable logging', async () => {
      client = await createClient(configOptions);
      const clientLoggingOn = await createClient({ ...configOptions, logging: true });

      expect(client.logging).toBe(false);
      expect(clientLoggingOn.logging).toBe(true);
    });
  });
});
