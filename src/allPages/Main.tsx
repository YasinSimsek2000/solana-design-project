"use client"

import {NavigationBar} from "@/components/NavigationBar";
import {LeftSide} from "@/components/LeftSide";
import {RightSide} from "@/components/RightSide";
import React, {ReactNode, useState} from "react";
import "./Main.css"
import {Menu, MenuItem, SubMenu} from "react-pro-sidebar";
import {staticDataBlockchain} from "@/extensions/StaticDataBlockchain";
import {Data1_1} from "@/explanations/blockchain/1_1";

export const Main = () => {
    const [selectedText, setSelectedText] = useState<ReactNode>(Data1_1);
    return (
        <>
            <NavigationBar></NavigationBar>
            <div className={"main"}>
                <LeftSide>
                    <Menu>
                        {
                            staticDataBlockchain.map((item, i) => (
                                item.content.length > 1 ? (
                                    <SubMenu key={i} label={i + ". " + item.title}>
                                        {
                                            item.content.map((subItem, j) => (
                                                    <MenuItem key={`${i}-${j}`} onClick={() => setSelectedText(subItem.content)}>
                                                        <div>{i + "." + j + " - " + subItem.title}</div>
                                                    </MenuItem>
                                                )
                                            )
                                        }
                                    </SubMenu>
                                    )
                                    : (
                                        <MenuItem key={i} onClick={() => setSelectedText(item.content[0].content)}>
                                            <div>{i + " - " + item.title}</div>
                                        </MenuItem>
                                    )
                            ))
                        }
                    </Menu>

                </LeftSide>
                <RightSide>
                    {selectedText}
                </RightSide>
            </div>
        </>
    )
}