import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import "./theme/global/styles.css";
import theme from "./theme";
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createClient, WagmiConfig } from "wagmi";

import {
  arbitrum,
  arbitrumGoerli,
  aurora,
  auroraTestnet,
  avalanche,
  avalancheFuji,
  baseGoerli,
  boba,
  bronos,
  bronosTestnet,
  bsc,
  bscTestnet,
  canto,
  celo,
  celoAlfajores,
  cronos,
  crossbell,
  dfk,
  dogechain,
  evmos,
  evmosTestnet,
  fantom,
  fantomTestnet,
  filecoin,
  filecoinCalibration,
  filecoinHyperspace,
  flare,
  flareTestnet,
  foundry,
  gnosis,
  gnosisChiado,
  goerli,
  hardhat,
  harmonyOne,
  iotex,
  iotexTestnet,
  klaytn,
  localhost,
  mainnet,
  metis,
  metisGoerli,
  moonbaseAlpha,
  moonbeam,
  moonriver,
  nexi,
  okc,
  optimism,
  optimismGoerli,
  polygon,
  polygonMumbai,
  polygonZkEvm,
  polygonZkEvmTestnet,
  scrollTestnet,
  sepolia,
  shardeumSphinx,
  skaleBlockBrawlers,
  skaleCalypso,
  skaleCalypsoTestnet,
  skaleChaosTestnet,
  skaleCryptoBlades,
  skaleCryptoColosseum,
  skaleEuropa,
  skaleEuropaTestnet,
  skaleExorde,
  skaleHumanProtocol,
  skaleNebula,
  skaleNebulaTestnet,
  skaleRazor,
  skaleTitan,
  skaleTitanTestnet,
  songbird,
  songbirdTestnet,
  taraxa,
  taraxaTestnet,
  telos,
  telosTestnet,
  wanchain,
  wanchainTestnet,
  xdc,
  xdcTestnet,
  zhejiang,
  zkSync,
  zkSyncTestnet,
} from "wagmi/chains";
import { Logo } from "./Logo";
import { Header } from "./components/header";
import { Search } from "./components/search";
import { Home } from "./pages/home";
import { ConnectForm } from "./components/form";

interface ContractParams {
  contractAddress?: string;
  networkId?: string;
}

const chains = [
  arbitrum,
  arbitrumGoerli,
  aurora,
  auroraTestnet,
  avalanche,
  avalancheFuji,
  baseGoerli,
  boba,
  bronos,
  bronosTestnet,
  bsc,
  bscTestnet,
  canto,
  celo,
  celoAlfajores,
  cronos,
  crossbell,
  dfk,
  dogechain,
  evmos,
  evmosTestnet,
  fantom,
  fantomTestnet,
  filecoin,
  filecoinCalibration,
  filecoinHyperspace,
  flare,
  flareTestnet,
  foundry,
  gnosis,
  gnosisChiado,
  goerli,
  hardhat,
  harmonyOne,
  iotex,
  iotexTestnet,
  klaytn,
  localhost,
  mainnet,
  metis,
  metisGoerli,
  moonbaseAlpha,
  moonbeam,
  moonriver,
  nexi,
  okc,
  optimism,
  optimismGoerli,
  polygon,
  polygonMumbai,
  polygonZkEvm,
  polygonZkEvmTestnet,
  scrollTestnet,
  sepolia,
  shardeumSphinx,
  skaleBlockBrawlers,
  skaleCalypso,
  skaleCalypsoTestnet,
  skaleChaosTestnet,
  skaleCryptoBlades,
  skaleCryptoColosseum,
  skaleEuropa,
  skaleEuropaTestnet,
  skaleExorde,
  skaleHumanProtocol,
  skaleNebula,
  skaleNebulaTestnet,
  skaleRazor,
  skaleTitan,
  skaleTitanTestnet,
  songbird,
  songbirdTestnet,
  taraxa,
  taraxaTestnet,
  telos,
  telosTestnet,
  wanchain,
  wanchainTestnet,
  xdc,
  xdcTestnet,
  zhejiang,
  zkSync,
  zkSyncTestnet,
];
const projectId = "5f53b0299462693daec37a2c802d477a";

const { provider } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  provider,
});
const ethereumClient = new EthereumClient(wagmiClient, chains);

export const App = () => {
  return (
    <Router>
      <ChakraProvider theme={theme}>
        <WagmiConfig client={wagmiClient}>
          <Box textAlign="center" fontSize="xl">
            <Home />
          </Box>
        </WagmiConfig>
        <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
      </ChakraProvider>
    </Router>
  );
};
