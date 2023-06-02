import React from 'react';
import { ThirdwebProvider, ConnectWallet, metamaskWallet } from '@thirdweb-dev/react';
import styles from "../styles/Home.module.css";

export default function Header() {
  return (
    <div className={styles.btn_connect}>
      <ConnectWallet/>
    </div>
  )
}

