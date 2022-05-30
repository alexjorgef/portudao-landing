import { createAlchemyWeb3 } from '@alch/alchemy-web3';
import membershipABI from 'contracts/membership/membershipAbi.json';
import getProvider from 'wallets/utils';
import erc20Abi from 'config/abi/erc20.json';
import membershipAbi from 'config/abi/MembershipNFT.json';
import daonftAbi from 'config/abi/IPDAONFT.json';
import { ethers, BigNumber } from 'ethers';
import { getContract, getProviderOrSigner } from 'utils';
import { FeeTokenMembership, polygonMainnetTokens, polygonTestnetTokens } from 'config';

const membershipAddress = '0x8e68c81ba9e3264e236b6d2273f601b385baa7b3';
const ALCHEMY_API_KEY = 'https://eth-goerli.alchemyapi.io/v2/M1NeZMgxHETfrPflwiAGtiaMwn2bKMmX';
const web3 = createAlchemyWeb3(ALCHEMY_API_KEY);

const MembershipContract = new web3.eth.Contract(
  // @ts-ignore
  membershipABI.abi,
  membershipAddress
);

const mint = async (signature: string, message: string) => {
  try {
    let tokenAddress;
    if (process.env.NODE_ENV !== 'development') {
      const token = FeeTokenMembership.MAINNET;
      tokenAddress = polygonMainnetTokens[token].address;
      console.log('Fee Token:', token);
      console.log('Fee Token Address:', tokenAddress);
    } else {
      const token = FeeTokenMembership.TESTNET;
      tokenAddress = polygonTestnetTokens[token].address;
    }

    console.log('MembershipContract', MembershipContract);

    const contractAddress = '0x0e562f5D6869f20b5243E6C441149705906094E8';

    const providerName = 'metamask';
    const chosenProvider = getProvider(providerName);
    const provider =
      providerName === 'metamask'
        ? new ethers.providers.Web3Provider(chosenProvider)
        : new ethers.providers.Web3Provider(chosenProvider);
    console.log('Provider', provider);
    const signer = provider.getSigner();
    const walletAddress = await signer.getAddress();
    console.log('walletAddress', walletAddress);

    // set up transaction parameters
    const transactionParameters = {
      to: contractAddress,
      from: walletAddress,
      data: MembershipContract.methods.mint(walletAddress, signature, message).encodeABI(),
    };

    // @ts-ignore
    const txHash = await chosenProvider.request({
      method: 'eth_sendTransaction',
      params: [transactionParameters],
    });
    console.log('txHash', txHash);

    const contract = getContract(contractAddress, membershipAbi, signer);
    console.log('Contract', contract);
    const success = await contract.mint(walletAddress, signature, message);
    return success;
  } catch (error) {
    console.log('Membership mint error', error);
    return false;
  }
};

export default mint;
