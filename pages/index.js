import { useContract, useNFTs } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import { NFT_CONTRACT_ADDRESS } from "../const/addresses";
import { NFTCard } from "../components/NFTCard";

export default function Home() {
  const count = 30;
  const { contract } = useContract(NFT_CONTRACT_ADDRESS);
  const { data: nfts, isLoading: isLoadingNFTs } = useNFTs(
    contract,
    {
    count: count,
    });
  return (
    <div className={styles.container}>
      <div className={styles.NFTGrid}>
      {!isLoadingNFTs && (
        nfts.map((nft, index) => (
        <NFTCard key={index} nft={nft} />
        )
        ))}
      </div>
    </div>
  );
}
