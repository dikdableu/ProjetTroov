import React from 'react'
import styles from '../styles/AddButton.module.css'
import AddIcon from "../public/assets/icones/plus.png"
import Image from "next/image";

export default function AddButton() {
    
  return (
    <div className={styles.containerButton}>
      <Image
        src={AddIcon}
        alt="add button"
        width="30px"
        height="30px"
      />
    </div>
  );
}
