import {  createClient, chain } from 'wagmi'

import {getDefaultClient } from "connectkit";

const alchemyId = process.env.EXT_PUBLIC_ALCHEMY_ID;

export const client = createClient(
  getDefaultClient({
    appName: "Unlimited",
    // alchemyId,
    // chains: [chain.mainnet, chain.polygon, chain.localhost, chain.polygonMumbai]
    chains: [ chain.polygonMumbai]
  })
);


