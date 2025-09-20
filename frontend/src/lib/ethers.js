import { ethers } from "ethers";
import { contractAddress, contractABI } from "./contract";

let provider;
let signer;
/** @type {ethers.Contract} */
let contract;

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  provider = new ethers.BrowserProvider(window.ethereum);
  signer = provider.getSigner();
  contract = new ethers.Contract(contractAddress, contractABI, signer);
}

export { provider, signer, contract };