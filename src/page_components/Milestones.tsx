"use client"

import { LeftSide } from "@/components/LeftSide";
import { RightSide } from "@/components/RightSide";
import React, { ReactNode, useState } from "react";
import "./Blockchain.css"
import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { staticDataBlockchain } from "@/extensions/StaticDataBlockchain";
import { Data1_1 } from "@/explanations/blockchain/1_1";
import NavigationBar from "@/components/NavigationBar";
import styles from './Milestones.module.css'

export const Milestones = () => {
    const [selectedText, setSelectedText] = useState<ReactNode>(Data1_1);
    return (
        <>
            <NavigationBar></NavigationBar>
            <div className={styles.main}>
                <RightSide>
                    <h2>Gain knowledge about blockchain</h2>
                    <ul>
                        <li>
                            Done researchs about Blockchain, Solana, smart contracts etc.
                        </li>
                        <li>
                            Research results about topics above added to a website and deployed.
                        </li>
                        <li>
                            Solana SDK, Rust, cargo and nodejs installed on devices for development
                        </li>
                    </ul>
                    
                    <h2>Solana fork</h2>
                    <h2>Solana benchmark</h2>
                    <h2>Solana multiserver</h2>
                    <h2>Solana visualization</h2>
                    <h2>Solana test-token creation</h2>
                        
                  
                    

                </RightSide>
            </div>
        </>
    )
}